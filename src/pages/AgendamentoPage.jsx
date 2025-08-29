import { useMemo, useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  UserRound,
  Scissors,
  Phone,
  Send,
} from "lucide-react";
import FadeInSection from "../components/FadeInSection";

// ✅ Ajuste este número para o WhatsApp oficial da barbearia (somente dígitos, com DDD e 55)
const WHATSAPP_NUMBER = "5585991769862"; // ex.: 55 + DDD + número

// Serviços disponíveis
const SERVICES = [
  { id: "corte", label: "Corte Adulto" },
  { id: "infantil", label: "Penteados Infantis" },
  { id: "aparar-barba", label: "Aparar Barba" },
  { id: "corte-barba", label: "Corte + Barba" },
  { id: "hidratacao", label: "Hidratação Capilar" },
  { id: "degrade", label: "Degrade" },
];

export default function AgendamentoPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0].id);
  const [date, setDate] = useState(""); // yyyy-mm-dd
  const [time, setTime] = useState(""); // HH:mm
  const [notes, setNotes] = useState("");

  // Gerar opções de horário (09:00 — 18:00, a cada 30min)
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let h = 9; h <= 18; h++) {
      for (let m of [0, 30]) {
        const hh = String(h).padStart(2, "0");
        const mm = String(m).padStart(2, "0");
        const label = `${hh}:${mm}`;
        // Evitar adicionar 18:30
        if (h === 18 && m === 30) continue;
        slots.push(label);
      }
    }
    return slots;
  }, []);

  // Data mínima = hoje
  const minDate = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  function formatPhoneForWhatsApp(raw) {
    // Mantém apenas dígitos
    const digits = raw.replace(/\D/g, "");
    // Se já vier com 55, ok; caso contrário, presume Brasil e adiciona 55 na frente
    if (digits.startsWith("55")) return digits;
    return `55${digits}`;
  }

  function buildWhatsAppLink() {
    const svc = SERVICES.find((s) => s.id === service)?.label || service;
    const [yyyy, mm, dd] = date.split("-");
    const humanDate = date ? `${dd}/${mm}/${yyyy}` : "";

    const msg =
      `Olá! Gostaria de agendar.\n\n` +
      `Nome: ${name}\n` +
      `Telefone: ${phone}\n` +
      `Serviço: ${svc}\n` +
      `Data: ${humanDate}\n` +
      `Hora: ${time}\n` +
      (notes ? `Observações: ${notes}` : "");

    const encoded = encodeURIComponent(msg);
    const targetNumber = WHATSAPP_NUMBER || formatPhoneForWhatsApp(phone);
    return `https://wa.me/${targetNumber}?text=${encoded}`;
  }

  function isValid() {
    return (
      name.trim() &&
      phone.replace(/\D/g, "").length >= 10 &&
      service &&
      date &&
      time
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid()) return;
    // Redireciona para o WhatsApp com a mensagem pronta
    window.open(buildWhatsAppLink(), "_blank");
  }

  return (
    <FadeInSection>
      <section className="mt-5 max-w-5xl mx-auto py-10  sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Agende seu horário
          </h1>
          <p className="text-gray-600 mt-2">
            Escolha a data, o horário e o serviço. Confirmaremos pelo WhatsApp.
          </p>
        </div>

        {/* Card principal */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-5 gap-6"
        >
          {/* Coluna esquerda: dados do cliente */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <UserRound className="w-5 h-5" />
              <h2 className="font-semibold">Seus dados</h2>
            </div>

            <label className="block">
              <span className="text-sm font-medium">Nome</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Telefone (WhatsApp)</span>
              <div className="mt-1 flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(85) 9 9999-9999"
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Usaremos este número para confirmar seu agendamento.
              </p>
            </label>

            <label className="block">
              <span className="text-sm font-medium">
                Observações (opcional)
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Detalhes importantes, alergias, preferências..."
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 min-h-[90px]"
              />
            </label>
          </div>

          {/* Coluna direita: serviço, data e hora */}
          <div className="lg:col-span-3 space-y-6">
            {/* Serviço */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Scissors className="w-5 h-5" />
                <h2 className="font-semibold">Serviço</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setService(s.id)}
                    className={
                      "rounded-2xl border px-3 py-2 text-sm shadow-sm transition " +
                      (service === s.id
                        ? "border-amber-500 bg-amber-500 text-white"
                        : "border-gray-200 bg-white hover:border-gray-300")
                    }
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Data */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                <h2 className="font-semibold">Data</h2>
              </div>
              <input
                type="date"
                min={minDate}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm outline-none focus:ring-2 focus:ring-black/10"
                required
              />
            </div>

            {/* Horários */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <h2 className="font-semibold">Horário</h2>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={
                      "rounded-xl border px-2 py-2 text-sm shadow-sm transition " +
                      (time === slot
                        ? "border-amber-500 bg-amber-500 text-white"
                        : "border-gray-200 bg-white hover:border-gray-300")
                    }
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={!isValid()}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-600 px-5 py-3 text-white font-medium shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                title={
                  isValid()
                    ? "Ir para WhatsApp"
                    : "Preencha os campos obrigatórios"
                }
              >
                <Send className="w-4 h-4" />
                Confirmar no WhatsApp
              </button>

              {/* Alternativa: ligação */}
              {phone && (
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-5 py-3 font-medium shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  Ligar agora
                </a>
              )}
            </div>
          </div>
        </form>

        {/* Aviso de política */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          Ao enviar, você será direcionado ao WhatsApp para finalizar o
          agendamento. Seus dados não são armazenados neste site.
        </p>
      </section>
    </FadeInSection>
  );
}
