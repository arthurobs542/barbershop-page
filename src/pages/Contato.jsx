import { MapPin, PhoneCall, Clock } from "lucide-react";
import FadeInSection from "../components/FadeInSection";

export default function Contato() {
  return (
    <FadeInSection>
      <section className="bg-white items-center shadow-md max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 -mt-16 px-4 sm:px-6 lg:px-8">
        {/* Card Endereço */}
        <div className="p-4 sm:p-6 text-center flex flex-col items-center">
          <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-black mb-2" />
          <h3 className="font-bold text-base sm:text-lg">ENDEREÇO</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+Godofredo+Oliveira,+000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 mt-2 text-sm sm:text-base hover:underline"
          >
            Rua Godofredo Oliveira, 000
          </a>
        </div>

        {/* Card Contato */}
        <div className="p-4 sm:p-6 text-center flex flex-col items-center">
          <PhoneCall className="w-6 h-6 sm:w-8 sm:h-8 text-black mb-2" />
          <h3 className="font-bold text-base sm:text-lg">CONTATO</h3>
          <a
            href="tel:+5585964567890"
            className="text-gray-600 mt-2 text-sm sm:text-base hover:underline"
          >
            (85) 96456-7890
          </a>
          <a
            href="tel:+5585994567890"
            className="text-gray-600 text-sm sm:text-base hover:underline"
          >
            (85) 99456-7890
          </a>
          {/* Se quiser WhatsApp */}
          <a
            href="https://wa.me/5585964567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 mt-1 text-sm sm:text-base hover:underline"
          >
            WhatsApp
          </a>
        </div>

        {/* Card Horários */}
        <div className="p-4 sm:p-6 text-center flex flex-col items-center">
          <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-black mb-2" />
          <h3 className="font-bold text-base sm:text-lg">HORÁRIOS</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            SEG - SAB: 9:00 - 18:00
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            DOMINGO: 9:00 - 15:00
          </p>
        </div>
      </section>
    </FadeInSection>
  );
}
