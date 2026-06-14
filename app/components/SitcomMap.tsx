"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Show, Tag, TAG_COLORS, TAG_VIEWS, ALL_TAGS, shows } from "../data/shows";
import { Lang, UI, TAG_LABELS } from "../data/i18n";

const GlobeView = dynamic(() => import("./GlobeView"), { ssr: false });

function showName(show: Show, lang: Lang) {
  return lang === "en" && show.nameEn ? show.nameEn : show.name;
}
function showCity(show: Show, lang: Lang) {
  return lang === "en" ? show.cityEn : show.city;
}
function showDesc(show: Show, lang: Lang) {
  return lang === "en" ? show.descEn : show.desc;
}

export default function SitcomMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ show: Show; marker: any }[]>([]);

  const [activeTag, setActiveTag] = useState<Tag | null>(null);
  const [selected, setSelected] = useState<Show | null>(null);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"map" | "globe">("map");
  const [lang, setLang] = useState<Lang>("he");
  const [mapReady, setMapReady] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const t = UI[lang];
  const dir = lang === "he" ? "rtl" : "ltr";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return shows.filter(
      (s) =>
        showName(s, lang).toLowerCase().includes(q) ||
        showCity(s, lang).toLowerCase().includes(q) ||
        s.network.toLowerCase().includes(q) ||
        showDesc(s, lang).toLowerCase().includes(q) ||
        s.tags.some((tg) => TAG_LABELS[tg][lang].toLowerCase().includes(q))
    );
  }, [query, lang]);

  // init map
  useEffect(() => {
    if (typeof window === "undefined" || mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      const container = mapRef.current!;
      if (!container || (container as any)._leaflet_id) return;

      const map = L.map(container, {
        zoomControl: false,
        preferCanvas: true,  // canvas renderer is much faster for many markers
      }).setView([30, 10], 2);
      mapInstanceRef.current = map;

      L.control.zoom({ position: "bottomleft" }).addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18,
        // Keep more tiles in cache to reduce re-fetching on pan
        keepBuffer: 4,
      }).addTo(map);

      shows.forEach((show) => {
        const color = TAG_COLORS[show.tags[0]];
        const icon = L.divIcon({
          html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
            <path d="M14 0C6.26 0 0 6.26 0 14c0 9.85 12.5 21.5 13.05 22.03a1.35 1.35 0 0 0 1.9 0C15.5 35.5 28 23.85 28 14 28 6.26 21.74 0 14 0z" fill="${color}"/>
            <circle cx="14" cy="14" r="7" fill="white" opacity="0.9"/>
            <circle cx="14" cy="14" r="4" fill="${color}"/>
          </svg>`,
          className: "",
          iconSize: [28, 36],
          iconAnchor: [14, 36],
          popupAnchor: [0, -38],
        });

        const marker = L.marker([show.lat, show.lng], { icon }).addTo(map);
        marker.on("click", () => {
          setSelected(show);
          setQuery("");
          setSearchOpen(false);
        });
        markersRef.current.push({ show, marker });
      });

      // Signal that map + markers are ready
      map.whenReady(() => setMapReady(true));
    });

    return () => {
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
      markersRef.current = [];
    };
  }, []);

  // When switching back to map view, tell Leaflet to recalculate its size
  useEffect(() => {
    if (viewMode === "map" && mapInstanceRef.current) {
      // Small delay lets the div become visible before invalidateSize runs
      const id = setTimeout(() => {
        mapInstanceRef.current?.invalidateSize();
      }, 50);
      return () => clearTimeout(id);
    }
  }, [viewMode]);

  // filter markers by tag
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    markersRef.current.forEach(({ show, marker }) => {
      if (!activeTag || show.tags.includes(activeTag)) {
        marker.addTo(mapInstanceRef.current);
      } else {
        mapInstanceRef.current.removeLayer(marker);
      }
    });
    if (activeTag) {
      const [lat, lng, zoom] = TAG_VIEWS[activeTag];
      mapInstanceRef.current.setView([lat, lng], zoom);
    } else {
      mapInstanceRef.current.setView([30, 10], 2);
    }
  }, [activeTag]);

  function flyToShow(show: Show) {
    setSelected(show);
    setQuery("");
    setSearchOpen(false);
    setActiveTag(null);
    mapInstanceRef.current?.flyTo([show.lat, show.lng], 9, { duration: 1.2 });
  }

  function selectTag(tag: Tag | null) {
    setActiveTag(tag);
    setSelected(null);
    setQuery("");
    setSearchOpen(false);
    setFilterOpen(false);
  }

  // close filter panel on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const tagCount = (tag: Tag) => shows.filter((s) => s.tags.includes(tag)).length;
  const tagLabel = (tag: Tag) => TAG_LABELS[tag][lang];

  return (
    <div className="flex flex-col h-dvh bg-gray-50" dir={dir} style={{ fontFamily: "system-ui, sans-serif" }}>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-200 px-3 py-2 flex-shrink-0">
        <div className="flex items-center gap-2">

          {/* Title */}
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-medium text-gray-900 leading-tight truncate">🎬 {t.title}</h1>
            <p className="text-xs text-gray-400">{shows.length} {t.sitcoms} · {ALL_TAGS.length} {t.countries}</p>
          </div>

          {/* Filter button + dropdown */}
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => { setFilterOpen((v) => !v); setSearchOpen(false); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm transition-colors"
              style={activeTag
                ? { background: TAG_COLORS[activeTag], color: "#fff", borderColor: TAG_COLORS[activeTag] }
                : filterOpen
                  ? { background: "#1f2937", color: "#fff", borderColor: "#1f2937" }
                  : { background: "#fff", color: "#374151", borderColor: "#d1d5db" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
              </svg>
              <span>{activeTag ? tagLabel(activeTag) : t.filterPlaceholder}</span>
              {activeTag && (
                <span
                  onClick={(e) => { e.stopPropagation(); selectTag(null); }}
                  className="opacity-70 hover:opacity-100 font-bold"
                >×</span>
              )}
            </button>

            {/* Dropdown panel */}
            {filterOpen && (
              <div
                className="absolute top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-3"
                style={{ width: "min(420px, 92vw)", direction: dir, [lang === "he" ? "right" : "left"]: 0 }}
              >
                {/* All button */}
                <button
                  onClick={() => selectTag(null)}
                  className="w-full mb-2 px-3 py-1.5 rounded-lg text-sm border transition-colors"
                  style={activeTag === null
                    ? { background: "#1f2937", color: "#fff", borderColor: "#1f2937", textAlign: lang === "he" ? "right" : "left" }
                    : { background: "#f9fafb", color: "#374151", borderColor: "#e5e7eb", textAlign: lang === "he" ? "right" : "left" }}
                >
                  {t.all} — {shows.length} {t.sitcoms}
                </button>

                {/* Tag grid */}
                <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))" }}>
                  {ALL_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => selectTag(tag)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs border transition-colors"
                      style={activeTag === tag
                        ? { background: TAG_COLORS[tag], color: "#fff", borderColor: TAG_COLORS[tag], textAlign: lang === "he" ? "right" : "left" }
                        : { background: "#f9fafb", color: "#374151", borderColor: "#e5e7eb", textAlign: lang === "he" ? "right" : "left" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: activeTag === tag ? "#fff" : TAG_COLORS[tag] }}
                      />
                      <span className="truncate">{tagLabel(tag)}</span>
                      <span className="opacity-60 flex-shrink-0 ml-auto">({tagCount(tag)})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* View toggle (map / globe) */}
          <div className="flex rounded-lg border border-gray-200 overflow-hidden text-sm flex-shrink-0">
            <button
              onClick={() => setViewMode("map")}
              className="flex items-center gap-1 px-2.5 py-1.5 transition-colors"
              style={viewMode === "map"
                ? { background: "#1f2937", color: "#fff" }
                : { background: "#fff", color: "#6b7280" }}
              title={t.map}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                <line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
              </svg>
              <span className="hidden sm:inline">{t.map}</span>
            </button>
            <button
              onClick={() => setViewMode("globe")}
              className="flex items-center gap-1 px-2.5 py-1.5 transition-colors border-l border-gray-200"
              style={viewMode === "globe"
                ? { background: "#1f2937", color: "#fff" }
                : { background: "#fff", color: "#6b7280" }}
              title={t.globe}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="hidden sm:inline">{t.globe}</span>
            </button>
          </div>

          {/* Language toggle */}
          <button
            onClick={() => setLang((l) => l === "he" ? "en" : "he")}
            className="flex items-center px-2.5 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-400 transition-colors flex-shrink-0"
            title={lang === "he" ? "Switch to English" : "עבור לעברית"}
          >
            {t.lang}
          </button>

          {/* Search */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <div className="relative flex items-center">
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-44 sm:w-60 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-blue-400"
                  style={{ direction: dir }}
                />
                <button
                  onClick={() => { setSearchOpen(false); setQuery(""); }}
                  className={`absolute ${lang === "he" ? "left-2" : "right-2"} text-gray-400 hover:text-gray-600 text-base leading-none`}
                >×</button>
              </div>
            ) : (
              <button
                onClick={() => { setSearchOpen(true); setFilterOpen(false); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-500 hover:border-gray-400 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span className="hidden sm:inline">{t.search}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── Main area ──────────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* Map wrapper — hidden when globe is active, but kept mounted to preserve state */}
        <div className="flex-1 z-0 relative" style={{ display: viewMode === "map" ? "flex" : "none", flexDirection: "column" }}>
          <div ref={mapRef} className="flex-1" />
          {/* Loading skeleton shown until Leaflet fires whenReady */}
          {!mapReady && (
            <div className="absolute inset-0 bg-[#d4e8f0] flex flex-col items-center justify-center gap-3 z-10">
              <div className="w-10 h-10 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
              <p className="text-blue-700 text-sm">{lang === "he" ? "טוען מפה…" : "Loading map…"}</p>
            </div>
          )}
        </div>

        {/* Globe */}
        {viewMode === "globe" && (
          <div className="flex-1 z-0 bg-black min-h-0">
            <GlobeView
              shows={shows}
              activeTag={activeTag}
              onSelect={(show) => { setSelected(show); setQuery(""); setSearchOpen(false); }}
              selectedShow={selected}
              lang={lang}
            />
          </div>
        )}

        {/* Search results dropdown */}
        {query.trim() && (
          <div
            className="absolute top-2 left-0 right-0 mx-3 sm:left-auto sm:right-3 sm:w-80 bg-white rounded-xl border border-gray-200 shadow-lg z-50 max-h-72 overflow-y-auto"
            style={{ direction: dir }}
          >
            {filtered.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">{t.noResults}</p>
            ) : (
              filtered.map((show) => (
                <button
                  key={show.name}
                  onClick={() => flyToShow(show)}
                  className="w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                  style={{ textAlign: lang === "he" ? "right" : "left" }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: TAG_COLORS[show.tags[0]] }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{showName(show, lang)}</p>
                    <p className="text-xs text-gray-400 truncate">{showCity(show, lang)} · {show.years}</p>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                    style={{ background: TAG_COLORS[show.tags[0]] + "20", color: TAG_COLORS[show.tags[0]] }}
                  >
                    {tagLabel(show.tags[0])}
                  </span>
                </button>
              ))
            )}
          </div>
        )}

        {/* ── Desktop side panel ──────────────────────────────────── */}
        <div
          className={`hidden sm:flex flex-col bg-white border-r border-gray-200 overflow-hidden transition-all duration-300 z-10 ${
            selected ? "w-72" : "w-0"
          }`}
          style={{ direction: dir }}
        >
          {selected && <PanelContent show={selected} lang={lang} t={t} onClose={() => setSelected(null)} />}
        </div>

        {/* ── Mobile bottom sheet ──────────────────────────────────── */}
        {selected && (
          <div
            className="sm:hidden absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl border-t border-gray-200 shadow-2xl z-40 max-h-[55vh] overflow-y-auto"
            style={{ direction: dir }}
          >
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>
            <PanelContent show={selected} lang={lang} t={t} onClose={() => setSelected(null)} />
          </div>
        )}

        {/* Mobile backdrop */}
        {selected && (
          <div
            className="sm:hidden absolute inset-0 bg-black/10 z-30"
            onClick={() => setSelected(null)}
          />
        )}
      </div>

    </div>
  );
}

type UIStrings = typeof UI["he"] | typeof UI["en"];
function PanelContent({ show, lang, t, onClose }: { show: Show; lang: Lang; t: UIStrings; onClose: () => void }) {
  return (
    <>
      <div className="h-1.5 w-full flex-shrink-0 rounded-t-sm" style={{ background: TAG_COLORS[show.tags[0]] }} />
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-base font-medium text-gray-900 leading-snug mx-2">{lang === "en" && show.nameEn ? show.nameEn : show.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-gray-600 text-xl leading-none flex-shrink-0"
          >×</button>
        </div>

        <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
          <span>📍</span><span>{lang === "en" ? show.cityEn : show.city}</span>
        </p>

        <p className="text-sm text-gray-700 leading-relaxed mb-5">{lang === "en" ? show.descEn : show.desc}</p>

        <div className="space-y-2 border-t border-gray-100 pt-4">
          {([ [t.years, show.years], [t.network, show.network] ] as [string, string][]).map(([label, value]) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-gray-400">{label}</span>
              <span className="text-gray-800 font-medium">{value}</span>
            </div>
          ))}
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">{t.category}</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: TAG_COLORS[show.tags[0]] + "20", color: TAG_COLORS[show.tags[0]] }}
            >
              {TAG_LABELS[show.tags[0]][lang]}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
