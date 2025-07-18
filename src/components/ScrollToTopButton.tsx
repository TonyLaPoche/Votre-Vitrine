"use client";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Remonter en haut de page"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 bg-blue-800 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
} 