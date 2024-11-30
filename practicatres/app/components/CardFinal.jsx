import React from 'react'
import Image from 'next/image'

const CardFinal = () => {
  return (
    <div className="mt-16 ml-5 mr-5">
      <div className="">
        <div className="text-black font-bold text-center md:text-left">
          <p>Companies Use Our Advanced</p>
          <p>Technologies to Innovate, Optimize</p>
          <p>Operations and Drive Significant</p>
          <p>Growth Across Industries.</p>
          <div className="bg-black text-white w-32 h-6 text-center rounded-md font-normal mt-5 mx-auto md:mx-0">
            <button>All Stories 98</button>
          </div>
        </div>

        <div className="mt-5 grid grid-rows-3 grid-cols-1 md:grid-cols-3 gap-4">
          {/* Contenedor Primero (Primera fila, columna 2 en pantallas grandes) */}
          <div className="row-start-1 md:col-start-2 flex justify-center items-center h-72 bg-gray-100 p-4 rounded-lg">
            <div className="flex w-auto">
              <Image
                src="https://img.freepik.com/foto-gratis/robots-plano-medio-abrazando-mundo-fantasia_23-2150900489.jpg?t=st=1732943879~exp=1732947479~hmac=3f1186a24e135d2f0280951124775abc0cc6eb79b8c1792789a4a80d78bae735&w=740"
                width={200}
                height={200}
                alt="Noteworthy Image"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="flex-1 ml-4">
              <h1 className="text-black text-xl font-semibold">James Thornton</h1>
              <p className="mt-2 text-black text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores eveniet sint dignissimos voluptatum quasi atque ipsam
                nemo ducimus, veniam quibusdam, accusantium itaque cupiditate
                eligendi quisquam tempore optio, ullam placeat magni.
              </p>
            </div>
          </div>

          {/* Contenedor Segundo (Segunda fila, columna 1) */}
          <div className="row-start-2 md:col-start-1 flex justify-start items-center h-72 bg-gray-100 p-4 rounded-lg">
            <div className="flex w-auto">
              <Image
                src="https://img.freepik.com/foto-gratis/robots-plano-medio-abrazando-mundo-fantasia_23-2150900489.jpg?t=st=1732943879~exp=1732947479~hmac=3f1186a24e135d2f0280951124775abc0cc6eb79b8c1792789a4a80d78bae735&w=740"
                width={200}
                height={200}
                alt="Noteworthy Image"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="flex-1 ml-4">
              <h1 className="text-black text-xl font-semibold">
                Guillemette Picard
              </h1>
              <p className="mt-2 text-black text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores eveniet sint dignissimos voluptatum quasi atque ipsam
                nemo ducimus, veniam quibusdam, accusantium itaque cupiditate
                eligendi quisquam tempore optio, ullam placeat magni.
              </p>
            </div>
          </div>

          {/* Contenedor Tercero (Tercera fila, columna 3) */}
          <div className="row-start-3 md:col-start-3 flex items-center h-72 bg-gray-100 p-4 rounded-lg">
            <div className="flex w-auto">
              <Image
                src="https://img.freepik.com/foto-gratis/robots-plano-medio-abrazando-mundo-fantasia_23-2150900489.jpg?t=st=1732943879~exp=1732947479~hmac=3f1186a24e135d2f0280951124775abc0cc6eb79b8c1792789a4a80d78bae735&w=740"
                width={200}
                height={200}
                alt="Noteworthy Image"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="flex-1 ml-4">
              <h1 className="text-black text-xl font-semibold">Yamini Rangan</h1>
              <p className="mt-2 text-black text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores eveniet sint dignissimos voluptatum quasi atque ipsam
                nemo ducimus, veniam quibusdam, accusantium itaque cupiditate
                eligendi quisquam tempore optio, ullam placeat magni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFinal;
