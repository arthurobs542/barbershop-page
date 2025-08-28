import React, { useState } from "react";
import { PhoneCall, Mail } from "lucide-react";
import FadeInSection from "../components/FadeInSection";

export default function AgendeHorario() {
  const [formData, setFormData] = useState({
    name: "",
    telefone: "",
    servico: "Corte Adulto", // inicializa com primeira opção do select
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/agendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        window.open(data.url, "_blank"); // abre o WhatsApp
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <FadeInSection>
      <section
        className="bg-[url('/barbershop-shaving.jpg')] bg-cover bg-center flex flex-col gap-8 items-center justify-center py-12 px-4 text-center bg-gray-50"
        id="agendamento"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo */}
          <div id="left-side" className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Agende um horário
            </h1>
            <p className="text-white leading-relaxed">
              Nulla egestas sapien integer mi fermentum tellus tristique
              consequat pulvinar sagittis adipiscing egestas purus et mi tempus
              semper id vel pretium magna in senectus sit eget justo eget.
            </p>

            <div id="icones-contato" className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 ">
                <PhoneCall className="w-6 h-6 text-amber-500" />
                <div>
                  <p className="font-semibold">Ligue agora</p>
                  <a
                    href="tel:+5585964567890"
                    className="text-gray-600 hover:underline"
                  >
                    (85) 96456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 ">
                <Mail className="w-6 h-6 text-amber-500" />
                <div>
                  <p className="font-semibold">Envie um email</p>
                  <a
                    href="arthurobson20@gmail.com"
                    className="text-gray-600 hover:underline"
                  >
                    arthurobson20@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito (Formulário) */}
          <div id="right-side" className="bg-white p-8 ">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium">Nome</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="telefone"
                  onChange={handleChange}
                  value={formData.telefone}
                  type="text"
                  placeholder="Digite seu telefone"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Serviço
                </label>
                <select
                  name="servico"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none"
                  value={formData.servico}
                  onChange={handleChange}
                >
                  <option value="Corte Adulto">Corte Adulto</option>
                  <option value="Penteados Infantis">Penteados Infantis</option>
                  <option value="Apara a Barba">Apara a Barba</option>
                  <option value="Corte + Barba">Corte + Barba</option>
                  <option value="Hidratação Capilar">Hidratação Capilar</option>
                  <option value="Degrade">Degradê</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows="4"
                  placeholder="Escreva sua mensagem"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 outline-none"
                  value={formData.mensagem}
                  onChange={handleChange}
                />
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
    </FadeInSection>
  );
}
