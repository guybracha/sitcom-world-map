"use client";

import dynamic from "next/dynamic";

const SitcomMap = dynamic(() => import("./components/SitcomMap"), { ssr: false });

export default function Home() {
  return <SitcomMap />;
}
