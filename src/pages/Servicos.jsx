import Button from "../components/Button";
import FadeInSection from "../components/FadeInSection";

export default function Servicos() {
  const servicos = [
    {
      id: 1,
      titulo: "Corte Adulto",
      descricao:
        "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      preco: 39.0,
      icone: "./Adult-haircut.png",
    },
    {
      id: 2,
      titulo: "Penteados Infantis",
      descricao:
        "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      preco: 19.0,
      icone: "./penteado-infantil.png",
    },
    {
      id: 3,
      titulo: "Apara a Barba",
      descricao:
        "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      preco: 29.0,
      icone: "./apara-barba.png",
    },
    {
      id: 4,
      titulo: "Corte + Barba",
      descricao:
        "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      preco: 39.0,
      icone: "./corte-barba.png",
    },
    {
      id: 5,
      titulo: "Hidratação Capilar",
      descricao:
        "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      preco: 10.0,
      icone: "./hidratacao.png",
    },
    {
      id: 6,
      titulo: "Degrade",
      descricao:
        "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      preco: 49.0,
      icone: "./degrade.png",
    },
  ];

  return (
    <FadeInSection>
      <section id="servicos" className=" py-14">
        <div
          id="conteiner-textos"
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h1 className="text-3xl font-bold">Conheça nossos serviços</h1>
          <p className="text-gray-600 mt-4">
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel pretium magna in senectus sit eget justo eget.
          </p>
        </div>

        {/* tabela de menu estilo da imagem */}
        <div
          id="conteiner-tabela-servicos"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto bg-white py-10 shadow-md"
        >
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="flex items-start gap-5 justify-center"
            >
              <img
                src={servico.icone}
                alt={servico.titulo}
                className="w-12 h-12 object-contain"
              />
              <div className="w-[250px]">
                <h2 className="font-extrabold uppercase">{servico.titulo}</h2>
                <p className="text-gray-600 text-sm">{servico.descricao}</p>
                <p className="font-extrabold mt-2">
                  R${servico.preco.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-10">
          <Button
            text="AGENDE UM HORÁRIO"
            cor="bg-[#DEC7A6] text-black"
            targetId="agendamento"
          />
        </div>
      </section>
    </FadeInSection>
  );
}
