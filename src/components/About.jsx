import './About.css'
import useScrollReveal from '../hooks/useScrollReveal'
import prueba1 from '../assets/prueba1.jpg'

// ── Pon la ruta de la foto aquí cuando la tengas ──────────────
// Guarda la imagen en: public/about/diana.jpg
// Luego cambia null por: '/about/diana.jpg'
const PROFILE_IMAGE = prueba1

const stats = [
  { value: '3+', label: 'Años de experiencia' },
  { value: '20+', label: 'Proyectos completados' },
  { value: '15+', label: 'Clientes satisfechos' },
]

export default function About() {
  useScrollReveal()

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-img-wrapper">

              <div className="about-img-placeholder">
                {PROFILE_IMAGE ? (
                  <img
                    src={PROFILE_IMAGE}
                    alt="Diana Román Garnica"
                    className="about-photo"
                  />
                ) : (
                  // Placeholder hasta que haya foto
                  <>
                    <div className="about-placeholder-bg" />
                    <span className="about-placeholder-initials">DR</span>
                  </>
                )}
              </div>

              <div className="about-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                Diseñadora gráfica  ✦  Community Manager
              </div>
            </div>
          </div>

          <div className="about-text reveal reveal-delay-1">
            <p className="section-label">Sobre mí</p>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>
              <em>Community Manager</em> y <em>Diseñadora Gráfica</em><br />enfocada en marca y contenido
            </h2>

            <p className="about-paragraph">
              Soy Diana Román Garnica, Community Manager y Diseñadora Gráfica con experiencia en la gestión de redes sociales,
              creación de contenido digital y desarrollo de identidad visual para marcas. He trabajado en la
              construcción y administración de redes institucionales y corporativas, creando contenido visual
              y audiovisual orientado a fortalecer la comunicación y el posicionamiento de marca.
            </p>

            <p className="about-paragraph">
              También cuento con experiencia en diseño de empaques, desarrollo de material gráfico corporativo
              y participación como imagen digital para la promoción de productos en redes sociales. Mi enfoque
              combina creatividad, estrategia y diseño para construir marcas con una presencia visual clara
              y atractiva.
            </p>

            <div className="about-stats">
              {stats.map(s => (
                <div className="stat-item" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ display: 'inline-block', marginTop: '36px' }}>
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
