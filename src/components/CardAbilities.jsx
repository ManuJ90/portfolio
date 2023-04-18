import React from "react";

function CardAbilities({ img, title, subtitle, text }) {
  return (
   <div className=" transition-all duration-300 ease-in-out hover:-translate-y-3.5 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-800 grid justify-center justify-items-center content-center gap-4 p-7 border border-imperial rounded-xl w-64 lg:w-fit font-nunito antialiased text-closed dark:text-gray-200 bg-platinum dark:bg-richGray">
    <img src={img} alt="" />
    <h2 className="font-bold">{title}</h2>
    <h4 className="font-medium">{subtitle}</h4>
    <p className="text-center font-light">{text}</p>
   </div>
  );
}

export default CardAbilities;
