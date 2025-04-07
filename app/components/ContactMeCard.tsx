import React, { useState } from 'react'
import FlexibleCard from './FlexibleCard'
import Image from 'next/image'

const ContactMeCard: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    asunto: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
  }

  return (
    <FlexibleCard>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">¡Contáctame!</h2>
          <p className="mb-4">Me gustaría saber quién anda viendo mi perfil</p>

          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
              <span>Facebook</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
              <span>Twitter</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
              <span>LinkedIn</span>
            </li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image
              src="/foto.png"
              alt="Mi foto"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col space-y-2">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="border p-2 rounded"
              value={formData.nombre}
              onChange={handleChange}
            />
            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              className="border p-2 rounded"
              value={formData.asunto}
              onChange={handleChange}
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              className="border p-2 rounded"
              value={formData.mensaje}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </FlexibleCard>
  )
}

export default ContactMeCard
