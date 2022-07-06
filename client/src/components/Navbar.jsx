import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/Salus.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
 

  return (
    <nav className="w-full flex md:justify-center justify-between  p-2">
      <div className="md:flex-[0.9] flex-initial  ">
        <img src={logo} alt="logo" className="w-32 pt-5 cursor-pointer justify-left" />
      </div>

      
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["About us","Contact us", "Contact List", "Send funds", "NFT Workshop"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        
      </ul>
      
    </nav>
  );
};

export default Navbar;

