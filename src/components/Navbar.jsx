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

        {/* Por ahora los demás los dejamos igual */}
        <li><a href="#campanas">Campañas</a></li>
        <li><a href="#ayudar">Cómo Ayudar</a></li>
        <li><a href="#retos">Eco Retos</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#participa">Participa</a></li>
      </ul>

    </nav>
  )
}

export default Navbar