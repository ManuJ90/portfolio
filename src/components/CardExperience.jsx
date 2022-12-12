import React from "react";

function CardExperience({ title, time, p1, p2 }) {
  return (
    <div className="font-ptSans text-black dark:text-white flex flex-col gap-3">
      <h3 className="text-2xl font-bold">{title}</h3>
      <h3 className="text-sm">{time}</h3>
      <div>
        <p className="text-lg">{p1}</p>
        <br />
        <p className="text-lg">{p2}</p>
      </div>
    </div>
  );
}

export default CardExperience;
