import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="w-full bg-blue-50 border-t border-blue-100 py-4 mt-0">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2 text-sm text-blue-800">
        <div>
          © {new Date().getFullYear()} Antoine Terrade. Tous droits réservés.
        </div>
        <div className="flex gap-4 items-center">
          <Link href="mailto:contact@antoineterrade.com" className="flex items-center gap-1 hover:text-blue-900">
            <EnvelopeIcon className="w-4 h-4" /> contact@antoineterrade.com
          </Link>
          <Link href="https://github.com/tonylapoche" target="_blank" className="hover:text-blue-900">GitHub</Link>
          <Link href="https://www.linkedin.com/in/antoine-terrade-web/" target="_blank" className="hover:text-blue-900">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
} 