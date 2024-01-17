import React, { useState } from "react";
import Button1 from "./Button1";

function Section1() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal
        ? (document.body.classList.add("overflow-hidden"),
          (
            <>
              <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 bg-[rgba(0,0,0,0.7)] flex justify-center items-center p-3">
                <div className="max-w-[800px] w-full h-full bg-white flex flex-col gap-5 justify-center items-center rounded p-3">
                  <iframe
                    className="w-full h-full max-w-[600px] max-h-[600px]"
                    src="https://www.youtube.com/embed/mjPtSgfk-hY"
                    title="Smart Furniture | Ingenious Space Saving Furniture Ideas And Home Designs"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <button
                    onClick={() => setShowModal(false)}
                    className={`bg-[#BD7D41] p-3 text-white text-center font-poppins text-xl not-italic font-semibold leading-normal duration-300 relative group overflow-hidden inline-flex`}
                  >
                    <span className="absolute duration-300 inset-0 bg-sky-400 w-0 group-hover:w-full"></span>
                    <span className="relative">Close</span>
                  </button>
                </div>
              </div>
            </>
          ))
        : document.body.classList.remove("overflow-hidden")}
      <div className="max-w-[1345px] w-full mx-auto px-3 pt-12 md:pt-[70px] pb-12 lg:pb-[113px] flex flex-wrap overflow-hidden">
        <div className="w-full min-[1150px]:w-[48.5%] flex justify-center min-[1150px]:justify-start" data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
          <div className="relative max-w-[506px] w-full flex justify-center">
            <div className="hidden sm:block w-[416px] h-[336px] bg-gradient-to-l from-[#8C939B] to-[#243040] absolute top-0 left-0 z-[1]"></div>
            <div className="w-[296px] sm:w-[456px] h-[325px] sm:h-[498px] bg-chair1 bg-no-repeat bg-center bg-contain shadow-[3px_8px_26px_0px_rgba(0,0,0,0.12)] flex items-end justify-end relative sm:mt-[64px] sm:ml-[50px] z-[2]">
              <div className="w-[254px] h-[78px] bg-white justify-center flex items-center">
                <p className="text-[#243040] font-poppins text-sm not-italic font-normal leading-normal shrink-0">
                  Explore Video
                </p>
                <span className="w-[66px] h-[1px] bg-[#243040] ml-[14px] mr-[7px]"></span>
                <svg
                  onClick={() => setShowModal(true)}
                  className="group shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <circle
                    className="group-hover:fill-[rgb(255,0,0)] duration-300"
                    cx="22.5"
                    cy="22.5"
                    r="22.5"
                    fill="#BD7D41"
                  />
                  <path
                    d="M33 22.5L17.25 31.5933L17.25 13.4067L33 22.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-[1150px]:w-[51.5%] flex justify-center min-[1150px]:justify-start" data-aos="zoom-out" data-aos-once="true" data-aos-duration="1000">
          <div className="max-w-[596px] mt-[62px]">
            <p className="text-[#BD7D41] font-poppins text-xl not-italic font-normal leading-normal relative before:w-[95px] before:h-[1px] before:bg-black before:absolute before:left-0 before:top-[50%] pl-[106px] mb-[19px]">
              Welcome Our Story
            </p>
            <h2 className="max-w-[436px] text-[#243040] font-poppins text-[35px] not-italic font-bold leading-normal mb-[19px]">
              We create the product you tell us you wish existed.
            </h2>
            <p className="text-[rgba(0,0,0,0.70)] font-poppins text-[18px] not-italic font-normal leading-normal mb-[34px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus, urna at pulvinar porta, augue lorem ullamcorper orci,
              non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper
              ante et mattis
            </p>
            <Button1 text="READ MORE" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
