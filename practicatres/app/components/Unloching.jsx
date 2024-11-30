import React from 'react'

const Unloching = () => {
  return (
    <div className='p-4 pt-10 text-center justify-center'>
        <div className='text-black text-4xl font-bold'>
            <h1 className=''>
                Unlocking Human Potential
            </h1>
            <h1>
                With Generative AI.
            </h1>
        </div>
        <div className='pt-4 text-gray-600'>
            <p>Developing and providing open-source AI models</p>
            <p>for creative problem-solving and industrial use.</p>
        </div>

        <div className='pt-24 space-x-6'>
            <button className='bg-gray-100 border rounded-lg w-14 h-8 hover:border-black'>Image</button>
            <button className='bg-gray-100 border rounded-lg w-14 h-8 hover:border-black'>Video</button>
            <button className='bg-gray-100 border rounded-lg w-14 h-8 hover:border-black'>Audio</button>
            <button className='bg-gray-100 border rounded-lg w-40 h-8 hover:border-black'>Language Models</button>
            <button className='bg-gray-100 border rounded-lg w-20 h-8 hover:border-black'>3D object</button>
        </div>

    </div>
  )
}

export default Unloching