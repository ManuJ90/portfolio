import React from "react";

function CardFormation
({title, subtitle, time, text}) {
    return (
        <div className='grid gap-3 p-4 text-black group dark:text-white'>
			<span className='flex items-center gap-5'>
				<div className='h-1 w-4 rounded-full bg-imperial group-hover:animate-ping'></div>
				<h2 className='text-2xl font-bold font-nunito'>{title}</h2>
			</span>

            <h3 className='text-lg font-medium font-ptSans'>{subtitle}</h3>

            <h4 className='w-fit text-center font-normal font-ptSans'>{time}</h4>

            <p className='font-light font-ptSans'>{text}</p>
        </div>
    );
}

export default CardFormation
;
