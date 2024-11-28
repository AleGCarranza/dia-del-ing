'use client';
import { useState } from 'react';

export default function VisibilityCarousel() {
  const motives = [
    {
      id: 5,
      title: 'Situación Actual en México',
      description:
        'Solo el 20% de las personas en carreras de ingeniería en sistemas en México son mujeres ',
      image: 'https://www.anahuac.mx/blog/sites/default/files/articles/1_5.jpg',
    },
    {
      id: 1,
      title: 'Romper Estereotipos',
      description:
        'Empoderar a las mujeres en el campo de la ingeniería en sistemas ayuda a desmitificar los estereotipos de género.',
      image: 'https://www.voicesofyouth.org/sites/voy/files/styles/full_width_image/public/images/2020-10/10-estereotipos-de-genero-que-han-cambiado-con-el-tiempo-banner-696x364.jpg?itok=AYMA8YEr',
    },
    {
      id: 2,
      title: 'Diversidad e Innovación',
      description:
        'La diversidad en equipos de trabajo fomenta perspectivas únicas y soluciones más innovadoras.',
      image: 'https://media.licdn.com/dms/image/v2/D4E12AQGKh0yENb81Pw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1694624711015?e=1736380800&v=beta&t=OKtO2A4FEkjSGQi1d0W6Bf2xIhWXnm72NZad49d-XgA',
    },
    {
      id: 3,
      title: 'Inspirar a las Nuevas Generaciones',
      description:
        'Visibilizar a las ingenieras actuales motiva a jóvenes a considerar carreras en tecnología.',
      image:
        'https://esingenieria.net/wp-content/uploads/2024/08/Los-jovenes-no-hablan-de-Ingenieria-1024x683.jpg',
    },
    {
      id: 4,
      title: 'Cerrar Brechas de Género',
      description:
        'Impulsar la representación femenina es clave para construir un entorno laboral más equitativo.',
      image:
        'https://panamaendirecto.com/wp-content/uploads/2023/05/mujeres-en-la-tecnologia.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === motives.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? motives.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className='bg-blue-100 py-12 px-6'>
      <h2 className='text-3xl font-bold text-center mb-8'>
        Motivos para Visibilizar a las Ingenieras en Sistemas
      </h2>
      <div className='relative max-w-4xl mx-auto overflow-hidden'>
        <div
          className='flex transition-transform duration-500'
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {motives.map((motive) => (
            <div
              key={motive.id}
              className='min-w-full text-center px-4 flex-shrink-0'
            >
              <img
                src={motive.image}
                alt={motive.title}
               className="w-full h-[274px] object-cover rounded-lg mb-4"
              />
              <h3 className='text-xl font-semibold'>{motive.title}</h3>
              <p className='text-gray-700 mt-2'>{motive.description}</p>
            </div>
          ))}
        </div>
        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full'
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full'
        >
          →
        </button>
      </div>
      {/* Indicadores */}
      <div className='flex justify-center mt-4 space-x-2'>
        {motives.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-purple-500' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
