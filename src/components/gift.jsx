import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';

  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>

const Gift = ({open, setOpen}) => {
    
    useEffect(()=>{
        console.log(open)
    },[open])

    return (
        <div>
        <div className="w-[300px] m-auto">
            <div className='flex flex-col items-center my-9 py-6 justify-evenly border rounded-md'>
                <img src="https://yendo.com.ar/wp-content/uploads/2022/09/gif-regalo-azul.gif" alt="venis" className="w-20" />
                <p className="text-center font-[roboto] my-4">Me importa tu presencia, pero si deseas regalarme algo...</p>
                <Popup trigger={<button className='inline-block text-center bg-[#c7ac52] rounded-3xl py-2 px-4 mx-auto text-[#f5f5f5] font-[Roboto] font-medium'>VER INFORMACIÓN</button>} position="right center" modal>
                    <div className="bg-[url('https://InvitacionDigital.github.io/CumpleMyrian/doradosinletras.jpeg')] w-[60vw] h-[35vh] flex flex-col justify-center items-center text-center font-[roboto] rounded-2xl">
                        <img src="https://yendo.com.ar/wp-content/uploads/2022/09/gif-regalo-azul.gif" alt="venis" className="w-20" />
                        <p className="m-1">Myrian Patricia Mendez</p>
                        <p className="m-1">CVU: 0000003100061537631822</p>
                        <p className="m-1">Alias: myrim.lau</p>
                        <p className="m-1">CUIT/CUIL: 27227299075</p>
                        <p className="m-1">Mercado Pago</p>
                    </div>
                </Popup>
            </div>
            </div>
            </div>
    )
}

export default Gift