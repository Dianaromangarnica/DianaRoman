import { useEffect } from 'react'

/**
 * useScrollReveal
 * Agrega la clase "revealed" a todos los elementos con
 * la clase "reveal" cuando entran en el viewport.
 *
 * Uso en cualquier componente:
 *   import useScrollReveal from '../hooks/useScrollReveal'
 *   useScrollReveal()
 *
 * En el JSX añade la clase "reveal" (y opcionalmente "reveal-delay-1", "reveal-delay-2", etc.):
 *   <div className="reveal">...</div>
 *   <div className="reveal reveal-delay-1">...</div>
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target) // solo una vez
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}