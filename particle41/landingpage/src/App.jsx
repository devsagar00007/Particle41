import React from 'react'
import { Hero,Statement,Skills,Help,Footer,Getstarted, Happen, Floatingnavbar } from './components'

 const App = () => {
  return (
    <div>
      <Floatingnavbar />
      <Hero />
      <Statement />
      <Skills />
      <Help />
      <Happen />
      <Getstarted />
      <Footer />
    </div>
  )
}


export default App
