import React from "react";
import { cardsData } from "../assets/assets";
import Card from "./Card";
function Displaycards() {
  return (
    <div className="flex overflow-x-auto  no-scrollbar space-x-2 bg-yellow-100">
      {cardsData.map((item, index) => (
           <Card
                key={index}
                image={item.image}
                name={item.name} 
                desc={item.desc}
           />
      ))}
    </div>
  );
}

export default Displaycards;
