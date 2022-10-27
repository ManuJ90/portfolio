import React from "react";
import SectionTitle from "./SectionTitle";
import CardAbilities from "./CardAbilities";
import abilities from "../data/abilities.jsx";

function Abilities() {
    return (
        <div className="my-10">
            <SectionTitle> What I do</SectionTitle>
            <div className='grid justify-items-center gap-10 md:grid-cols-3'>
                {abilities.map((service, index) => (
                    <CardAbilities
                        key={index}
                        img={service.img}
                        title={service.title}
                        subtitle={service.subtitle}
                        text={service.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Abilities;
