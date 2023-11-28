import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState("/"); // Initialize the active link to the default route

  // Use the useEffect hook to update the active link state when the route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Define the style for active and inactive links
  const activeLinkStyle = {
    textDecoration: "underline",

  };
  const inactiveLinkStyle = {
    textDecoration: "none",
  };

  return (
    <>
      <div className="flex justify-around ml-20 mt-10">
        <div>
          <span className="border rounded-full border-slate-600 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="#0B0D17"
            >
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
            </svg>
          </span>
        </div>
        <div className="w-full h-20 ml-72 rounded-md flex justify-start items-center">
        <ul className="space-x-10 p-3 w-full h-20 rounded-md flex justify-start items-center bg-opacity-20 bg-white text-white text-xl">
      <li>
        <NavLink
          to="/"
          style={activeLink === "/" ? activeLinkStyle : inactiveLinkStyle}
        >
          01 Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destination"
          style={activeLink === "/destination" ? activeLinkStyle : inactiveLinkStyle}
        >
          02 Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/crew"
          style={activeLink === "/crew" ? activeLinkStyle : inactiveLinkStyle}
        >
          03 Crew
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/technology"
          style={activeLink === "/technology" ? activeLinkStyle : inactiveLinkStyle}
        >
          04 Technology
        </NavLink>
      </li>
    </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
