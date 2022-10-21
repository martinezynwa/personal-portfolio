import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './style.css'

const App = () => {
  return (
    <>
      <div className="page">
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  )
}

export default App
