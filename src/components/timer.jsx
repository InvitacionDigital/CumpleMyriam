import React, { useEffect } from "react";
import { useState } from "react";

function Timer() {
        const [distance, setDistance] = useState(0);
        const [now, setNow] = useState(0);
        const [dayy, setDayy] = useState(0);
        const [hourr, setHourr] = useState(0);
        const [secondd, setSecondd] = useState(0);
        const [minutee, setMinutee] = useState(0);


        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;

        const birthday = "10/15/2023"
        const countDown = new Date(birthday).getTime();

        const x = setInterval(() => {    
    
            setDayy(Math.floor((countDown - Date.now()) / (day)))
            setHourr(Math.floor(((countDown - Date.now()) % (day)) / (hour)))
            setMinutee(Math.floor(((countDown - Date.now()) % (hour)) / (minute)))
            setSecondd(Math.floor(((countDown - Date.now()) % (minute)) / second))
    
            //do something later when date is reached
            if ((countDown - Date.now()) < 0) {
            clearInterval(x);
            }
            //seconds
        }, 1000);

    return (
        <div className="w-full relative my-8 text-yellow-600">
            <h2 className="font-normal text-2xl text-center mb-14">15 de octubre del 2023</h2>
            <div className="flex justify-between text-5xl m-auto relative w-[80%] max-w-[522px]">
                <div className="flex-col items-center flex">
                    <p id="days" className="text-center">{dayy}</p>
                    <p className="text-sm">Días</p>
                </div>
                <div className="flex-col items-center flex">
                    <p id="hours" className="text-center">{hourr}</p>
                    <p className="text-sm">Horas</p>
                </div>
                <div className="flex-col items-center flex">
                    <p id="minutes" className="text-center">{minutee}</p>
                    <p className="text-sm">Minutos</p>
                </div>
                <div className="flex-col items-center flex">
                    <p id="seconds" className="text-center">{secondd}</p>
                    <p className="text-sm">Segundos</p>
                </div>
            </div>

        </div>

    )
}

export default Timer;