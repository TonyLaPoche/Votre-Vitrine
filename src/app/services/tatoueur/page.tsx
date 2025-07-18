import Image from "next/image";

export default function Tatoueur() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-10">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-4 text-center">Tatoueur / Perceur - Exemple</h1>
      <section className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 items-center">
        <Image
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
          alt="Tatoueur en action"
          width={600}
          height={300}
          className="rounded-xl object-cover w-full h-48 sm:h-60"
          priority
        />
        <h2 className="text-xl font-bold text-blue-800">Présentation</h2>
        <p className="text-gray-700 text-center">Studio d’art corporel, hygiène irréprochable, créations personnalisées et conseils sur-mesure.</p>
      </section>
      <section className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Tarifs</h2>
        <ul className="text-gray-700">
          <li>Tatouage (petit) : à partir de 60€</li>
          <li>Tatouage (moyen) : à partir de 120€</li>
          <li>Perçage oreille : 30€</li>
          <li>Perçage nez : 35€</li>
        </ul>
      </section>
      <section className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-2 items-center">
        <h2 className="text-xl font-bold text-blue-800 mb-2">Contact</h2>
        <p className="text-gray-700 text-center">contact@tattoo-exemple.fr<br/>06 12 34 56 78</p>
      </section>
    </main>
  );
} 