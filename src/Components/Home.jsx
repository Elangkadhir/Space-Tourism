import React from "react";
import BackgroundImage from "../assets/home/background-home-desktop.jpg";
import { NavLink } from "react-router-dom";
import Header from "../Shared/Header";


const Home = () => {
  return (
    <div
      className="flex flex-col w-full h-screen bg-cover bg-no-repeat text-white font-bold font-mono"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >

        <Header />

      <div className="text-xl p-8 flex justify-around mt-28">
        <div className="flex flex-col justify-start w-1/2">
          <p>So, you want to travel to space</p>
          <p className="text-9xl my-7">space</p>
          <p className="w-2/3">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well, sit back and relax because we'll give you a truly out-of-this-world experience!
          </p>
        </div>
        <div className="w-64 h-64 rounded-full justify-center flex items-center border border-slate-500 bg-white text-black">
          Explore
        </div>
      </div>
    </div>
  );
};

export default Home;
