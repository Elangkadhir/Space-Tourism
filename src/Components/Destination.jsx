
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
      distance :`Avg. distance
      628 mil. km
    
      Est. travel time
      3 years`
    },
    Moon: {
      content: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
      regain perspective and come back refreshed. While you’re there, take in some history 
      by visiting the Luna 2 and Apollo 11 landing sites.`,
      image: MoonImage,
      distance : `  Avg. distance
      384,400 km
    
      Est. travel time
      3 days`
    },
    Mars: {
      content: ` Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. It’s two and a half times 
      the size of Everest!`,
      image: MarsImage,
      distance : `  Avg. distance
      225 mil. km
    
      Est. travel time
      9 months`
    },
    Titan: {
      content: `  The only moon known to have a dense atmosphere other than Earth, Titan 
      is a home away from home (just a few hundred degrees colder!). As a 
      bonus, you get striking views of the Rings of Saturn.`,
      image: TitanImage,
      distance : `  Avg. distance
      1.6 bil. km
    
      Est. travel time
      7 years`
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


