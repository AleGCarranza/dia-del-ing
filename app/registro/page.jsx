'use client';
import { useState } from 'react';

export default function Registro() {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar el modal

  // Manejo del cambio en el select
  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Abrir el modal de éxito
  };

  // Cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Regístrate al Evento</h2>

        {/* Select para elegir el evento */}
        <div className="mb-4">
          <label htmlFor="event" className="block text-lg font-medium text-gray-700 mb-2">
            Selecciona el Evento
          </label>
          <select
            id="event"
            name="event"
            value={selectedEvent}
            onChange={handleEventChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Selecciona un evento</option>
            <option value="Charla: Mujeres Liderando en Tecnología">
              Charla: Mujeres Liderando en Tecnología
            </option>
            <option value="Panel: Inclusión y Diversidad en TI">
              Panel: Inclusión y Diversidad en TI
            </option>
            <option value="Taller: Cómo iniciar en el Desarrollo Web">
              Taller: Cómo iniciar en el Desarrollo Web
            </option>
          </select>
        </div>

        {/* Campos del formulario */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700"
        >
          Registrarse
        </button>
      </form>

      {/* Modal de éxito */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
            <h3 className="text-xl font-bold text-green-600">¡Registro exitoso!</h3>
            <p className="mt-2">Has seleccionado el evento: {selectedEvent}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
