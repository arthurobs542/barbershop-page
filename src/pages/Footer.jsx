import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-8">
      {/* Mapa */}
      <div className="rounded-lg overflow-hidden shadow mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11453.991370071555!2d-38.56023470970646!3d-3.810439653761842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1756179899069!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Conteúdo do footer */}
      <div className="text-center flex">
        <p className="mb-4 text-gray-700">
          © 2022 Barbershop - All rights reserved
        </p>
        <div
          id="icons-footer"
          className="flex justify-center gap-4 text-gray-700"
        >
          <Facebook className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
          <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
