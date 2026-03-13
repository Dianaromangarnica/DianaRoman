import './Skills.css'
import useScrollReveal from '../hooks/useScrollReveal'

const categories = [
  {
    title: 'Estrategia de Contenido',
    icon: '✦',
    skills: ['Planeacion de contenido', 'Estrategias de contenido digital', 'Copywriting para redes', 'Desarrollo de campañas de comunicación digital', 'Presentación de productos en redes', 'Creación de contenido para marcas'],
  },
  {
    title: 'Gestion de Redes Sociales',
    icon: '◎',
    skills: ['Administración de redes instucionales y corporativas', 'Gestión de comunidad', 'Interacción con audiencia', 'Monitoreo de redes', 'Posicionamiento de marca en redes'],
  },
  {
    title: 'Creación de Contenido Visual',
    icon: '◇',
    skills: ['Contenido visual para redes sociales', 'Producción de contenido audiovisual', 'Diseño de piezas gráficas para redes', 'Adaptación de contenido para platraformas digitales', 'Desarrollo de identidad visual para publicaciones', 'Storytelling visual para marcas'],
  },
  {
    title: 'Herramientas',
    icon: '⬡',
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'CapCut', 'Blender', 'Mete Business Suite', 'Notion', 'Microsoft Office'],
  },
]

export default function Skills() {
    useScrollReveal()
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label reveal">Habilidades</p>
        <h2 className="section-title reveal">
          Mi <em>stack</em> de herramientas
        </h2>

        <div className="skills-grid reveal">
          {categories.map((cat) => (
            <div className="skill-card" key={cat.title}>
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <ul className="skill-list">
                {cat.skills.map(s => (
                  <li key={s} className="skill-item">
                    <span className="skill-dot" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
