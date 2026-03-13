import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const badgeTextRef = useRef(null)

  useEffect(() => {
    const text = 'Diseñadora gráfica - Community Manager'
    const el = badgeTextRef.current
    if (!el) return
    el.textContent = ''
    let i = 0
    const type = () => {
      if (i <= text.length) {
        el.textContent = text.slice(0, i)
        i++
        setTimeout(type, 70)
      }
    }
    const timer = setTimeout(type, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="badge-dot" />
          <span ref={badgeTextRef} className="badge-text" />
        </div>

        <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.25s' }}>
          Diana Román Garnica
        </h1>

        <p className="hero-role animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Diseñadora gráfica & Community Manager
        </p>

        <p className="hero-desc animate-fade-up" style={{ animationDelay: '0.55s' }}>
          Creo experiencias digitales y estrategias de contenido que conectan con las personas
          — combinando diseño, comunicación y funcionalidad para construir marcas con identidad
        </p>

        <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <a href="#projects" className="btn-primary">Ver proyectos</a>
          <a href="#contact" className="btn-ghost">Trabajemos juntos</a>
        </div>

        <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.85s' }}>
          {[
            { value: '3+', label: 'Años de experiencia' },
            { value: '20+', label: 'Proyectos completados' },
            { value: '15+', label: 'Clientes satisfechos' },
          ].map((s, i) => (
            <div className="hero-stat" key={s.label} style={{ animationDelay: `${0.9 + i * 0.12}s` }}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-scroll animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}
