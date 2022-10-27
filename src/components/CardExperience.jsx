import React from "react";

function CardExperience({logo, time, p1, p2}) {
    return (
        <div className="grid grid-cols-1 items-center gap-7 rounded-3xl border-2 p-9">

            <img src={logo} alt='' className='h-fit w-fit place-self-center'/>

            <h2 className='text-black font-ptSans dark:text-white'>{time}</h2>

            <div className=''>
                <p className='text-lg text-black font-ptSans dark:text-white'>{p1}</p>
                <br/>
                <p className="text-lg text-black font-ptSans dark:text-white">{p2}</p>
            </div>
        </div>
    );
}

export default CardExperience;
