import FadeInSection from "../components/FadeInSection";

export default function Depoimentos() {
  return (
    <FadeInSection>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Google */}
          <div className="flex flex-col items-center p-6">
            <img src="./google.png" alt="Ícone Google" className="w-12 mb-3" />
            <p className="uppercase text-2xl font-bold">Google</p>
            <p className="text-6xl font-bold text-amber-500 my-2">4.9</p>
            <img src="./star.png" alt="5 Estrelas" className="w-32 mb-2" />
            <p className="text-gray-600">196 Reviews</p>
          </div>

          {/* Review Destaque */}
          <div className="flex flex-col items-center border-2 border-[#DEC7A6] max-w-lg w-full mx-auto p-8  text-center">
            <img
              src="./Thumbnail.png"
              alt="Foto Cliente"
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <img src="./star.png" alt="5 Estrelas" className="w-28 mb-3" />
            <h2 className="text-lg font-semibold mb-2">
              Atendimento muito bom
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Et proin ut in dignissim sem non a nullam magna lectus urna et dui
              quam tellus imperdiet sit purus at fringilla scelerisque diam amet
              fermentum orci fringilla aliquet nulla lectus erat eu auctor.
            </p>
            <p className="font-semibold">Arthur Robson</p>
          </div>

          {/* Tripadvisor */}
          <div className="flex flex-col items-center p-6">
            <img
              src="./tripadvisor.png"
              alt="Ícone Tripadvisor"
              className="w-12 mb-3"
            />
            <p className="uppercase text-2xl font-bold">Tripadvisor</p>
            <p className="text-6xl font-bold text-amber-500 my-2">5.0</p>
            <img src="./star.png" alt="5 Estrelas" className="w-32 mb-2" />
            <p className="text-gray-600">196 Reviews</p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
