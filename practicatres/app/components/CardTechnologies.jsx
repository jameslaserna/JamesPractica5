import React from 'react'

const CardTechnologies = () => {
  return (
    <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between lg:ml-32 lg:mt-10">
            {/* Columna izquierda */}
            <div className="flex-1 text-center lg:text-left">
                <h1 className="text-black text-3xl sm:text-4xl lg:text-4xl font-semibold">
                    Technologies Supported
                </h1>
                <h1 className="text-black text-3xl sm:text-4xl lg:text-4xl font-semibold">
                    by Numbres
                </h1>
            </div>

            {/* Columna derecha */}
            <div className="flex-1 flex flex-col items-center justify-start space-y-8 lg:items-start lg:text-left">
                {/* Párrafos */}
                <div className="space-y-2 text-center lg:text-left">
                    <p className="text-sm sm:text-base lg:text-lg">Our knowledge and experience ensure stable work</p>
                    <p className="text-sm sm:text-base lg:text-lg">and growth of our partners</p>
                </div>

                {/* Encabezados h2 en la misma columna */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Columna 1 */}
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Weve Achieved in Series A</p>
                        <h1 className="text-3xl sm:text-4xl text-black font-semibold">$101M</h1>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Parameters of SD 3 Medium</p>
                        <h1 className="text-3xl sm:text-4xl text-black font-semibold">2 Billion</h1>
                    </div>

                    {/* Columna 2 */}
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Participants Enhancing Models</p>
                        <h1 className="text-3xl sm:text-4xl text-black font-semibold">200K+</h1>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Models Downloads</p>
                        <h1 className="text-3xl sm:text-4xl text-black font-semibold">10M</h1>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CardTechnologies
