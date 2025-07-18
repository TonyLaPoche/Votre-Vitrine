"use client";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import Image from "next/image";

export const metadata = {
  title: "Antoine Terrade – Création de site vitrine pas cher en Haute-Savoie & Grand Genève",
  description: "Développeur indépendant à Thonon, Évian, Annemasse, Genève. Création de sites vitrines modernes, rapides et abordables. Contactez Antoine Terrade pour votre site internet sur-mesure.",
  openGraph: {
    title: "Antoine Terrade – Site vitrine Haute-Savoie & Grand Genève",
    description: "Création de sites vitrines modernes, rapides et abordables. Contactez Antoine Terrade, développeur indépendant.",
    url: "https://votrevitrine.vercel.app/",
    siteName: "Votre Vitrine",
    images: [
      {
        url: "/profilAntoine.webp",
        width: 800,
        height: 600,
        alt: "Photo d’Antoine Terrade, développeur web Haute-Savoie",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine Terrade – Site vitrine Haute-Savoie & Grand Genève",
    description: "Création de sites vitrines modernes, rapides et abordables. Contactez Antoine Terrade, développeur indépendant.",
    images: ["/profilAntoine.webp"],
  },
};

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen flex flex-col items-center flex-start px-4 py-2 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* Hero section */}
      <div className="w-full max-w-2xl flex flex-col items-center gap-8 pt-10 pb-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/profilAntoine.webp"
            alt="Photo d’Antoine Terrade, développeur site vitrine Haute-Savoie"
            width={150}
            height={120}
            className="rounded-full shadow-lg border-4 border-blue-200 bg-white object-cover"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 leading-tight drop-shadow-sm">
            <span className="block">Besoin d’un</span>
            <span className="block text-blue-500">site vitrine&nbsp;?</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-xl mt-2">
            👤 Pour vous, votre projet ou votre activité.<br/>
            🧩 Petit budget ≠ petit site.<br/>
            <span className="inline-block mt-2">Un site moderne, rapide, responsive et facile à personnaliser.</span>
          </p>
        </div>
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
      </div>
      <ContactModal open={open} setOpen={setOpen} />
    </div>
  );
}
