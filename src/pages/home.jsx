import { useState } from 'react'

import Timer from '../components/timer'
import Location from '../components/location'
import Asist from '../components/asist'
import Footer from '../components/footer'
import Gift from "../components/gift"

import dorado_infotop from "../images/infotop.jpg"
import dorado_titulo from "../images/doradotitulo.jpg"
import dorado_infodres from "../images/infodres.jpg"
import dorado_inforegalo from "../images/inforegalo.jpg"

function Home() {
  const [open, setOpen] = useState("false");

  return (
    <>
    <img src={dorado_titulo} className="bg-coverer" alt="Dorado" />
    <Timer />
    <img src={dorado_infotop} alt="Dorado info" className="bg-cover" />
    <Location />
    <img src={dorado_infodres} alt="Dorado info" className="bg-cover" />
    <Asist />
    <Gift open={open} setOpen={setOpen} />
    <Footer />
    </>
  )
}

export default Home
