"use client";
import { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Blog", href: "/services/blog" },
      { name: "Restaurant", href: "/services/restaurant" },
      { name: "Tatoueur/Perceur", href: "/services/tatoueur" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    if (!servicesOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  return (
    <header className="w-full bg-blue-50 shadow-mm fixed top-0 left-0 z-40">
      <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <Link href="/" className="text-xl font-extrabold text-blue-800 tracking-tight">
          Votre Vitrine
        </Link>
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded hover:bg-blue-100 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            {open ? (
              <XMarkIcon className="w-7 h-7 text-blue-800" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-blue-800" />
            )}
          </button>
        </div>
        <ul className="hidden sm:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              {link.dropdown ? (
                <div ref={servicesRef} className="inline-block">
                  <button
                    className="flex items-center gap-1 text-blue-800 hover:text-blue-900 font-semibold transition focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    tabIndex={0}
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {link.name}
                    <ChevronDownIcon className="w-4 h-4 mt-0.5" />
                  </button>
                  {servicesOpen && (
                    <ul className="absolute left-0 top-full mt-2 min-w-[180px] bg-white border border-blue-100 rounded-lg shadow-lg z-50">
                      {link.dropdown.map((sublink) => (
                        <li key={sublink.name}>
                          <Link
                            href={sublink.href}
                            className="block px-4 py-2 text-blue-800 hover:bg-blue-50 hover:text-blue-900 font-medium rounded transition"
                            onClick={() => setServicesOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-blue-800 hover:text-blue-900 font-semibold transition"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Menu mobile */}
      {open && (
        <div className="sm:hidden bg-blue-50 border-t border-blue-100 shadow-md">
          <ul className="flex flex-col gap-2 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <details>
                    <summary className="flex items-center gap-1 py-2 text-blue-800 font-semibold cursor-pointer select-none">
                      {link.name}
                      <ChevronDownIcon className="w-4 h-4 mt-0.5" />
                    </summary>
                    <ul className="pl-4 flex flex-col gap-1 mt-1">
                      {link.dropdown.map((sublink) => (
                        <li key={sublink.name}>
                          <Link
                            href={sublink.href}
                            className="block py-2 text-blue-800 hover:text-blue-900 font-medium transition"
                            onClick={() => setOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 text-blue-800 hover:text-blue-900 font-semibold transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
} 