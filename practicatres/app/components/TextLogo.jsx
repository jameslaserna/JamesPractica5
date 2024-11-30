import React from 'react'
import Image from 'next/image';

const TextLogo = () => {
  return (
    <div className='p-4 mt-8'>
      <div className="flex flex-col md:flex-row justify-between ml-32">
        {/* Columna izquierda */}
        <div className="flex-1">
          <h1 className="text-black text-4xl font-semibold">Build with a Stability AI.</h1>
        </div>

        {/* Columna derecha */}
        <div className="flex-1">
          {/* Párrafos */}
          <div className="space-y-2">
            <p>Stability AI licenses offer flexibility for your generative</p>
            <p>AI needs by combining our range of state-of-the-art</p>
            <p>open models with self-hosting benefits.</p>
          </div>

          {/* Encabezados h2 en la misma columna */}
          <div className="mt-5 grid gap-4">
            <h2 className="text-black font-semibold">Cloud Platforms</h2>
            <h2 className="text-black font-semibold">Platform API</h2>
            <h2 className="text-black font-semibold">Self-Hosted License</h2>
          </div>
        </div>
      </div>
      {/*Seccion de Logos */}
      <div className="flex  justify-center items-center gap-3 mt-16">
        <div className="flex flex-col items-center md:w-1/4 lg:w-1/4">
          <Image
            src="https://img.freepik.com/vector-gratis/plantilla-logotipo-lineal-flat-go_23-2148973723.jpg?t=st=1732936654~exp=1732940254~hmac=4ce668fc4da9efd62d8204318a7491592af9d0e4f8b4856c5beea79cd1b2ae4b&w=740"
            width={80}
            height={20}
            alt="NVIDIA"
          />
        </div>
        <div className="flex flex-col items-center md:w-1/4 lg:w-1/4">
          <Image
            src="https://img.freepik.com/vector-gratis/logotipo-desarrolladores-codificacion-degradada_23-2148809440.jpg?t=st=1732936709~exp=1732940309~hmac=05aa53f0e6ddd8def2ec1446d1074faf9b51b4e90231114c65ecbe80426aae5b&w=740"
            width={80}
            height={20}
            alt="Runway"
          />
        </div>
        <div className="flex flex-col items-center md:w-1/4 lg:w-1/4">
          <Image
            src="https://img.freepik.com/vector-gratis/plantilla-logo-estrella_1043-171.jpg?t=st=1732936760~exp=1732940360~hmac=36f08a601ba34cb8ff7032a0f76bcfbe62e4c6f10880298cb0fa30268697dfa3&w=740"
            width={80}
            height={20}
            alt="Google Cloud"
          />
        </div>
        <div className="flex flex-col items-center md:w-1/4 lg:w-1/4">
          <Image
            src="https://img.freepik.com/vector-gratis/plantilla-logotipo-creativo-profesional-sc_23-2149236332.jpg?t=st=1732936776~exp=1732940376~hmac=0d321b0382479ccd15596df8cf43e62dd69682bcef9b8e387331459efe7084cd&w=1380"
            width={80}
            height={20}
            alt="Canva"
          />
        </div>
        <div className="flex flex-col items-center md:w-1/4 lg:w-1/4">
          <Image
            src="https://img.freepik.com/vector-gratis/diseno-logotipo-coloridas-iniciales-letra-t_474888-4338.jpg?t=st=1732936815~exp=1732940415~hmac=8177fd21063a5f2d5d8f13641ea43963b331072bcfd578ee848107496e4f9dcf&w=740"
            width={80}
            height={20}
            alt="Takeda"
          />
        </div>
        <div className="flex flex-col items-center md:w-1/4 lg:w-1/4">
          <Image
            src="https://img.freepik.com/vector-gratis/logotipo-empresa-elegante-diseno-letra-w_53876-120500.jpg?t=st=1732936833~exp=1732940433~hmac=6ea8bb11f5a2513db571fe3120ae7baca95203649039f230fbfa7f141e331e4a&w=740"
            width={80}
            height={20}
            alt="Ogilvy"
          />
        </div>
        <div className="flex flex-col items-center md:w-1/4 lg:w-1/4">
          <Image
            src="https://img.freepik.com/vector-gratis/plantilla-logotipo-datos-diseno-plano_23-2149201864.jpg?t=st=1732936859~exp=1732940459~hmac=97d2f79e850fe30e17b3bb4bd6c81d8d58ad98dd5e4eb7d68fc709a1423f67ef&w=740"
            width={80}
            height={20}
            alt="Intel"
          />
        </div>
        <div className="flex flex-col items-center md:w-1/4 lg:w-1/4">
          <Image
            src="https://img.freepik.com/vector-gratis/diseno-plantilla-logo_1289-37.jpg?t=st=1732936879~exp=1732940479~hmac=1a808e205c0c14d7ba22124f02e6921516e3c4445293613dd062aea3ef446844&w=740"
            width={80}
            height={20}
            alt="HubSpot"
          />
        </div>
      </div>
    </div>
  )
}

export default TextLogo
