import reforestacion from '../../assets/reforestacion.png'
import reciclaje from '../../assets/reciclaje.png'
import playa from '../../assets/playa.png'

function Galeria() {
  return (
    <section id="galeria" className="campanas">
      <h2>Galería Ecológica</h2>

      <div className="cards">

        <div className="card">
          <img
            src={reforestacion}
            alt="Reforestación"
            style={{ width: "100%", borderRadius: "15px" }}
          />
          <h3>🌳 Reforestación</h3>
        </div>

        <div className="card">
          <img
            src={reciclaje}
            alt="Reciclaje"
            style={{ width: "100%", borderRadius: "15px" }}
          />
          <h3>♻️ Reciclaje</h3>
        </div>

        <div className="card">
          <img
            src={playa}
            alt="Limpieza de playas"
            style={{ width: "100%", borderRadius: "15px" }}
          />
          <h3>🏖️ Limpieza de playas</h3>
        </div>

      </div>
    </section>
  )
}

export default Galeria