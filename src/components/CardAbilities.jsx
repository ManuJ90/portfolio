import React from "react";

function CardAbilities({img, title, subtitle, text}) {
    return (
        <div
            className='relative grid transform content-start items-center justify-items-center transition-all duration-700 ease-in-out group'>
            <div
                className='absolute -inset-0.5 bg-gradient-to-r from-imperial via-scarlet to-crimson opacity-50 rounded-3xl blur-sm group-hover:blur-md transition duration-1000 group-hover:duration-700 group-hover:-inset-1 animate-tilt'></div>

            <div className='relative grid justify-items-center place-content-start rounded-3xl p-9 bg-open dark:bg-closed'>
                <img src={img} alt={title} className='h-16 w-16 grayscale'/>

                <span className='my-1 font-nunito'>
					<h2 className='text-center text-xl font-bold text-black text-nunito dark:text-white'>
						{title}
					</h2>

					<h3 className='pb-2 text-center font-bold text-black text-md dark:text-white'>
						{subtitle}
					</h3>
				</span>

                <p className='pb-3 text-center text-gray-600 font-ptSans dark:text-gray-400'>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default CardAbilities;
