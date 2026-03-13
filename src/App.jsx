import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About.jsx'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './components/About.css'
import './components/Contact.css'
import './components/Hero.css'
import './components/Navbar.css'
import './components/Projects.css'
import './components/Skills.css'
import './components/Footer.css'
import './index.css'


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}