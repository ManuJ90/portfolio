import React from "react";
import SectionTitle from "../components/SectionTitle.component";
import CardAbilities from "../components/CardAbilities";
import abilities from "../data/abilities.js";

function Abilities() {
  return (
    <div className="my-10">
      <SectionTitle> What I do</SectionTitle>
      <div className="grid justify-items-center gap-10 lg:grid-cols-3">
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
