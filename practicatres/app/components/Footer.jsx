import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-2">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Sección 1: Información de la empresa */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Acerca de Nosotros</h3>
          <p>
            Somos una empresa comprometida con la calidad y la satisfacción
            del cliente. Nos especializamos en ofrecer productos y servicios
            innovadores.
          </p>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 3: Contáctanos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
          <p>
            <strong>Email:</strong> info@empresa.com
          </p>
          <p>
            <strong>Teléfono:</strong> +123 456 789
          </p>
          <p>
            <strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País
          </p>
        </div>

        {/* Sección 4: Redes sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer