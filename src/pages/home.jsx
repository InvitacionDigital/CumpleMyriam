import Timer from '../components/timer'
import Location from '../components/location'
import Asist from '../components/asist'
import Footer from '../components/footer'

import dorado from '../images/doradosinletras.jpeg'
import dorado_info from "../images/doradoinfo.jpg"
import dorado_titulo from "../images/doradotitulo.jpg"
import dorado_asistencia from "../images/doradoasistencia.jpg"
import {CiLocationOn}  from "react-icons/ci";

function Home() {

  return (
    <>
    <img src={dorado_titulo} className="bg-coverer" alt="Dorado" />
    <Timer />
    <img src={dorado_info} alt="Dorado info" className="bg-cover" />
    <Location />
    <img src={dorado_asistencia} alt="Dorado asistencia" className='bg-cover' />
    <Asist />
    <Footer />
    </>
  )
}

export default Home
