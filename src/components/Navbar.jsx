import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
             {(() => {
              switch (nav.id) {
                case 'home':
                  return <Link to="/">Pocetna</Link>;
                case 'features':
                  return <Link to="/features" target="_blank">Kontakt</Link>;
                  case 'product':
                    return <Link to="/product" target="_blank">Proizvod</Link>;
                    case 'login':
                    return <Link to="/login" target="_blank">Login</Link>;
                
                default:
                  return <Link to={`/${nav.id}`}>{nav.title}</Link>;
              }
            })()}
          </li>
        ))}
      </ul>
      {/* ovaj deo, sledeci div ovde je za mobilni */}
      <div className="sm:hidden flex flex-1 justify-end items-center"> 
        <img 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)} //updating state, but can't use directly state
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={"#${nav.id}"}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;