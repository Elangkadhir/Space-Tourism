
import React, { useState } from "react";
import BackgroundImage from "../assets/destination/background-destination-desktop.jpg";
import EuropaImage from "../assets/destination/image-europa.webp";
import MoonImage from "../assets/destination/image-moon.webp";
import MarsImage from "../assets/destination/image-mars.webp";
import TitanImage from "../assets/destination/image-titan.webp";
import Header from "../Shared/Header";

const Destination = () => {
  const [activeItem, setActiveItem] = useState("Europa");
  const itemData = {
    Europa: {
      content:   `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
      winter lover’s dream. With an icy surface, it’s perfect for a bit of 
      ice skating, curling, hockey, or simple relaxation in your snug 
      wintery cabin.,`,
      image: EuropaImage,
      distance : `  Avg. distance
      628 mil. km
    
      Est. travel time
      3 years`
    },
    Moon: {
      content: "Content for Moon...",
      image: MoonImage,
    },
    Mars: {
      content: "Content for Mars...",
      image: MarsImage,
    },
    Titan: {
      content: "Content for Titan...",
      image: TitanImage,
    },
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div
      className="flex flex-col w-full h-screen bg-cover bg-no-repeat text-white font-bold font-mono"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Header />

      <div className="text-xl p-8 flex justify-around mt-20">
        <div className="h-96 w-96">
          <img src={itemData[activeItem].image} alt={`${activeItem} Image`} />
        </div>
        <div className="flex flex-col space-y-8 justify-start w-1/2">
          <div>
            <ul className="space-x-2 flex justify-around w-8/12 ">
              {Object.keys(itemData).map((item) => (
                <li className="inline-block" key={item}>
                  <button onClick={() => handleItemClick(item)}>{item}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-9xl">{activeItem}</div>
          <div>{itemData[activeItem].content}</div>
          <div>{itemData[activeItem].distance}</div>
        </div>
      </div>
    </div>
  );
};

export default Destination;


