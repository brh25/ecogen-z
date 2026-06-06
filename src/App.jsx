import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Problema from './pages/Problema'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problema" element={<Problema />} />
    </Routes>
  )
}

export default App