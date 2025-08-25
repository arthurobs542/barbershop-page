import React from "react";
import Button from "../components/Button";

export default function Header() {
  return (
    <div className="min-h-screen bg-[url('/heroImg.png')] bg-cover bg-center flex items-center justify-center px-2">
      <div
        id="texto-hero"
        className="flex items-center flex-col gap-6 text-center"
      >
        {/* Título responsivo */}
        <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl text-white font-black leading-tight">
          Os melhores serviços em barbearia
          <span className="block">e design masculino</span>
        </h1>

        {/* Texto responsivo */}
        <p className="text-white text-lg sm:text-xl md:text-xl max-w-md sm:max-w-xl">
          Agende nossos serviços de acordo com sua agenda
        </p>

        {/* Botões responsivos */}
        <div id="button" className="flex flex-col sm:flex-row gap-3 mt-3">
          <Button text="AGENDE UM HORÁRIO" cor="bg-[#DEC7A6] text-black" />
          <Button text="VER SERVIÇOS" cor="text-white border border-white" />
        </div>
      </div>
    </div>
  );
}
