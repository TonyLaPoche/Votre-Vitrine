"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

const articles = [
  {
    title: "L’art moderne, entre provocation et innovation",
    excerpt: "Plongée dans les mouvements artistiques qui bousculent les codes.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    theme: "Art moderne",
    content: `L’art moderne est un courant qui a bouleversé la perception de l’art au XXe siècle. De Picasso à Kandinsky, les artistes ont exploré de nouvelles formes, couleurs et matières, repoussant sans cesse les limites de la création. Aujourd’hui encore, l’art moderne inspire et provoque, invitant chacun à s’interroger sur la notion même d’œuvre d’art.`,
    date: "2024-05-01",
    author: "Camille Durand",
    tags: ["art", "moderne", "culture", "peinture"],
    sources: [
      { label: "Centre Pompidou", url: "https://www.centrepompidou.fr/" },
      { label: "Wikipedia", url: "https://fr.wikipedia.org/wiki/Art_moderne" }
    ]
  },
  {
    title: "Littérature contemporaine : la force des mots",
    excerpt: "Comment les auteurs d’aujourd’hui réinventent le roman.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    theme: "Littérature",
    content: `La littérature contemporaine se distingue par sa diversité et son audace. Des voix nouvelles émergent, abordant des sujets de société, d’intimité ou d’aventure. Les romans d’aujourd’hui jouent avec les styles, les genres et les formats, offrant au lecteur une expérience toujours renouvelée.`,
    date: "2024-04-18",
    author: "Camille Durand",
    tags: ["littérature", "roman", "livre", "culture"],
    sources: [
      { label: "Le Monde des Livres", url: "https://www.lemonde.fr/livres/" }
    ]
  },
  {
    title: "Presse et numérique : l’ère de l’instantané",
    excerpt: "Le journalisme à l’heure des réseaux sociaux et de l’information continue.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    theme: "Presse",
    content: `L’information circule aujourd’hui à une vitesse inédite. La presse doit s’adapter à l’ère du numérique, entre vérification des sources et course à l’instantanéité. Les journalistes explorent de nouveaux formats, du reportage interactif au podcast, pour toucher un public toujours plus connecté.`,
    date: "2024-03-30",
    author: "Camille Durand",
    tags: ["presse", "numérique", "journalisme", "actualité"],
    sources: [
      { label: "France Info", url: "https://www.francetvinfo.fr/" }
    ]
  },
];

const author = {
  name: "Camille Durand",
  bio: "Rédactrice passionnée par l’art, la littérature et l’actualité. J’aime explorer les tendances culturelles et partager des histoires inspirantes.",
  avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80",
};

function getShareLinks(article: typeof articles[0]) {
  const url = typeof window !== "undefined" ? window.location.href : "https://monsitevitrine.fr/services/blog";
  const text = encodeURIComponent(`${article.title} - ${article.excerpt}`);
  return {
    x: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodeURIComponent(article.title)}&summary=${encodeURIComponent(article.excerpt)}`,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setSelected(idx);
    setOpen(true);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-10">
      {/* Présentation du rédacteur */}
      <section className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6">
        <Image
          src={author.avatar}
          alt={author.name}
          width={100}
          height={100}
          className="rounded-full object-cover border-4 border-blue-100 shadow"
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-bold text-blue-800 mb-1">{author.name}</h2>
          <p className="text-gray-700 text-base">{author.bio}</p>
        </div>
      </section>
      <h1 className="text-3xl font-extrabold text-blue-900 mb-4 text-center">Exemple de Blog</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {articles.map((article, idx) => (
          <button
            key={idx}
            onClick={() => handleOpen(idx)}
            className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={`Lire l'article complet : ${article.title}`}
            type="button"
          >
            <div className="relative w-full h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={idx === 0}
              />
            </div>
            <div className="flex-1 flex flex-col gap-2 p-4 text-left">
              <div className="flex flex-wrap gap-2 items-center mb-1">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-800 font-semibold w-fit">{article.theme}</span>
                <span className="text-xs text-gray-400">{formatDate(article.date)}</span>
                <span className="text-xs text-gray-500">par {article.author}</span>
              </div>
              <h2 className="text-xl font-bold text-blue-800 mb-1">{article.title}</h2>
              <p className="text-gray-700 text-sm">{article.excerpt}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="inline-block px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-800 font-medium">#{tag}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Modale d'article */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 max-h-[90vh] overflow-auto">
            {selected !== null && (
              <>
                <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden">
                  <Image
                    src={articles[selected].image}
                    alt={articles[selected].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2 items-center mt-2">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-800 font-semibold w-fit">{articles[selected].theme}</span>
                  <span className="text-xs text-gray-400">{formatDate(articles[selected].date)}</span>
                  <span className="text-xs text-gray-500">par {articles[selected].author}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {articles[selected].tags.map((tag) => (
                    <span key={tag} className="inline-block px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-800 font-medium">#{tag}</span>
                  ))}
                </div>
                <Dialog.Title className="text-2xl font-extrabold text-blue-900 mb-2 mt-2">{articles[selected].title}</Dialog.Title>
                <p className="text-gray-700 text-base whitespace-pre-line">{articles[selected].content}</p>
                {/* Sources */}
                <div className="mt-2">
                  <span className="text-sm text-gray-500 font-semibold">Sources :</span>
                  <ul className="list-disc ml-6 mt-1">
                    {articles[selected].sources.map((src) => (
                      <li key={src.url}>
                        <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline flex items-center gap-1">
                          {src.label}
                          <ArrowUpRightIcon className="w-3 h-3 inline" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Partage */}
                <div className="flex gap-3 mt-2 items-center justify-between flex-wrap">
                  <div className="flex gap-3 items-center">
                    <span className="text-sm text-gray-500">Partager :</span>
                    {(() => {
                      const share = getShareLinks(articles[selected]);
                      return (
                        <>
                          <a
                            href={share.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-blue-50 hover:bg-blue-100 p-2 transition"
                            aria-label="Partager sur X (Twitter)"
                          >
                            <FaXTwitter className="w-5 h-5 text-blue-800" />
                          </a>
                          <a
                            href={share.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-blue-50 hover:bg-blue-100 p-2 transition"
                            aria-label="Partager sur Facebook"
                          >
                            <FaFacebook className="w-5 h-5 text-blue-800" />
                          </a>
                          <a
                            href={share.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-blue-50 hover:bg-blue-100 p-2 transition"
                            aria-label="Partager sur LinkedIn"
                          >
                            <FaLinkedin className="w-5 h-5 text-blue-800" />
                          </a>
                        </>
                      );
                    })()}
                  </div>
                  <button
                    className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition mt-2 sm:mt-0"
                    onClick={() => setOpen(false)}
                  >
                    Fermer
                  </button>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
} 