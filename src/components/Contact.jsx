import { useState, useEffect } from 'react'
import './Contact.css'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  // 'form' | 'leaving-form' | 'wip' | 'leaving-wip'
  const [status, setStatus] = useState('form')

  useScrollReveal()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 1. Anima salida del formulario
    setStatus('leaving-form')
    setTimeout(() => {
      // 2. Muestra el mensaje WIP (entra con fadeUp)
      setStatus('wip')
      setTimeout(() => {
        // 3. Anima salida del mensaje WIP
        setStatus('leaving-wip')
        setTimeout(() => {
          // 4. Vuelve al formulario vacío (entra con fadeUp)
          setForm({ name: '', email: '', message: '' })
          setStatus('form')
        }, 400) // duración de fade-out
      }, 5000) // cuánto dura el mensaje WIP
    }, 400) // duración de fade-out del form
  }

  const isWip  = status === 'wip'  || status === 'leaving-wip'
  const isForm = status === 'form' || status === 'leaving-form'
  const leaving = status === 'leaving-form' || status === 'leaving-wip'

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="section-label reveal">Contacto</p>
            <h2 className="section-title reveal" style={{ marginBottom: '20px' }}>
              Hablemos de tu <em>proyecto</em>
            </h2>
            <p className="contact-desc reveal">
              ¿Tienes una idea en mente o quieres mejorar tu producto digital?
              Estoy disponible para colaborar en proyectos que desafíen mi creatividad.
            </p>

            <div className="contact-links reveal">
              <a href="mailto:drgarnica28@gmail.com" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">drgarnica28@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/diana-cristina-rom%C3%A1n-garnica-321341224/" target="_blank" rel="noopener" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">diana-roman</span>
                </div>
              </a>

            </div>
          </div>

          <div className="contact-form-wrapper reveal">
            {isWip && (
              <div className={`form-wip ${leaving ? 'fade-out' : 'fade-in'}`}>
                <div className="wip-icon">🚧</div>
                <h3>Esta funcionalidad se encuentra en desarrollo</h3>
                <p>Pronto podrás enviar mensajes directamente desde aquí.</p>
              </div>
            )}

            {isForm && (
              <form
                className={`contact-form ${leaving ? 'fade-out' : 'fade-in'}`}
                onSubmit={handleSubmit}
              >
                <div className="form-field">
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Tu nombre"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="tu@email.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message" name="message" rows="5"
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={form.message} onChange={handleChange} required
                  />
                </div>
                <button
                  type="submit" className="btn-primary"
                  style={{ width: '100%', textAlign: 'center', cursor: 'pointer', border: 'none', fontFamily: 'var(--font-body)' }}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
