"use client";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

export default function HomeHeroClient() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 text-center w-full">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 leading-tight drop-shadow-sm">
        <span className="block">Besoin d’un</span>
        <span className="block text-blue-500">site vitrine&nbsp;?</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-xl mt-2">
        👤 Pour vous, votre projet ou votre activité.<br/>
        🧩 Petit budget ≠ petit site.<br/>
        <span className="inline-block mt-2">Un site moderne, rapide, responsive et facile à personnaliser.</span>
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
        <button
          className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-lg w-full sm:w-auto"
          onClick={() => setOpen(true)}
        >
          Me contacter
        </button>
        <a
          href="/services"
          className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-800 font-semibold bg-white hover:bg-blue-50 transition text-lg w-full sm:w-auto text-center"
        >
          Voir les services
        </a>
      </div>
      <ContactModal open={open} setOpen={setOpen} />
    </div>
  );
} 