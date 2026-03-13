import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#about',    label: 'Sobre mí'    },
  { href: '#projects', label: 'Proyectos'   },
  { href: '#skills',   label: 'Habilidades' },
  { href: '#contact',  label: 'Contacto'    },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('')
  const [logoText,  setLogoText]  = useState('DR')
  const [typing,    setTyping]    = useState(false)

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Typewriter: espera 2s, luego escribe "Diana Román Garnica" ── */
  useEffect(() => {
    const fullText = 'Diana Román Garnica'
    let timeout

    timeout = setTimeout(() => {
      setTyping(true)
      // Borra "DR" primero
      let deleteCount = 2
      const deleteStep = () => {
        if (deleteCount > 0) {
          setLogoText(prev => prev.slice(0, -1))
          deleteCount--
          timeout = setTimeout(deleteStep, 80)
        } else {
          // Escribe "Diana Roman"
          let i = 0
          const typeStep = () => {
            if (i <= fullText.length) {
              setLogoText(fullText.slice(0, i))
              i++
              timeout = setTimeout(typeStep, 75)
            } else {
              setTyping(false)
            }
          }
          typeStep()
        }
      }
      deleteStep()
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  const handleLink = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          {logoText}
          {typing && <span className="cursor">|</span>}
          {!typing && logoText === 'Diana Román Garnica' && <span className="dot">.</span>}
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={() => handleLink(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
