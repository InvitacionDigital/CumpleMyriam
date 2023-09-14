import React from "react";

const Footer = () => {
    return(
        <>
            <div className= "text-center py-8 px-6 text-black bg-[url('https://InvitacionDigital.github.io/CumpleMyrian/doradosinletras.jpeg')] bg-center">
                <p className='font-[roboto] text-3xl mb-5 tracking-wide'>¡GRACIAS!</p>
                <p className='font-dancing text-2xl'>Te elegí para compartir esta noche tan especial</p>
            </div>
                <div className='text-center bg-[#0d4659] py-6 px-6'>
                <a href="https://wa.me/541130954373/?text=Hola,+quiero+consultar+po+una+invitacion+digital+personalizada" className='font-[roboto] text-white text-xs'>® Invitaciones digitales Web - click aquí si quieres tu propia invitación personalizada</a>
            </div>
        </>
    )
}

export default Footer;