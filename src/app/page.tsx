import HomeHeroClient from "@/components/HomeHeroClient";
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
  return (
    <div className="relative min-h-screen flex flex-col items-center flex-start px-4 py-2 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="w-full max-w-2xl flex flex-col items-center gap-8 pt-10 pb-16">
        <Image
          src="/profilAntoine.webp"
          alt="Photo d’Antoine Terrade, développeur site vitrine Haute-Savoie"
          width={150}
          height={120}
          className="rounded-full shadow-lg border-4 border-blue-200 bg-white object-cover"
          priority
        />
        <HomeHeroClient />
      </div>
    </div>
  );
}
