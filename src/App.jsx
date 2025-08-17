import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/projects part/Projects.jsx'
import Contact from './components/Contact.jsx'


const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      {/*navbar */}
      <Navbar/>

      <Routes>
        {/*hero */}
        <Route path="/" element={<Hero />} />
        {/*about-education,skills */}
        <Route path="/about" element={<About />} />
        {/*projects-experience,testimotional */}
        <Route path="/projects" element={<Projects/>} />
        {/*contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/*footer */}
    </div>
  )
}

export default App
