import React from 'react'
import Image from 'next/image'

const CardMegaFinal = () => {
  return (
    <div className='md:flex flex-col md:flex-row px-8 md:px-16 mt-5'>
        {/* Card Content */}
        <div className='md:w-1/2 p-12 bg-gray-100 flex flex-col space-y-5 justify-center items-center rounded-lg'>
            <h1 className='text-4xl text-black font-bold text-center md:text-left'>
                Build with a Stability AI.
            </h1>
            <p className='text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ea eaque esse placeat sit possimus eos repudianda.
            </p>
            <div className='space-x-3'>
                <button className='bg-black text-center text-white rounded-lg px-3 py-2'>
                    Get an Offer
                </button>
                <button className='bg-gray-300 text-center text-black rounded-lg px-3 py-2'>
                    Book a Call
                </button>
            </div>
        </div>

        {/* Image Section */}
        <div className='md:w-1/2 flex justify-center items-center'>
            <div className='w-full max-w-xs md:max-w-sm lg:max-w-md'>
                <Image
                    src="https://img.freepik.com/foto-gratis/retrato-futurista-chica-joven-alta-tecnologia_23-2151133507.jpg?t=st=1732950546~exp=1732954146~hmac=b2c73fe799b815b75714cead321a72f7fe6be7c0fa11d1bf63b50a7219ec479c&w=740"
                    width={300} // Reduce el tamaño de la imagen
                    height={300} // Ajusta la altura proporcionalmente
                    alt="Picture of the author"
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
        </div>
    </div>
  )
}

export default CardMegaFinal
