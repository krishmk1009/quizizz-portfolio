import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Client from './components/Client'
import Stats from './components/Stats'
import Cta from './components/Cta'
import Feature from './components/Feature'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <Navbar />
      <Hero />
      <Client />
      <Stats />
      <Cta />
      <Feature />
      <Project />
      <Contact />
    </>
  )
}

export default App
