import React from "react";

const Asist = () => {
    return (
        <div className="w-[300px] m-auto">
        <div className='flex flex-col items-center my-9 py-6 justify-evenly border rounded-md'>
            <img width="280" height="70" src="https://yendo.com.ar/wp-content/uploads/2022/09/titulo-rsvp-azul.png" alt="venis" className='cover w-[100px]' />
            <img src="https://yendo.com.ar/wp-content/uploads/2022/09/gif-globo-de-texto-azul.gif" alt="venis" className="w-20" />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQPTS-4xUx32-6jAyBrdG1ckaWKkFtOTbhJzxqGZNZkAN5Hw/viewform?usp=sf_link" className='inline-block text-center bg-[#c7ac52] rounded-3xl py-2 px-4 mx-auto text-[#f5f5f5] font-[Roboto] font-medium'>CONFIRMAR ASISTENCIA</a>
        </div>
        </div>
    )
}

export default Asist