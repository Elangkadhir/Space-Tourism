import React from "react";
import BackgroundImage from "../assets/crew/background-crew-desktop.jpg";
import CrewMember1 from "../assets/crew/image-anousheh-ansari.webp";
import { NavLink } from "react-router-dom";
import Header from "../Shared/Header";

const Crew = () => {
  return (
    <div
    className="flex flex-col w-full h-screen bg-cover bg-no-repeat text-white font-bold font-mono"
    style={{ backgroundImage: `url(${BackgroundImage})` }}
  >
            <Header />

    <div className="mt-10 ml-10 text-2xl">02 Meet your crew </div>
    <div className="text-xl p-8 flex justify-around mt-10">
      <div className="flex flex-col space-y-8 justify-start w-1/2">
        <div className="text-4xl"> Flight Engineer</div>
        <div>Anousheh Ansari</div>
        <div>
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </div>
      </div>
      <div className="h-96 w-96">
        <img src={CrewMember1} alt="Europa Image" />
      </div>
    </div>
  </div>
  )
}

export default Crew
