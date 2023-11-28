import React from "react";
import BackgroundImage from "../assets/technology/background-technology-desktop.jpg";
import Capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import { NavLink } from "react-router-dom";
import Header from "../Shared/Header";

const Technology = () => {
  return (
    <div
      className="flex flex-col w-full h-screen bg-cover bg-no-repeat text-white font-bold font-mono"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Header />
      <div className="mt-10 ml-10 text-2xl"> 03 Space launch 101 </div>
      <div className="text-xl p-8 flex justify-between mt-10">
        <div className="flex flex-col space-y-8 justify-start w-1/2">
          <div> The terminology...</div>
          <div className="text-4xl">Space capsule</div>
          <div>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </div>
        </div>
        <div className="h-full w-96">
          <img src={Capsule} alt="Europa Image" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
