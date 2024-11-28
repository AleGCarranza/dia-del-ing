import Carousel from '@/components/carousel';
import Events from '@/components/events';
import Projects from '@/components/projects';
import Workshops from '@/components/workshops';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mujeres Ingenieras en Sistemas</title>
        <meta
          name='description'
          content='Celebramos a las mujeres que transforman el mundo con tecnología. Eventos, proyectos y comunidad.'
        />
      </Head>
      <main className='bg-gray-100'>
        {/* Hero Section */}
        <section className='bg-purple-600 text-white text-center py-16'>
          <h1 className='text-4xl md:text-6xl font-bold'>
            ¡Celebramos a las Mujeres Ingenieras en Sistemas!
          </h1>
          <p className='mt-4 text-lg md:text-xl'>
            Inspirando el cambio, liderando en tecnología, y rompiendo barreras.
      
          </p>
          <blockquote className='mt-4 text-base md:text-lg italic border-l-4 border-purple-500 pl-4'>
            "Las mujeres y niñas han sido histórica y sistemáticamente
            subrepresentadas en los campos relacionados con STEM.<br></br> La falta de
            inclusión de mujeres en carreras STEM es un problema mundial. En el
            mundo sólo el 35% de las mujeres estudian carreras STEM; en México,
            el 38%." <br></br>UNICEF
          </blockquote>
        </section>
        <Carousel />
        <Projects />

        <Events />
        <Workshops />

        <section className='py-12 px-6'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Citas Inspiradoras
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              '“La tecnología es una herramienta, pero las mujeres son quienes le dan propósito.”',
              '“El futuro del desarrollo está en manos diversas y creativas.”',
              '“Ser ingeniera es construir un mundo donde todos tengan un lugar.”',
              '“Cada línea de código es un paso hacia la igualdad.”',
            ].map((quote, idx) => (
              <blockquote
                key={idx}
                className='bg-purple-200 text-purple-800 p-6 rounded-lg shadow-lg text-center'
              >
                <p className='italic'>“{quote}”</p>
              </blockquote>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
