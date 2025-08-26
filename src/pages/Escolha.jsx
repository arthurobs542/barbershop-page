export default function Escolha() {
  return (
    <section id="header-escolhas" className="py-16 px-6 text-center">
      {/* Título */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        por que escolher a barbearia
      </h1>

      {/* Descrição */}
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 leading-relaxed">
        Nulla egestas sapien integer mi fermentum tellus tristique consequat
        pulvinar sagittis adipiscing egestas purus et mi tempus semper id vel
        prci eu magna in senectus sit eget justo eget.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-8 transition text-center">
          <img
            src="/certificado.png"
            alt="Ícone certificado"
            className="w-[60px] mb-4"
          />
          <h2 className="text-xl font-semibold mb-3 uppercase border-b-2 border-[#DEC7A6]">
            Certificados
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Nossa equipe de barbeiros licenciados segue normas rigorosas de
            higiene e segurança para oferecer uma experiência confortável e
            confiável.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-8 transition text-center">
          <img
            src="/master.png"
            alt="Ícone maestria"
            className="w-[60px] mb-4"
          />
          <h2 className="text-xl font-semibold mb-3 uppercase border-b-2 border-[#DEC7A6]">
            Maestria
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Profissionais altamente qualificados, com anos de experiência e
            paixão pela arte de cuidar do visual masculino.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-8 transition text-center">
          <img
            src="/trusted.png"
            alt="Ícone confiável"
            className="w-[60px] mb-4"
          />
          <h2 className="text-xl font-semibold mb-3 uppercase border-b-2 border-[#DEC7A6]">
            Confiável
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Construímos relacionamentos de confiança com nossos clientes,
            garantindo qualidade e satisfação a cada visita.
          </p>
        </div>
      </div>
    </section>
  );
}
