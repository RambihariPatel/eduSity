import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'


const App = () => {
  return (
    <div>

      <Navbar />
      <Hero/>
      <div className='container'>
        <Title title= 'Our PROGRAM' subTitle = 'What We Offer'/>
        <Program/>
        <About/>
      </div>
    </div>
  )
}

export default App
