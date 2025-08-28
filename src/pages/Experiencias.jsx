import FadeInSection from "../components/FadeInSection";

export default function Experiencia() {
  return (
    <FadeInSection>
      <section className=" py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
          {/* Coluna de texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              SUA <br />
              EXPERIÊNCIA <br />
              PERSONALIZADA
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum id ornare magna. Morbi dignissim est non ligula
              lobortis, vitae vulputate eros ultrices.
            </p>

            {/* Estatísticas */}
            <div className="flex gap-10">
              <div>
                <p className="text-4xl font-black text-black">
                  99<span className="text-[#DEC7A6]">%</span>
                </p>
                <p className="text-sm font-bold uppercase text-gray-800">
                  SATISFAÇÃO DE <br /> NOSSOS CLIENTES
                </p>
              </div>
              <div>
                <p className="text-4xl font-black text-black">
                  10<span className="text-[#DEC7A6]">+</span>
                </p>
                <p className="text-sm font-bold uppercase text-gray-800">
                  ANOS DE <br /> EXPERIÊNCIA
                </p>
              </div>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div>
            <img
              src="./barbershop-trimming-hair.jpg" // ajuste para o caminho da sua imagem
              alt="Cliente cortando cabelo"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
