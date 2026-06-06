import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Problema from './pages/Problema'
import Campanas from './pages/Campanas'
import ComoAyudar from './pages/ComoAyudar'
import EcoRetos from './pages/EcoRetos'
import Galeria from './pages/Galeria'
import Participa from './pages/Participa'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problema" element={<Problema />} />
      <Route path="/campanas" element={<Campanas />} />
      <Route path="/ayudar" element={<ComoAyudar />} />
      <Route path="/retos" element={<EcoRetos />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/participa" element={<Participa />} />
    </Routes>
  )
}

export default App