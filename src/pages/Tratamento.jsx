import Button from "../components/Button";

export default function Tratamento() {
  return (
    <div className="bg-[url('/man-barbershop-shaving.png')] bg-cover bg-center flex flex-col gap-8 items-center justify-center py-12 px-4 text-center min-h-[560px]">
      <div>
        <h1 className="font-black text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
          experimente um tratamento vip{" "}
          <span className="block">e tenha um serviço at home</span>
        </h1>
      </div>
      <Button text="AGENDE UM HORÁRIO" cor="bg-[#DEC7A6] text-black" />
    </div>
  );
}
