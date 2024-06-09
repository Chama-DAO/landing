import { FaHands } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";
import { IoMdClose } from "react-icons/io";
import logo2 from "../../public/logo2.png";
import { RxDotFilled } from "react-icons/rx";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export const MobileNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const handleToggleMenu = () => {
    // console.log("clicked");
    setToggleMenu(!toggleMenu);
  };
  const handleNavigation = (path: string) => {
    navigate(path);
    handleToggleMenu();
  };
  return (
    <div className="w-full">
      {!toggleMenu ? (
        <div className="flex p-4 justify-between items-center w-[100%]">
          <div className="flex gap-2 cursor-pointer justify-center items-center">
            <img src={logo} alt="logo-img" />
          </div>
          <div className="flex items-center" onClick={handleToggleMenu}>
            <IoMenu size={34} />
          </div>
        </div>
      ) : (
        <div className="backdrop-blur-sm h-screen bg-[#fff]">
          <div className="flex items-center justify-between px-4">
            <img
              src={logo}
              alt="logo-img"
              onClick={() => handleNavigation("/")}
            />
            <IoMdClose size={34} onClick={handleToggleMenu} />
          </div>
          <ul className="w-full flex flex-col items-center font-heading">
            <li
              className="hover:text-primary ease-in-out duration-200 border-green-700 cursor-pointer my-16 text-2xl w-[80%] flex justify-between"
              onClick={() => handleNavigation("/whitepaper")}
            >
              Whitepaper
              <FaArrowRight />
            </li>
            <li className="h-[0.08rem] bg-gray-400 w-full"></li>

            <li
              className="hover:text-primary ease-in-out duration-200 border-green-700 cursor-pointer my-16 text-2xl w-[80%] flex justify-between"
              onClick={() => handleNavigation("/features")}
            >
              Features
              <FaArrowRight />
            </li>
            <li className="h-[0.05rem] bg-gray-400 w-full"></li>
            <li
              className="hover:text-primary ease-in-out duration-200 border-green-700 cursor-pointer my-16 text-2xl w-[80%] flex justify-between"
              onClick={() => handleNavigation("/roadmap")}
            >
              Roadmap
              <FaArrowRight />
            </li>
            <li className="h-[0.08rem] bg-gray-400 w-full"></li>
            <li
              className="hover:text-primary ease-in-out duration-200 border-green-700 cursor-pointer my-16 text-2xl w-[80%] flex justify-between"
              onClick={() => handleNavigation("/faqs")}
            >
              FAQs
              <FaArrowRight />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="p-4 mt-2 flex justify-between items-center mx-16 my-0">
      <Link to="/">
        <div className="flex gap-2 cursor-pointer justify-center items-center">
          <img src={logo2} alt="logo-image" />
        </div>
      </Link>
      <div>
        <ul className="flex gap-5 items-center text-lg font-heading">
          <li className="hover:text-primary ease-in-out duration-200  border-green-700 cursor-pointer flex gap-2 items-center">
            <RxDotFilled />
            <Link to="/whitepaper">WHITEPAPER</Link>
          </li>

          <li className="hover:text-primary ease-in-out duration-200 border-green-700 cursor-pointer flex gap-2 items-center">
            <RxDotFilled />
            <Link to="/features">FEATURES</Link>
          </li>
          <li className="hover:text-primary ease-in-out duration-200 border-green-700 cursor-pointer flex gap-2 items-center">
            <RxDotFilled />
            <Link to="/roadmap">ROADMAP</Link>
          </li>
          <li className="hover:text-primary ease-in-out duration-200 border-green-700 cursor-pointer flex gap-2 items-center">
            <RxDotFilled />
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      </div>
      <a href="https://github.com/divin3circle/inua_dao" target="_blank">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className=" bg-white text-black flex items-center space-x-2"
        >
          <MdLaunch />
          <span>Launch App</span>
        </HoverBorderGradient>
      </a>
    </div>
  );
};

export default Navbar;
