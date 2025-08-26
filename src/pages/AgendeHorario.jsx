import { PhoneCall, Mail } from "lucide-react";

export default function AgendeHorario() {
  return (
    <section className="bg-[url('/barbershop-shaving.jpg')] bg-cover bg-center flex flex-col gap-8 items-center justify-center py-12 px-4 text-center bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Lado Esquerdo */}
        <div id="left-side" className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Agende um horário
          </h1>
          <p className="text-white leading-relaxed">
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel pretium magna in senectus sit eget justo eget.
          </p>

          <div id="icones-contato" className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 ">
              <PhoneCall className="w-6 h-6 text-amber-500" />
              <div>
                <p className="font-semibold">Ligue agora</p>
                <p className="text-gray-600">(85) 8453 - 3465</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 ">
              <Mail className="w-6 h-6 text-amber-500" />
              <div>
                <p className="font-semibold">Envie um email</p>
                <p className="text-gray-600">hello@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito (Formulário) */}
        <div id="right-side" className="bg-white p-8 ">
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Telefone
              </label>
              <input
                type="text"
                placeholder="Digite seu telefone"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Serviço</label>
              <select className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none">
                <option>Selecione um serviço</option>
                <option>Corte Masculino</option>
                <option>Barba</option>
                <option>Tratamento VIP</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Mensagem
              </label>
              <textarea
                rows="4"
                placeholder="Escreva sua mensagem"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-xl font-semibold hover:bg-amber-600 transition"
            >
              Agendar Horário
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
