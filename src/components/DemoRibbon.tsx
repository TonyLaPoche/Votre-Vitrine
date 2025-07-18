"use client";
import { usePathname } from "next/navigation";

export function DemoRibbon() {
  const pathname = usePathname();
  const showDemoRibbon = [
    "/services/blog",
    "/services/restaurant",
    "/services/tatoueur"
  ].includes(pathname);
  if (!showDemoRibbon) return null;
  return (
    <div className="fixed top-26 left-[-55px] z-30 rotate-[-40deg] bg-blue-700 text-white px-12 py-2 shadow-lg font-bold text-xs sm:text-sm rounded-r-lg pointer-events-none select-none">
      Site de démonstration
    </div>
  );
} 