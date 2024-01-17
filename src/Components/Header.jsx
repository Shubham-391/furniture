import React from "react";
import Navbar from "./Navbar";
import Button1 from "./Button1";


function Header() {
  return (
    <>
      <div className="bg-headerbg bg-cover bg-no-repeat bg-center min-h-screen min-[1200px]:min-h-[932px] min-[1866px]:min-h-screen flex flex-col">
        <Navbar />
        <div
          className="grow flex flex-col items-center px-3"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="2000"
          data-aos-duration="1000"
        >
          <h1 className="mt-[50px] min-[1200px]:mt-[135px] max-w-[908px] text-white text-center font-poppins text-[30px] md:text-5xl not-italic font-bold leading-normal mb-[15px]">
            Awesome Design Best Furniture For Your Interior
          </h1>
          <p className="text-white text-center font-poppins text-xl not-italic font-normal leading-normal mb-[51px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          </p>
          <Button1 text="SHOP NOW" />
        </div>
      </div>
    </>
  );
}

export default Header;
