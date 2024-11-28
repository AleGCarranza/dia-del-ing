import { FaVideo } from 'react-icons/fa'; // Importa el ícono de transmisión en vivo

export default function Workshops() {
  return (
    <section className="bg-blue-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Workshops Técnicos en Ingeniería en Sistemas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            id: 1,
            title: 'Arquitecturas Microservicios y Cloud Computing',
            description: 'Descubre cómo implementar arquitecturas de microservicios y su integración con plataformas en la nube.',
            image: 'https://media.licdn.com/dms/image/D4E12AQE2AdhSCRHrRA/article-cover_image-shrink_720_1280/0/1701709843277?e=2147483647&v=beta&t=Sf59B2U8MNNQfQQdk4tXFFgFG05YezGj7AIlbEUah7c',
            live: true, 
          },
          {
            id: 2,
            title: 'Arquitectura de Computadoras y Procesadores Modernos',
            description: 'Conoce la arquitectura interna de las computadoras y cómo los procesadores modernos impactan el rendimiento.',
            image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/03/arquitectura-cpu-x86-64-bit.jpg?fit=1280%2C720&amp;ssl=1',
            link: '/workshops',
          },
          {
            id: 3,
            title: 'Optimización y Diseño de Bases de Datos Relacionales',
            description: 'Aprende a diseñar y optimizar bases de datos relacionales, mejorando el rendimiento de consultas SQL y relaciones entre tablas.',
            image: 'https://miro.medium.com/v2/resize:fit:640/1*51kED9vf0BkZdYgvwJ_zig.png',
            link: '/workshops',
          },
        ].map((workshop) => (
          <div
            key={workshop.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={workshop.image}
              alt={workshop.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{workshop.title}</h3>
              <p className="text-gray-600 mt-2">{workshop.description}</p>
              {workshop.live ? (
                <div className="mt-4 text-purple-500 flex items-center">
                  <FaVideo className="mr-2" /> 
                  Transmisión en Vivo
                </div>
              ) : (
                <a
                  href={workshop.link}
                  className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-full block w-full text-center"
                >
                  Ver Grabación
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
