"use client";

import { useEffect, useRef, useState } from "react";
import { Show, Tag, TAG_COLORS } from "../data/shows";
import { Lang } from "../data/i18n";

interface Props {
  shows: Show[];
  activeTag: Tag | null;
  onSelect: (show: Show) => void;
  selectedShow: Show | null;
  lang: Lang;
}

export default function GlobeView({ shows, activeTag, onSelect, selectedShow, lang }: Props) {
  // globeMountRef is the DOM node that globe.gl owns exclusively — React never touches its children
  const globeMountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mountEl = globeMountRef.current;
    if (!mountEl || globeRef.current) return;
    let cancelled = false;

    import("globe.gl").then((mod) => {
      if (cancelled || !mountEl) return;

      const GlobeFactory = (mod as any).default ?? (mod as any);
      const globe = GlobeFactory()
        .width(mountEl.clientWidth || window.innerWidth)
        .height(mountEl.clientHeight || window.innerHeight)(mountEl)
        .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
        .backgroundImageUrl("https://unpkg.com/three-globe/example/img/night-sky.png")
        .atmosphereColor("#4a90e2")
        .atmosphereAltitude(0.12)
        .pointsData(shows)
        .pointLat((d: any) => (d as Show).lat)
        .pointLng((d: any) => (d as Show).lng)
        .pointColor((d: any) => TAG_COLORS[(d as Show).tags[0]])
        .pointAltitude(0.02)
        .pointRadius(0.45)
        .pointLabel((d: any) => makeLabel(d as Show, lang))
        .onPointClick((d: any) => onSelect(d as Show))
        .pointsMerge(false);

      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.4;
      globe.controls().enablePan = false;

      globeRef.current = globe;
      setLoading(false);

      const ro = new ResizeObserver(() => {
        if (!mountEl || !globeRef.current) return;
        globeRef.current.width(mountEl.clientWidth).height(mountEl.clientHeight);
      });
      ro.observe(mountEl);
      (mountEl as any).__ro = ro;
    });

    return () => {
      cancelled = true;
      const ro = (mountEl as any).__ro as ResizeObserver | undefined;
      ro?.disconnect();
      if (globeRef.current) {
        globeRef.current._destructor?.();
        globeRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const visible = activeTag ? shows.filter((s) => s.tags.includes(activeTag)) : shows;
    globeRef.current
      .pointsData(visible)
      .pointLabel((d: any) => makeLabel(d as Show, lang));
  }, [activeTag, shows, lang]);

  useEffect(() => {
    if (!globeRef.current || !selectedShow) return;
    globeRef.current.controls().autoRotate = false;
    globeRef.current.pointOfView({ lat: selectedShow.lat, lng: selectedShow.lng, altitude: 1.5 }, 800);
  }, [selectedShow]);

  return (
    <div className="w-full h-full relative">
      {/* globe.gl owns this div entirely — React renders nothing inside it */}
      <div ref={globeMountRef} className="absolute inset-0" />

      {/* Loading overlay sits on top, outside the globe mount node */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black gap-3 pointer-events-none">
          <div className="w-10 h-10 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
          <p className="text-blue-300 text-sm">{lang === "he" ? "טוען גלובוס…" : "Loading globe…"}</p>
        </div>
      )}
    </div>
  );
}

function makeLabel(s: Show, lang: Lang) {
  const name = lang === "en" && s.nameEn ? s.nameEn : s.name;
  const city = lang === "en" ? s.cityEn : s.city;
  return `<div style="background:#1f2937dd;color:#fff;padding:6px 10px;border-radius:8px;font-family:system-ui,sans-serif;font-size:13px;max-width:200px">
    <strong>${name}</strong><br/>
    <span style="opacity:.7;font-size:11px">${city} · ${s.years}</span>
  </div>`;
}
