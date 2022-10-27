import React from "react";

function CardProjects({img, title, link, tech}) {
    return (
        <div>
            <div className='grid items-center rounded-3xl border-2 p-9 group'>
                <div>
                    <h2 className='h-fit cursor-default pb-3 text-xl font-bold text-gray-800 dark:text-gray-200'>
                        {title}
                    </h2>
                </div>

                <img
                    src={img}
                    alt={title}
                    className='h-96 w-screen rounded-sm grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0'
                />

                <div className='my-4'>
                    <p className='text-gray-600 dark:text-gray-300'>Made With: </p>
                    <div className='flex flex-row justify-evenly'>
                        {tech.map((t, idx) => (
                            <img
                                key={idx}
                                src={t.img}
                                alt={t.alt}
                                className='my-3 h-12 w-12 grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0'
                            />
                        ))}
                    </div>
                </div>

                <div className='place-self-end'>
                    <button
                        className='mt-2 rounded-br-2xl border border-gray-600 px-3 py-2 text-gray-600 transition duration-700 ease-in-out hover:-skew-y-3 dark:hover:-skew-y-3 dark:border-gray-300 dark:text-gray-300'>
                        <a href={link} target='_blank'>
                            Check it out
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardProjects;
