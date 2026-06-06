import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProblemaAmbiental from '../components/sections/ProblemaAmbiental'
import Campanas from '../components/sections/Campanas'
import ComoAyudar from '../components/sections/ComoAyudar'
import EcoRetos from '../components/sections/EcoRetos'
import Galeria from '../components/sections/Galeria'
import Participa from '../components/sections/Participa'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemaAmbiental />
      <Campanas />
      <ComoAyudar />
      <EcoRetos />
      <Galeria />
      <Participa />
    </>
  )
}

export default Home