import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Converter from './components/Converter'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/converter" element={<Converter />} />
    </Routes>
  )
}

export default App;
