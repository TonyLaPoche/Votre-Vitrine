import Image from "next/image";

export const metadata = {
  title: "Services – Création de site vitrine, refonte, maintenance | Antoine Terrade",
  description: "Sites vitrines, refonte, maintenance, référencement naturel. Solutions adaptées à votre budget en Haute-Savoie et Grand Genève.",
  openGraph: {
    title: "Services – Création de site vitrine, refonte, maintenance | Antoine Terrade",
    description: "Sites vitrines, refonte, maintenance, référencement naturel. Solutions adaptées à votre budget en Haute-Savoie et Grand Genève.",
    url: "https://votrevitrine.vercel.app/services",
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
    title: "Services – Création de site vitrine, refonte, maintenance | Antoine Terrade",
    description: "Sites vitrines, refonte, maintenance, référencement naturel. Solutions adaptées à votre budget en Haute-Savoie et Grand Genève.",
    images: ["/profilAntoine.webp"],
  },
};

export default function Services() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-10">
      {/* Section démos */}
      <section className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-xl font-bold text-blue-800">Sites en démo</h2>
        <ul className="flex flex-col gap-4 w-full">
          <li className="bg-[#e6f0fa] border border-blue-300 rounded-lg p-4 shadow flex flex-col sm:flex-row items-center gap-4">
            <Image src="/demo-blog.webp" alt="Aperçu Blog" width={80} height={60} className="rounded-md object-cover hidden sm:block" />
            <div className="flex-1 text-left">
              <span className="font-semibold text-blue-900">Blog</span> — <span className="text-gray-900">Présentation d’un site de blog moderne, partage d’articles, tags, auteur, etc.</span><br />
              <a href="/services/blog" className="text-blue-800 underline hover:bg-blue-200 hover:text-blue-900 rounded px-1 transition">Voir la démo</a>
            </div>
          </li>
          <li className="bg-[#e6f0fa] border border-blue-300 rounded-lg p-4 shadow flex flex-col sm:flex-row items-center gap-4">
            <Image src="/demo-restaurant.webp" alt="Aperçu Restaurant" width={80} height={60} className="rounded-md object-cover hidden sm:block" />
            <div className="flex-1 text-left">
              <span className="font-semibold text-blue-900">Restaurant</span> — <span className="text-gray-900">Site vitrine pour restaurant, menu, horaires, réservation, galerie.</span><br />
              <a href="/services/restaurant" className="text-blue-800 underline hover:bg-blue-200 hover:text-blue-900 rounded px-1 transition">Voir la démo</a>
            </div>
          </li>
          <li className="bg-[#e6f0fa] border border-blue-300 rounded-lg p-4 shadow flex flex-col sm:flex-row items-center gap-4">
            <Image src="/demo-tatoueur.webp" alt="Aperçu Tatoueur" width={80} height={60} className="rounded-md object-cover hidden sm:block" />
            <div className="flex-1 text-left">
              <span className="font-semibold text-blue-900">Tatoueur/Perceur</span> — <span className="text-gray-900">Présentation, tarifs, galerie, contact.</span><br />
              <a href="/services/tatoueur" className="text-blue-800 underline hover:bg-blue-200 hover:text-blue-900 rounded px-1 transition">Voir la démo</a>
            </div>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-xl font-bold text-blue-800">Référencement & visibilité</h2>
        <p className="text-gray-700">J’utilise les meilleures pratiques de référencement naturel (SEO) pour optimiser la visibilité de votre site sur Google. Je peux également mettre en place un système de suivi personnalisé (via Firebase) pour analyser les visites et les clics sur votre site, afin de mieux comprendre le comportement de vos visiteurs.</p>
        <Image
          src="https://images.unsplash.com/photo-1657727534668-4104c475b292?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Référencement et suivi de visibilité"
          width={400}
          height={250}
          className="rounded-lg shadow max-w-full h-auto"
        />
      </section>
    </main>
  );
} 