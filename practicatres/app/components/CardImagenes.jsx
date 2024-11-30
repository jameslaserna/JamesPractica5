import React from 'react';
import Image from 'next/image';

const CardImagenes = () => {
  return (
    <div className="bg-gray-300 mt-6 mx-4 md:mx-36 lg:mx-36 flex flex-col md:flex-row rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Columna izquierda */}
      <div className="text-black flex flex-col justify-center w-full md:w-1/2 p-4 md:p-10 lg:p-16">
        <h2 className="text-2xl md:text-3xl font-medium">Stable Diffusion 3 Medium.</h2>
        <p className="mt-2">Is our most advanced text-to-image AI model with</p>
        <p>two billion parameters, excelling in photorealism,</p>
        <p>handling complex prompts, generating clear text,</p>
        <p>and offering unparalleled creative possibilities</p>
        <div className="mt-4 space-x-4">
          <button className="bg-black text-white w-44 h-10 rounded-lg text-sm md:text-base">
            Get Started with API
          </button>
          <button className="bg-white text-black w-24 h-10 rounded-lg text-sm md:text-base">
            Show Info
          </button>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="flex flex-col w-full md:w-1/2 space-y-4">
        {/* Fila 1: dos imágenes */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex justify-center w-full">
            <Image
              src="https://img.freepik.com/foto-gratis/foto-tigre-tendido-suelo-mientras-observa-su-territorio_181624-44049.jpg?t=st=1732930199~exp=1732933799~hmac=64216eb3431d515164d6dcde094c8975c808e3ba077e019e04407c8e509db037&w=1380"
              width={300}
              height={200}
              alt="Picture of a tiger"
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="https://img.freepik.com/foto-gratis/foto-tigre-tendido-suelo-mientras-observa-su-territorio_181624-44049.jpg?t=st=1732930199~exp=1732933799~hmac=64216eb3431d515164d6dcde094c8975c808e3ba077e019e04407c8e509db037&w=1380"
              width={300}
              height={200}
              alt="Picture of a tiger"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImagenes;
