import Image from "next/image";

export const metadata = {
  title: "À propos – Antoine Terrade, développeur de site vitrine à Thonon et Grand Genève",
  description: "Découvrez le parcours, les valeurs et l’expertise d’Antoine Terrade, créateur de sites vitrines modernes et abordables en Haute-Savoie et Grand Genève.",
  openGraph: {
    title: "À propos – Antoine Terrade, développeur de site vitrine à Thonon et Grand Genève",
    description: "Découvrez le parcours, les valeurs et l’expertise d’Antoine Terrade, créateur de sites vitrines modernes et abordables en Haute-Savoie et Grand Genève.",
    url: "https://votrevitrine.vercel.app/about",
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
    title: "À propos – Antoine Terrade, développeur de site vitrine à Thonon et Grand Genève",
    description: "Découvrez le parcours, les valeurs et l’expertise d’Antoine Terrade, créateur de sites vitrines modernes et abordables en Haute-Savoie et Grand Genève.",
    images: ["/profilAntoine.webp"],
  },
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-10">
      {/* Titre */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 text-center mb-2">À propos</h1>

      {/* Qui suis-je */}
      <section className="flex flex-col items-center text-center gap-3">
        <Image
          src="/profilAntoine.webp"
          alt="Photo d’Antoine Terrade, développeur site vitrine Haute-Savoie"
          width={120}
          height={120}
          className="rounded-full shadow-lg border-4 border-blue-800 object-cover mb-2"
        />
        <h2 className="text-xl font-bold text-blue-800">Qui suis-je ?</h2>
        <p className="text-gray-700">Développeur passionné, j&apos;aide entreprises et particuliers à être visibles sur le web, simplement et rapidement.</p>
      </section>

      {/* Ce que je propose */}
      <section className="flex flex-col items-center text-center gap-3">
        <h2 className="text-xl font-bold text-blue-800">Ce que je propose</h2>
        <p className="text-gray-700">Sites vitrines modernes, rapides, évolutifs et clé en main, adaptés à vos besoins (<a href="/services" className="text-blue-800 underline hover:text-blue-900">voir exemples</a>). Idéal pour lancer ou moderniser votre présence en ligne, sans complexité.</p>
      </section>

      {/* Tarifs */}
      <section className="flex flex-col items-center text-center gap-5">
        <h2 className="text-xl font-bold text-blue-800">Grille tarifaire</h2>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border border-blue-300 rounded-lg text-sm bg-white shadow">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-3 py-2 font-semibold text-blue-900 border-b border-blue-300">Offre</th>
                <th className="px-3 py-2 font-semibold text-blue-900 border-b border-blue-300">Détail</th>
                <th className="px-3 py-2 font-semibold text-blue-900 border-b border-blue-300">Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-blue-100">
                <td className="px-3 py-2 font-medium text-blue-900">Site vitrine “One Page”</td>
                <td className="px-3 py-2 text-gray-800">1 page, mise en ligne (hors nom de domaine), sans maintenance</td>
                <td className="px-3 py-2 font-semibold text-blue-800">300 €</td>
              </tr>
              <tr className="bg-blue-50 border-b border-blue-100">
                <td className="px-3 py-2 font-medium text-blue-900">Site vitrine multipages</td>
                <td className="px-3 py-2 text-gray-800">Base 1 page, prix additionnel pour chaque page supplémentaire, sans maintenance, hors nom de domaine</td>
                <td className="px-3 py-2 font-semibold text-blue-800">300 € + 50 €/page</td>
              </tr>
              <tr className="bg-white border-b border-blue-100">
                <td className="px-3 py-2 font-medium text-blue-900">Maintenance “One Page”</td>
                <td className="px-3 py-2 text-gray-800">Conception offerte, engagement 6 mois, renouvelable</td>
                <td className="px-3 py-2 font-semibold text-blue-800">99 €/mois</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-3 py-2 font-medium text-blue-900">Maintenance multipages</td>
                <td className="px-3 py-2 text-gray-800">Conception offerte, engagement 6 mois, renouvelable</td>
                <td className="px-3 py-2 font-semibold text-blue-800">149 €/mois</td>
              </tr>
              <tr className="bg-white border-b border-blue-100">
                <td className="px-3 py-2 font-medium text-blue-900">Theme et fonctionnalités personnalisées</td>
                <td className="px-3 py-2 text-gray-800">(Carte de visite, formulaire de contact, galerie, etc.)</td>
                <td className="px-3 py-2 font-semibold text-blue-800">sur devis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="flex flex-col items-center text-center gap-2 text-gray-700 text-sm">
        <div><span className="font-semibold text-blue-800">Délai de réalisation</span> : 2 à 5 semaines selon le projet et éléments fournis.</div>
        <div><span className="font-semibold text-blue-800">Acompte</span> : 30 % du prix à la commande.</div>
        <div><span className="font-semibold text-blue-800">Premier échange</span> : indispensable pour définir vos besoins et fournir les images du site. (visio ou téléphone)</div>
      </section>

      {/* Précision importante */}
      <section className="flex flex-col items-center text-center gap-2">
        <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded shadow max-w-lg">
          <span className="font-bold">⚠️ Important :</span> Je propose principalement des sites vitrines (présentation, contact, portfolio, restaurant, etc.).<br/>En ce qu&apos;il s&apos;agit de gestion de stock, d’authentification ou de paiement en ligne, je propose des solutions adaptées mais la tarification est différente.
        </div>
      </section>

      {/* Appel à l’action */}
      <div className="text-center text-sm text-gray-500 mt-4">Pour un devis personnalisé ou toute question, rendez-vous sur la page <a href="/contact" className="text-blue-800 underline hover:text-blue-900">Contact</a>.</div>
    </div>
  );
} 