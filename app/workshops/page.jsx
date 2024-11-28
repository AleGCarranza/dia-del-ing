export default function Workshops() {
  return (
    <section className='bg-blue-100 py-12 px-6'>
      <h2 className='text-3xl font-bold text-center mb-8'>
        Workshops Técnicos en Ingeniería en Sistemas
      </h2>
      <div className='space-y-12'>
        {[
          {
            id: 1,
            title: 'Arquitectura de Computadoras y Procesadores Modernos',
            videos: [
              'https://www.youtube.com/watch?v=eqfgNTXKkEk',
              'https://www.youtube.com/watch?v=xpeTdJXKTHc',
            ],
          },
          {
            id: 2,
            title: 'Optimización y Diseño de Bases de Datos Relacionales',
            videos: [
              'https://www.youtube.com/watch?v=O6S71on2Guk',
              'https://www.youtube.com/watch?v=WU1tUV_krtA',
            ],
          },
        ].map((workshop) => (
          <div key={workshop.id} className='space-y-4'>
            <h3 className='text-2xl font-semibold text-center'>
              {workshop.title}
            </h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {workshop.videos.map((video, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-lg overflow-hidden'
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${new URL(
                      video
                    ).searchParams.get('v')}`}
                    title={`Video ${index + 1} - ${workshop.title}`}
                    className='w-full h-48'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
