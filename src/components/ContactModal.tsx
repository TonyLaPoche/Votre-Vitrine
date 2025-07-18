"use client";
import { Fragment, useRef, FormEvent, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, EnvelopeIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export function ContactModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const cancelButtonRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);
    // TODO: intégrer EmailJs ici avec tes clés
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-8">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
            leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl flex flex-col gap-4">
              <div className="flex items-center justify-between mb-2">
                <Dialog.Title className="text-xl font-bold flex items-center gap-2 text-blue-900">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600" /> Contact
                </Dialog.Title>
                <button ref={cancelButtonRef} onClick={() => setOpen(false)} className="p-1 rounded hover:bg-gray-100">
                  <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <div className="bg-blue-50 rounded p-3 text-sm flex gap-2 items-start">
                <InformationCircleIcon className="w-5 h-5 text-blue-500 mt-0.5" />
                <span className="text-blue-900">
                  Ce site vitrine utilise&nbsp;:
                  <ul className="list-disc ml-5 mt-1 space-y-1">
                    <li><span className="font-semibold">Next.js</span> (hébergement gratuit sur Vercel)</li>
                    <li><span className="font-semibold">Tailwind CSS</span> (design responsive, mobile first)</li>
                    <li><span className="font-semibold">EmailJs</span> (envoi d’e-mails sans backend)</li>
                    <li><span className="font-semibold">Headless UI</span> (modale accessible)</li>
                  </ul>
                </span>
              </div>
              <form className="flex flex-col gap-3 mt-2" onSubmit={handleSubmit}>
                <label htmlFor="modal-name" className="font-semibold text-blue-800">Nom</label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="rounded border border-gray-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-800"
                />
                <label htmlFor="modal-email" className="font-semibold text-blue-800">E-mail</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  placeholder="Votre e-mail"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="rounded border border-gray-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-800"
                />
                <label htmlFor="modal-message" className="font-semibold text-blue-800">Message</label>
                <textarea
                  id="modal-message"
                  name="message"
                  placeholder="Votre message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="rounded border border-gray-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-800"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 rounded-full bg-blue-600 text-white font-semibold py-2 px-6 shadow hover:bg-blue-700 transition text-base disabled:opacity-60"
                >
                  {sending ? "Envoi en cours..." : "Envoyer"}
                </button>
                {sent && <p className="text-green-600 text-sm mt-1">Message envoyé !</p>}
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 