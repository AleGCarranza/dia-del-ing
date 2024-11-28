import Link from 'next/link';
export default function Events (){
    return(
        <section className="bg-purple-100 py-12 px-6">
  <h2 className="text-3xl font-bold text-center mb-8">Eventos Online</h2>
  <ul className="space-y-4">
    {[
      { id: 1, title: 'Charla: Mujeres Liderando en Tecnología', time: '10:00 AM' },
      { id: 2, title: 'Panel: Inclusión y Diversidad en TI', time: '1:00 PM' },
      { id: 3, title: 'Taller: Cómo iniciar en el Desarrollo Web', time: '3:00 PM' },
    ].map((event) => (
      <li
        key={event.id}
        className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center"
      >
        <div>
          <span className="font-bold text-lg block">{event.title}</span>
          <span className="text-gray-500">{event.time}</span>
        </div>
        <Link
          href="/registro"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Registrarse
        </Link>
      </li>
    ))}
  </ul>
</section>

    )
}
