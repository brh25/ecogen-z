import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🌍 ECOGEN Z
      </div>

      <ul className="menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/problema">Problema Ambiental</Link></li>
        <li><Link to="/campanas">Campañas</Link></li>
        <li><Link to="/ayudar">Cómo Ayudar</Link></li>
        <li><Link to="/retos">Eco Retos</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/participa">Participa</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar