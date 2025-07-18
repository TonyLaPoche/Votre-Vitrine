"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);
    try {
      // Remplace les valeurs ci-dessous par tes propres identifiants EmailJs
      await emailjs.send(
        "service_xxx", // ID du service
        "template_xxx", // ID du template
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "user_xxx" // Clé publique
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Erreur lors de l&apos;envoi. Réessaie plus tard.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 flex flex-col gap-8 items-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 text-center">Contact</h1>
      <form className="w-full flex flex-col gap-4 bg-white rounded-xl shadow p-6" onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-semibold text-blue-800">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom"
          value={form.name}
          onChange={handleChange}
          required
          className="rounded border border-blue-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-800"
        />
        <label htmlFor="email" className="font-semibold text-blue-800">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre e-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="rounded border border-blue-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-800"
        />
        <label htmlFor="message" className="font-semibold text-blue-800">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="rounded border border-blue-200 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-800"
        />
        <button
          type="submit"
          disabled={sending}
          className="mt-2 rounded-full bg-blue-600 text-white font-semibold py-2 px-6 shadow hover:bg-blue-700 transition text-base disabled:opacity-60"
        >
          {sending ? "Envoi en cours..." : "Envoyer"}
        </button>
        <div aria-live="polite" className="min-h-[1.5em]">
          {sent && <p className="text-green-600 text-sm mt-1">Message envoyé !</p>}
          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </div>
      </form>
      <div className="text-sm text-blue-800 text-center mt-4">
        Ce formulaire utilise <b>EmailJs</b> pour envoyer vos messages directement par e-mail.<br/>
        <span className="text-xs text-gray-500">(Aucune donnée n&apos;est stockée sur le site)</span>
      </div>
    </div>
  );
} 