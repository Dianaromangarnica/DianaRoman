import { useState, useEffect, useRef, useCallback } from 'react'
import './Projects.css'
import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    id: 1,
    title: 'Fintech App Redesign',
    category: 'UI/UX · Mobile',
    desc: 'Rediseño completo de una aplicación bancaria móvil enfocado en mejorar la usabilidad y reducir la fricción en transacciones cotidianas.',
    tags: ['Figma', 'User Research', 'Prototyping'],
    year: '2024',
    color: '#b49b78',
    image: 'public/projects/prueba1.jpg',
  },
  {
    id: 2,
    title: 'E-commerce Design System',
    category: 'UI Design · Web',
    desc: 'Creación de un sistema de diseño escalable para una plataforma de comercio electrónico, incluyendo componentes, tokens de diseño y guías de uso.',
    tags: ['Design System', 'Figma', 'Variables'],
    year: '2024',
    color: '#8a9fa8',
    image: 'public/projects/prueba2.jpg',
  },
  {
    id: 3,
    title: 'Healthcare UX Audit',
    category: 'UX Research · Web',
    desc: 'Auditoría completa de experiencia de usuario para una plataforma de salud digital, con entrega de heurísticas y recomendaciones prioritizadas.',
    tags: ['UX Audit', 'Heuristics', 'User Testing'],
    year: '2023',
    color: '#9b8cb4',
    image: 'public/projects/prueba3.jpg',
  },
  {
    id: 4,
    title: 'Brand Identity & Web',
    category: 'UI Design · Branding',
    desc: 'Identidad visual y diseño web para una startup de tecnología sostenible, desde la conceptualización hasta los entregables finales.',
    tags: ['Branding', 'Web Design', 'Illustrator'],
    year: '2023',
    color: '#a8b48c',
    image: 'public/projects/prueba4.jpg',
  },
]

export default function Projects() {
  const [current, setCurrent]       = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection]   = useState('next') // 'next' | 'prev'
  const intervalRef                 = useRef(null)
  const isAnimatingRef              = useRef(false)

  useScrollReveal()

  const goTo = useCallback((index, dir = 'next') => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true
    setIsAnimating(true)
    setDirection(dir)

    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
      isAnimatingRef.current = false
    }, 420)
  }, [])

  const next = useCallback(() => {
    setCurrent(c => {
      const nextIdx = (c + 1) % projects.length
      goTo(nextIdx, 'next')
      return c // goTo maneja el cambio real
    })
  }, [goTo])

  // Fix: usar ref para que el interval siempre tenga el next actualizado
  const nextRef = useRef(next)
  useEffect(() => { nextRef.current = next }, [next])

  useEffect(() => {
    intervalRef.current = setInterval(() => nextRef.current(), 5000)
    return () => clearInterval(intervalRef.current)
  }, []) // solo se monta una vez

  const handlePrev = () => {
    clearInterval(intervalRef.current)
    setCurrent(c => {
      const prevIdx = (c - 1 + projects.length) % projects.length
      goTo(prevIdx, 'prev')
      return c
    })
    intervalRef.current = setInterval(() => nextRef.current(), 5000)
  }

  const handleNext = () => {
    clearInterval(intervalRef.current)
    setCurrent(c => {
      const nextIdx = (c + 1) % projects.length
      goTo(nextIdx, 'next')
      return c
    })
    intervalRef.current = setInterval(() => nextRef.current(), 5000)
  }

  const handleDot = (i) => {
    clearInterval(intervalRef.current)
    const dir = i > current ? 'next' : 'prev'
    goTo(i, dir)
    intervalRef.current = setInterval(() => nextRef.current(), 5000)
  }

  const project = projects[current]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label reveal">Proyectos</p>
        <h2 className="section-title reveal">
          Trabajo <em>selecto</em>
        </h2>

        <div className="slider-wrapper reveal">
          <div className={`slide slide-${direction} ${isAnimating ? 'animating' : ''}`}>

            {/* Info */}
            <div className="slide-info">
              <div className="slide-meta">
                <span className="slide-year">{project.year}</span>
                <span className="slide-category">{project.category}</span>
              </div>
              <h3 className="slide-title">{project.title}</h3>
              <p className="slide-desc">{project.desc}</p>
              <div className="slide-tags">
                {project.tags.map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <a href="#" className="btn-ghost" style={{ display: 'inline-block', marginTop: '28px' }}>
                Ver proyecto →
              </a>
            </div>

            {/* Visual: imagen real si existe, mockup si no */}
            <div className="slide-visual">
              {project.image ? (
                <div className="slide-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="slide-img"
                  />
                </div>
              ) : (
                <div className="slide-mockup" style={{ '--proj-color': project.color }}>
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span /><span /><span />
                    </div>
                  </div>
                  <div className="mockup-body">
                    <div className="mockup-block tall" />
                    <div className="mockup-row">
                      <div className="mockup-block" />
                      <div className="mockup-block" />
                    </div>
                    <div className="mockup-block sm" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="slider-controls">
            <button className="slider-btn" onClick={handlePrev} aria-label="Anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
            </button>

            <div className="slider-dots">
              {projects.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === current ? 'active' : ''}`}
                  onClick={() => handleDot(i)}
                  aria-label={`Ir a proyecto ${i + 1}`}
                />
              ))}
            </div>

            <button className="slider-btn" onClick={handleNext} aria-label="Siguiente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Progress bar — key=current la reinicia en cada cambio */}
          <div className="slider-progress">
            <div className="progress-bar" key={current} />
          </div>
        </div>
      </div>
    </section>
  )
}
