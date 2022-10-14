import Navbar from './components/Navbar'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'
import './style.css'

const App = () => {
  return (
    <>
      <div className="flex flex-col px-4 sm:px-16 max-w-screen-xl mx-auto font-poppins">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  )
}

export default App
