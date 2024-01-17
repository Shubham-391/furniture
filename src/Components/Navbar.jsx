import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { Link, Route, Routes } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  {
    open == false
      ? document.body.classList.remove("overflow-hidden")
      : document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      {showModal2
        ? document.body.classList.add("overflow-hidden")
        : document.body.classList.remove("overflow-hidden")}
      {/* search modal */}
      <div
        className={`absolute duration-300 top-0 bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center p-3 ${
          showModal2 == false ? "opacity-0 z-0" : "opacity-100 z-[8]"
        }`}
        onClick={() => setShowModal2(false)}
      ></div>
      <div
        className={`max-w-[536px] w-full h-[56px] duration-500 bg-transparent p-3 absolute top-[10%] left-[50%] translate-x-[-50%] right-0 flex justify-center ${
          showModal2 == false
            ? "opacity-0 z-0 scale-0"
            : "opacity-100 z-10 scale-1"
        }`}
      >
        <div className="bg-white w-[95%] h-[56px] flex items-center rounded gap-2 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
              fill="black"
            />
          </svg>
          <input
            placeholder="Search"
            className="w-full"
            type="text"
            name="search"
            id="search"
          />
          <button
            className="w-[28px] h-[24px] bg-red shrink-0 bg-[rgba(0,0,0,0.2)] rounded flex justify-center items-center text-[10px] font-medium"
            onClick={() => setShowModal2(false)}
          >
            ESC
          </button>
        </div>
      </div>
      <div className="max-w-[1345px] w-full mx-auto px-3 flex justify-between items-center h-[91px]">
        <div className="w-[150px] sm:w-[244px] h-[33px] sm:h-[61px] relative z-[6]">
          <img className="w-full" src={logo} alt="logo" />
        </div>
        <div className="flex min-[992px]:hidden z-[6] gap-4 items-center pt-2">
          <svg
            onClick={() => setShowModal2(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
              fill="white"
            />
          </svg>
          <svg
            onClick={() => setOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="23"
            viewBox="0 0 26 23"
            fill="none"
          >
            <path
              d="M24.974 16.3056H7.71508L8.58165 14.5692L22.98 14.5436C23.4669 14.5436 23.8843 14.2014 23.9712 13.7282L25.9652 2.74848C26.0174 2.46052 25.9391 2.164 25.7479 1.93876C25.6533 1.82791 25.5354 1.73862 25.4023 1.67708C25.2691 1.61554 25.124 1.58322 24.9769 1.58237L6.66013 1.5225L6.50362 0.798314C6.40508 0.336432 5.98194 0 5.50084 0H1.02307C0.751738 0 0.491515 0.106036 0.299652 0.294781C0.107788 0.483526 0 0.73952 0 1.00645C0 1.27337 0.107788 1.52937 0.299652 1.71811C0.491515 1.90686 0.751738 2.01289 1.02307 2.01289H4.67194L5.35592 5.21185L7.03979 13.2321L4.87192 16.7133C4.75934 16.8628 4.69153 17.0402 4.67616 17.2257C4.6608 17.4111 4.69849 17.597 4.78497 17.7625C4.95887 18.1018 5.30955 18.3156 5.69792 18.3156H7.518C7.12998 18.8226 6.9204 19.4401 6.92097 20.0747C6.92097 21.6885 8.25415 23 9.89455 23C11.5349 23 12.8681 21.6885 12.8681 20.0747C12.8681 19.4389 12.6537 18.8203 12.2711 18.3156H16.9401C16.5521 18.8226 16.3425 19.4401 16.3431 20.0747C16.3431 21.6885 17.6763 23 19.3167 23C20.9571 23 22.2903 21.6885 22.2903 20.0747C22.2903 19.4389 22.0758 18.8203 21.6932 18.3156H24.9769C25.5392 18.3156 26 17.8651 26 17.3092C25.9983 17.0425 25.8895 16.7873 25.6973 16.5993C25.5051 16.4113 25.2451 16.3057 24.974 16.3056ZM7.08617 3.50688L23.7742 3.56105L22.1396 12.5649L9.03088 12.5877L7.08617 3.50688ZM9.89455 20.9757C9.39026 20.9757 8.97871 20.5708 8.97871 20.0747C8.97871 19.5787 9.39026 19.1738 9.89455 19.1738C10.3988 19.1738 10.8104 19.5787 10.8104 20.0747C10.8104 20.3137 10.7139 20.5429 10.5421 20.7118C10.3704 20.8808 10.1374 20.9757 9.89455 20.9757ZM19.3167 20.9757C18.8124 20.9757 18.4008 20.5708 18.4008 20.0747C18.4008 19.5787 18.8124 19.1738 19.3167 19.1738C19.821 19.1738 20.2325 19.5787 20.2325 20.0747C20.2325 20.3137 20.136 20.5429 19.9643 20.7118C19.7925 20.8808 19.5596 20.9757 19.3167 20.9757Z"
              fill="white"
            />
          </svg>
          <div
            className={`flex w-[30px] min-[400px]:w-[35px] h-[25px] duration-300 flex-col items-center justify-between ${
              open ? "" : "translate -y-[10px]"
            }`}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`w-full h-[5px] duration-300 bg-[#FFF] rounded ${
                open == false ? "" : "rotate-45"
              }`}
            ></span>
            <span
              className={`w-full h-[5px] duration-300 bg-[#FFF] rounded ${
                open == false ? "" : "rotate-[135deg] translate-y-[-20px]"
              }`}
            ></span>
            <span
              className={`w-full h-[5px] duration-300 bg-[#FFF] rounded ${
                open == false ? "" : "hidden"
              }`}
            ></span>
          </div>
        </div>
        <ul
          className={`duration-300 flex items-center gap-[50px] bg-[#405268] fixed left-[-100%] top-0 w-full h-full flex-col justify-center min-[992px]:static min-[992px]:bg-transparent min-[992px]:gap-0 min-[992px]:right-0 min-[992px]:flex-row z-[5] min-[1200px]:pr-1 min-[992px]:justify-end ${
            open == false ? "" : "left-[0%]"
          }`}
        >
          <li className="text-white font-roboto text-lg not-italic font-normal w-[51px] leading-normal hover:font-bold min-[992px]:mr-[55px] after:w-0 after:hover:w-full relative after:absolute after:h-[3px] after:left-[50%] after:hover:left-0 after:duration-300 after:bg-[#BD7D41] after:bottom-[-12px]">
            <Link onClick={() => setOpen(false)} to="/">
              HOME
            </Link>
          </li>
          <li className="text-white font-roboto text-lg not-italic font-normal w-[86px] leading-normal hover:font-bold min-[992px]:mr-[55px] after:w-0 after:hover:w-full relative after:absolute after:h-[3px] after:left-[50%] after:hover:left-0 after:duration-300 after:bg-[#BD7D41] after:bottom-[-12px]">
            <Link onClick={() => setOpen(false)} to="/About">
              ABOUT US
            </Link>
          </li>
          <li className="text-white font-roboto text-lg not-italic w-[48px] font-normal leading-normal hover:font-bold min-[992px]:mr-[55px] after:w-0 after:hover:w-full relative after:absolute after:h-[3px] after:left-[50%] after:hover:left-0 after:duration-300 after:bg-[#BD7D41] after:bottom-[-12px]">
            <Link onClick={() => setOpen(false)} to="/Shop">
              SHOP
            </Link>
          </li>
          <li className="text-white font-roboto text-lg not-italic w-[109px] font-normal leading-normal hover:font-bold after:w-0 after:hover:w-full relative after:absolute after:h-[3px] after:left-[50%] after:hover:left-0 after:duration-300 after:bg-[#BD7D41] after:bottom-[-12px]">
            <Link onClick={() => setOpen(false)} to="/Contact">
              CONTACT US
            </Link>
          </li>
          <li className="ml-[40px] mr-[28px] cursor-pointer hidden min-[992px]:block">
            <svg
              onClick={() => setShowModal2(true)}
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
                fill="white"
              />
            </svg>
          </li>
          <li className="cursor-pointer hidden min-[992px]:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
            >
              <path
                d="M24.974 16.3056H7.71508L8.58165 14.5692L22.98 14.5436C23.4669 14.5436 23.8843 14.2014 23.9712 13.7282L25.9652 2.74848C26.0174 2.46052 25.9391 2.164 25.7479 1.93876C25.6533 1.82791 25.5354 1.73862 25.4023 1.67708C25.2691 1.61554 25.124 1.58322 24.9769 1.58237L6.66013 1.5225L6.50362 0.798314C6.40508 0.336432 5.98194 0 5.50084 0H1.02307C0.751738 0 0.491515 0.106036 0.299652 0.294781C0.107788 0.483526 0 0.73952 0 1.00645C0 1.27337 0.107788 1.52937 0.299652 1.71811C0.491515 1.90686 0.751738 2.01289 1.02307 2.01289H4.67194L5.35592 5.21185L7.03979 13.2321L4.87192 16.7133C4.75934 16.8628 4.69153 17.0402 4.67616 17.2257C4.6608 17.4111 4.69849 17.597 4.78497 17.7625C4.95887 18.1018 5.30955 18.3156 5.69792 18.3156H7.518C7.12998 18.8226 6.9204 19.4401 6.92097 20.0747C6.92097 21.6885 8.25415 23 9.89455 23C11.5349 23 12.8681 21.6885 12.8681 20.0747C12.8681 19.4389 12.6537 18.8203 12.2711 18.3156H16.9401C16.5521 18.8226 16.3425 19.4401 16.3431 20.0747C16.3431 21.6885 17.6763 23 19.3167 23C20.9571 23 22.2903 21.6885 22.2903 20.0747C22.2903 19.4389 22.0758 18.8203 21.6932 18.3156H24.9769C25.5392 18.3156 26 17.8651 26 17.3092C25.9983 17.0425 25.8895 16.7873 25.6973 16.5993C25.5051 16.4113 25.2451 16.3057 24.974 16.3056ZM7.08617 3.50688L23.7742 3.56105L22.1396 12.5649L9.03088 12.5877L7.08617 3.50688ZM9.89455 20.9757C9.39026 20.9757 8.97871 20.5708 8.97871 20.0747C8.97871 19.5787 9.39026 19.1738 9.89455 19.1738C10.3988 19.1738 10.8104 19.5787 10.8104 20.0747C10.8104 20.3137 10.7139 20.5429 10.5421 20.7118C10.3704 20.8808 10.1374 20.9757 9.89455 20.9757ZM19.3167 20.9757C18.8124 20.9757 18.4008 20.5708 18.4008 20.0747C18.4008 19.5787 18.8124 19.1738 19.3167 19.1738C19.821 19.1738 20.2325 19.5787 20.2325 20.0747C20.2325 20.3137 20.136 20.5429 19.9643 20.7118C19.7925 20.8808 19.5596 20.9757 19.3167 20.9757Z"
                fill="white"
              />
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
