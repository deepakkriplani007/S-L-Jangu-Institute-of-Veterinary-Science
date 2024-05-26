import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addprofile, remove } from "../action/Profile";

import { TbReport } from "react-icons/tb";
import { CiReceipt } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
const Adminnav = ({ setToken }) => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="relative py-2 bg-[#162242] z-50">
        <div className="container mx-auto"></div>
        <div className="flex  ">
          <Link className="flex items-center text-lg font-bold" to="/">
            <img
              className="sm:h-[10vh] h-[7vh]  ml-5 mr-5"
              src="./logo.png"
              alt=""
              width="auto"
            />
            <img
              className="sm:h-[8vh] min-[480px]:h-[6vh] min-[420px]:h-[5vh] h-[4vh]"
              src="./name.png"
              alt=""
              width="auto"
            />
          </Link>
          {/* <img
              className="h-8 inline-block text-lg font-bold"
              src={Imagesrc2}
              alt=""
              width="auto"
            /> */}
          {/* in small screen open screen  */}

          <div className="xl:hidden ml-auto">
            <button
              className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200"
              onClick={toggleMobileMenu}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 6H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 18H21"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="absolute top-1/2 left-3/4  transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex lg:w-auto lg:space-x-12 pr-4">
            <li>
              <Link
                className="flex text-xl text-gray-100 hover:text-orange-300 font-medium"
                to="/contact"
              >
                <div className="text-2xl pr-2">
                  <TbReport />
                </div>
                About
              </Link>
            </li>
            <li>
              <Link
                className="flex text-xl text-gray-100 hover:text-orange-300 font-medium"
                to="/profile"
              >
                <div className="text-2xl pr-2">
                  <FaRegUser />
                </div>
                Profile
              </Link>
            </li>
            <li>
              <button
                className="flex text-xl text-gray-100 hover:text-orange-300 font-medium"
                onClick={handleLogout}
              >
                <div className="text-2xl pr-2">
                  <LuLogOut />
                </div>
                Logout
              </button>
            </li>
          </ul>

          {/* large screen menu */}

          {/* <div className="hidden xl:block ml-auto">
            <div className="flex items-center mt-4">
              <Link
                className="relative group inline-block py-3 px-4 text-xl font-semibold text-orange-900 hover:text-orange-50 bg-orange-50 rounded-md overflow-hidden transition duration-300"
                to="/login"
              >
                <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <Link to="/login" className="flex justify-center items-center">
                  <span className="relative">
                    <LuLogOut />
                  </span>
                  <span className="relative">LogOut</span>
                </Link>
              </Link>
              <Link
                className=" ml-5 relative group inline-block py-3 px-4 text-xl font-semibold text-orange-900 hover:text-orange-50 bg-orange-50 rounded-full overflow-hidden transition duration-300 h-[50px]"
                to="/profile"
              >
                <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative top-1">
                  <FaRegUser />
                </span>
              </Link>
            </div>
          </div> */}
          {/* <div className="hidden xl:block  ml-5 rounded-full h-8 w-8 bg-blue-100  ">
              <Link
                // className="text-black  text-xl w-8 h-8 flex justify-center items-center "
                className="relative group inline-block py-3 px-4 text-xl font-semibold text-orange-900 hover:text-orange-50 bg-orange-50 rounded-md overflow-hidden transition duration-300"
                to="/profile"
              >
                <FaRegUser />
              </Link>
            </div> */}
        </div>
      </nav>
      <div
        className={`navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-[#162242] border-r overflow-y-auto">
          <div className="flex items-center mb-16">
            <Link className="mr-auto text-2xl font-medium leading-none">
              {/* <img className="h-20" src={Imagesrc} alt="" width="auto" /> */}
              <span></span>
            </Link>
            <button className="navbar-close" onClick={toggleMobileMenu}>
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mb-2">
              <li>
                <Link
                  className="flex py-4 px-5 text-gray-100  hover:text-orange-900 hover:bg-orange-50 rounded-lg"
                  to="/contact"
                >
                  <div className="text-2xl pr-2">
                    <TbReport />
                  </div>
                  About
                </Link>
              </li>
            </ul>

            <div className="py-8  mb-6 border-t border-b border-gray-200">
              <Link
                className="flex py-4 px-5 text-gray-100  hover:text-orange-900 hover:bg-orange-50 rounded-lg"
                to="/profile"
              >
                <div className="text-2xl pr-2">
                  <FaRegUser />
                </div>
                Profile
              </Link>
            </div>
            <div className="flex px-6 mb-16 items-center">
              <button
                className="flex py-3 px-4 text-xl font-semibold text-orange-900 hover:text-white border border-gray-300 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200"
                onClick={handleLogout}
              >
                <span className="relative pt-1">
                  <LuLogOut />
                </span>
                <span className="relative">LogOut</span>
              </button>
            </div>
            <div>
              <div className="flex w-20 h-20 mb-6 items-center justify-center bg-orange-50 rounded-full">
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3333 16.6667C24.9797 16.6667 24.6406 16.8072 24.3905 17.0572C24.1405 17.3073 24 17.6464 24 18V23.3334C24 23.687 23.8595 24.0261 23.6095 24.2762C23.3594 24.5262 23.0203 24.6667 22.6667 24.6667H4C3.64638 24.6667 3.30724 24.5262 3.05719 24.2762C2.80714 24.0261 2.66667 23.687 2.66667 23.3334V10.5467L10.5067 18.4C11.2567 19.1491 12.2733 19.5698 13.3333 19.5698C14.3933 19.5698 15.41 19.1491 16.16 18.4L18.3467 16.2134C18.5977 15.9623 18.7388 15.6218 18.7388 15.2667C18.7388 14.9116 18.5977 14.5711 18.3467 14.32C18.0956 14.069 17.7551 13.9279 17.4 13.9279C17.0449 13.9279 16.7044 14.069 16.4533 14.32L14.2667 16.5067C14.0174 16.751 13.6823 16.8878 13.3333 16.8878C12.9843 16.8878 12.6492 16.751 12.4 16.5067L4.54667 8.66669H13.3333C13.687 8.66669 14.0261 8.52622 14.2761 8.27617C14.5262 8.02612 14.6667 7.68698 14.6667 7.33336C14.6667 6.97974 14.5262 6.6406 14.2761 6.39055C14.0261 6.1405 13.687 6.00002 13.3333 6.00002H4C2.93913 6.00002 1.92172 6.42145 1.17157 7.1716C0.421427 7.92174 0 8.93916 0 10V23.3334C0 24.3942 0.421427 25.4116 1.17157 26.1618C1.92172 26.9119 2.93913 27.3334 4 27.3334H22.6667C23.7275 27.3334 24.7449 26.9119 25.4951 26.1618C26.2452 25.4116 26.6667 24.3942 26.6667 23.3334V18C26.6667 17.6464 26.5262 17.3073 26.2761 17.0572C26.0261 16.8072 25.687 16.6667 25.3333 16.6667ZM27.6133 5.05336L23.6133 1.05336C23.4865 0.93197 23.337 0.836817 23.1733 0.773358C22.8487 0.64 22.4846 0.64 22.16 0.773358C21.9963 0.836817 21.8468 0.93197 21.72 1.05336L17.72 5.05336C17.4689 5.30443 17.3279 5.64496 17.3279 6.00002C17.3279 6.35509 17.4689 6.69562 17.72 6.94669C17.9711 7.19776 18.3116 7.33881 18.6667 7.33881C19.0217 7.33881 19.3623 7.19776 19.6133 6.94669L21.3333 5.21336V12.6667C21.3333 13.0203 21.4738 13.3595 21.7239 13.6095C21.9739 13.8595 22.313 14 22.6667 14C23.0203 14 23.3594 13.8595 23.6095 13.6095C23.8595 13.3595 24 13.0203 24 12.6667V5.21336L25.72 6.94669C25.844 7.07166 25.9914 7.17086 26.1539 7.23855C26.3164 7.30624 26.4907 7.34109 26.6667 7.34109C26.8427 7.34109 27.017 7.30624 27.1794 7.23855C27.3419 7.17086 27.4894 7.07166 27.6133 6.94669C27.7383 6.82274 27.8375 6.67527 27.9052 6.51279C27.9729 6.35032 28.0077 6.17604 28.0077 6.00002C28.0077 5.82401 27.9729 5.64973 27.9052 5.48726C27.8375 5.32478 27.7383 5.17731 27.6133 5.05336Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <span className="block mb-3 text-xl text-gray-500">Contact</span>
              <Link className="font-semibold text-black" to="/">
                Arunjournlist@gmail.com
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Adminnav;
