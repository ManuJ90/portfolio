import React from "react";

function SectionTitle({children, id}) {
    return (
        <div className="flex flex-row py-8 group">
            <h1
                id={id && id}
                className='mb-5 text-3xl font-bold leading-loose tracking-widest text-black font-nunito dark:text-white'>
                {children}
            </h1>

        </div>
    );
}

export default SectionTitle;
