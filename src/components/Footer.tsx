import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
        <div className="text-3xl font-serif tracking-wider">
          MAISON LUXE
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="p-3 hover:bg-white/10 rounded-full transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 hover:bg-white/10 rounded-full transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 hover:bg-white/10 rounded-full transition-all duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-gray-400 tracking-wider">
          © {new Date().getFullYear()} Maison Luxe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
