import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
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
        <Footer />
      </div>
    </>
  )
}

export default App
