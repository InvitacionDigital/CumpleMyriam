import React from "react";

const Location = () => {
    return (
        <div className="w-[250px] m-auto">
        <div className='flex flex-col items-center my-9 py-4 justify-evenly border rounded-md'>
            <img src="https://yendo.com.ar/wp-content/uploads/2022/09/titulo-fiesta-azul.png" alt="fiesta" className='cover w-[77px] my-2'/>
            <img src="https://yendo.com.ar/wp-content/uploads/2022/09/gif-globos-corazon-azul.gif" alt="fiesta" className='w-20 my-2' />
            <a href="https://www.google.com/maps/place/Janos+House/@-34.5209876,-58.7455792,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc9796927d1eaf:0x57cd58e1f2975e1d!8m2!3d-34.520992!4d-58.7430043!16s%2Fg%2F11cnbmd1m3?entry=ttu" className='inline-block text-center bg-[#c7ac52] rounded-3xl py-2 px-4 mx-auto text-[#f5f5f5] font-[Roboto] font-medium'>COMO LLEGAR</a>
        </div>
        </div>
    )
}

export default Location