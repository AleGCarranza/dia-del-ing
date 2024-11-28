import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Women Techmakers',
      description: '"Una iniciativa global de Google que empodera a las mujeres en tecnología mediante recursos, eventos y una comunidad de apoyo."',
      image: 'https://miro.medium.com/v2/resize:fit:500/1*-_zVpHOYFZgtzasKTJF8Pw.jpeg',
      link: 'https://developers.google.com/womentechmakers',
    },
    {
      id: 2,
      title: 'Technolatinas',
      description: '"Un movimiento que impulsa la participación de mujeres latinoamericanas en la tecnología y fomenta el liderazgo en la industria."',
      image: 'https://technolatinas.org/_next/static/media/paper.67dd6288.png',
      link: 'https://technolatinas.org/',
    },
    {
      id: 3,
      title: 'Laboratoria',
      description: '"Organización que forma y conecta a mujeres con carreras en tecnología, transformando sus vidas y las de sus comunidades."',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeH9QGU-h50KExqwOCkOWdBIART6zyzoYSg&s',
      link:'https://www.laboratoria.la/',
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Proyectos Liderados por y para Mujeres
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item) => (
          <div
            key={item.id} // Corregido: Usar un identificador único
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.image} // Asegúrate de que `item.image` sea válido
              alt={item.title} // Usar `item.title` para accesibilidad
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              {/* Verificar si existe un enlace antes de renderizar */}
              {item.link && (
               <Link
               href={item.link}
               className="text-purple-600 hover:underline mt-2 inline-block"
               target="_blank"
               rel="noopener noreferrer"
             >
               Saber más
             </Link>
                
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

  