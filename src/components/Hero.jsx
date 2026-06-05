function Hero() {
  return (
    <section id="inicio" className="hero">

      <h1 className="titulo">
        ECOGEN Z 🌍
      </h1>

      <p className="frase">
        "La generación que sí puede cambiar el planeta"
      </p>

      <p className="descripcion">
        Bienvenido a ECOGEN Z, una plataforma creada para inspirar a los jóvenes
        a proteger el medio ambiente mediante campañas ecológicas,
        acciones sostenibles y el cuidado de nuestro planeta.
      </p>

      <a href="#participa">
        <button className="boton">
          ÚNETE AL CAMBIO
        </button>
      </a>

      <div className="estadisticas">

        <div className="estadistica">
          <span>♻️ Reciclaje</span>
          <div className="barra">
            <div className="progreso reciclaje"></div>
          </div>
          <span>80%</span>
        </div>

        <div className="estadistica">
          <span>🌳 Reforestación</span>
          <div className="barra">
            <div className="progreso reforestacion"></div>
          </div>
          <span>90%</span>
        </div>

        <div className="estadistica">
          <span>💧 Ahorro de agua</span>
          <div className="barra">
            <div className="progreso agua"></div>
          </div>
          <span>65%</span>
        </div>

        <div className="estadistica">
          <span>👥 Participación</span>
          <div className="barra">
            <div className="progreso comunidad"></div>
          </div>
          <span>75%</span>
        </div>

      </div>

    </section>
  )
}

export default Hero