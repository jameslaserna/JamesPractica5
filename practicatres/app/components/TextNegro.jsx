import React from 'react';
import Image from 'next/image';

const TextNegro = () => {
  return (
    <div className="bg-black ">
      {/* Contenedor principal */}
      <div className="ml-4 xs:ml-4 sm:ml-6 md:ml-36 mr-4 xs:mr-4 sm:mr-6 md:mr-20 mt-10 flex flex-col md:flex-row items-center justify-between">
        {/* Columna izquierda */}
        <div className="flex flex-col w-full md:w-1/2 text-white mt-6 xs:mt-8 sm:mt-10">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            AI Tools Designed to Enhance and Simplify Your Creative Workflow.
          </h1>
        </div>
      </div>

      {/* Contenedor de la tarjeta */}
      <div className="bg-white w-full h-auto xs:w-11/12 sm:w-5/6 md:w-4/6 mt-6 mx-4 xs:mx-4 sm:mx-6 md:mx-36 lg:mx-36 flex flex-col md:flex-row rounded-lg p-4 xs:p-5 sm:p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-6">
  {/* Columna izquierda */}
  <div className="text-black flex flex-col justify-center w-full md:w-1/2 p-4 xs:p-6 sm:p-8 md:p-10 lg:p-16">
    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium">
      Stable Assistant
    </h2>
    <p className="mt-2 text-sm xs:text-base">
      Is our most advanced text-to-image AI model with
    </p>
    <p className="text-sm xs:text-base">two billion parameters, excelling in photorealism,</p>
    <p className="text-sm xs:text-base">handling complex prompts, generating clear text,</p>
    <p className="text-sm xs:text-base">
      and offering unparalleled creative possibilities
    </p>
    <div className="mt-4 space-x-2 xs:space-x-3 sm:space-x-4">
      <button className="bg-black text-white w-32 xs:w-36 sm:w-40 md:w-44 h-10 rounded-lg text-xs xs:text-sm md:text-base">
        Start Your Free Trial
      </button>
      <button className="bg-gray-200 text-black w-24 xs:w-28 sm:w-30 md:w-32 h-10 rounded-lg text-xs xs:text-sm md:text-base">
        Show Use Cases
      </button>
    </div>
  </div>

  {/* Columna derecha */}
  <div className="flex flex-col w-full md:w-1/2 space-y-4">
    {/* Fila 1: Imagen */}
    <div className="relative w-full h-full flex justify-center items-center">
      <Image
        src="https://img.freepik.com/foto-gratis/foto-tigre-tendido-suelo-mientras-observa-su-territorio_181624-44049.jpg?t=st=1732930199~exp=1732933799~hmac=64216eb3431d515164d6dcde094c8975c808e3ba077e019e04407c8e509db037&w=1380"
        width={300}
        height={200}
        alt="Picture of a tiger"
        className="rounded-lg object-contain w-full h-full sm:w-72 md:w-96 lg:w-128"
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default TextNegro;
