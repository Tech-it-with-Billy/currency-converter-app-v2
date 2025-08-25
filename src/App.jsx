import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import Converter from './components/Converter'

function App() {
  return (
    <div>
      <LandingPage />
      <Converter />
    </div>
  )
}

export default App;
