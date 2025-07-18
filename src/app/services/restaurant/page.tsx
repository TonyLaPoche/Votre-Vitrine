import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre histoire", href: "#histoire" },
  { label: "Carte", href: "#carte" },
  { label: "Horaires", href: "#infos" },
];

export default function Restaurant() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-12">
      {/* Navigation interne sticky */}
      <nav className="sticky top-4 z-30 mb-4 flex justify-center">
        <ul className="flex gap-0 bg-white/80 backdrop-blur rounded-full shadow px-4 py-2 border border-blue-100 justify-center items-center mx-auto">
          {navLinks.map((link, idx) => (
            <li key={link.href} className="flex items-center">
              {idx > 0 && (
                <span className="mx-0 h-5 w-0.5 bg-blue-400 rounded-full" aria-hidden="true"></span>
              )}
              <a
                href={link.href}
                className="text-blue-900 font-semibold hover:text-blue-600 transition px-2 py-1 text-center text-sm sm:text-base"
                style={{ scrollBehavior: "smooth" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section id="accueil" className="relative w-full h-56 sm:h-96 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center scroll-mt-20">
        <Image
          src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Intérieur de restaurant élégant, ambiance chaleureuse"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-black/60 rounded-xl px-6 py-6 text-center max-w-xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow mb-2">Le Rivage</h1>
            <span className="text-lg sm:text-2xl text-blue-100 font-medium block mb-4">Saveurs marines &amp; vue exceptionnelle sur le lac</span>
            <a
              href="#infos"
              className="inline-block mt-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-lg"
            >
              Réserver une table
            </a>
          </div>
        </div>
      </section>

      {/* Histoire / Présentation */}
      <section id="histoire" className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 items-center scroll-mt-20">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Plat gastronomique raffiné, restaurant bord de mer"
          width={600}
          height={300}
          className="rounded-xl object-cover w-full h-48 sm:h-60 mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Notre histoire</h2>
        <p className="text-gray-700 text-center max-w-2xl">
          Depuis 1985, Le Rivage accueille ses clients dans un cadre idyllique face à la mer. Notre cuisine, inspirée des produits frais de la région, allie tradition et créativité. Venez découvrir une expérience culinaire unique, entre terre et mer, dans une ambiance chaleureuse et raffinée.
        </p>
      </section>

      {/* Menu */}
      <section id="carte" className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8 scroll-mt-20">
        <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Notre carte</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Entrées</h3>
            <ul className="text-gray-700">
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Salade de la mer</span><span>12€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Carpaccio de Saint-Jacques</span><span>15€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Terrine maison</span><span>9€</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Plats</h3>
            <ul className="text-gray-700">
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Filets de perche, sauce citron</span><span>24€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Côte de bœuf grillée</span><span>32€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Risotto aux gambas</span><span>22€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Burger du Rivage</span><span>18€</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Desserts</h3>
            <ul className="text-gray-700">
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Tarte citron meringuée</span><span>8€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Fondant au chocolat</span><span>9€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Assiette de fromages</span><span>7€</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Boissons</h3>
            <ul className="text-gray-700">
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Verre de vin blanc</span><span>5€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Verre de rosé</span><span>5€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Jus de fruits frais</span><span>4€</span></li>
              <li className="flex justify-between border-b py-1 hover:bg-blue-50 transition rounded"><span>Café</span><span>2€</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Horaires & Contact */}
      <section id="infos" className="grid grid-cols-1 sm:grid-cols-2 gap-8 scroll-mt-20">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-2 items-center">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Horaires</h2>
          <ul className="text-gray-700 text-center">
            <li>Lundi - Vendredi : 12h - 14h / 19h - 22h</li>
            <li>Samedi : 19h - 23h</li>
            <li>Dimanche : fermé</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-2 items-center">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Contact</h2>
          <p className="text-gray-700 text-center">1, Promenade du Littoral<br/>74200 Évian-les-Bains</p>
          <p className="text-gray-700 text-center">Tél : 04 50 00 00 00<br/>contact@lerivage.fr</p>
          <div className="w-full h-32 rounded-lg overflow-hidden mt-2 bg-blue-50 flex items-center justify-center">
            <MapPinIcon className="w-12 h-12 text-blue-400" />
          </div>
        </div>
      </section>
    </main>
  );
} 