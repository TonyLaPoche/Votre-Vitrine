import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact – Demandez un devis pour votre site vitrine | Antoine Terrade",
  description: "Contactez Antoine Terrade pour discuter de votre projet de site internet vitrine, obtenir un devis ou des conseils personnalisés en Haute-Savoie et Grand Genève.",
  openGraph: {
    title: "Contact – Demandez un devis pour votre site vitrine | Antoine Terrade",
    description: "Contactez Antoine Terrade pour discuter de votre projet de site internet vitrine, obtenir un devis ou des conseils personnalisés en Haute-Savoie et Grand Genève.",
    url: "https://votrevitrine.vercel.app/contact",
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
    title: "Contact – Demandez un devis pour votre site vitrine | Antoine Terrade",
    description: "Contactez Antoine Terrade pour discuter de votre projet de site internet vitrine, obtenir un devis ou des conseils personnalisés en Haute-Savoie et Grand Genève.",
    images: ["/profilAntoine.webp"],
  },
};

export default function Contact() {
  return <ContactForm />;
} 