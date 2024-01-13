import React from "react";
import Button1 from "./Button1";

function Section1() {
  return (
    <>
      <div className="max-w-[1345px] w-full mx-auto px-3 pt-12 md:pt-[70px] pb-12 md:pb-[113px] flex flex-wrap">
        <div className="w-full min-[1150px]:w-[48.5%] flex justify-center min-[1150px]:justify-start">
          <div className="relative max-w-[506px] w-full flex justify-center">
            <div className="hidden sm:block w-[416px] h-[336px] bg-gradient-to-l from-[#8C939B] to-[#243040] absolute top-0 left-0 z-[1]"></div>
            <div className="w-[296px] sm:w-[456px] h-[325px] sm:h-[498px] bg-chair1 bg-no-repeat bg-center bg-contain shadow-[3px_8px_26px_0px_rgba(0,0,0,0.12)] flex items-end justify-end relative sm:mt-[64px] sm:ml-[50px] z-[2]">
              <div className="w-[254px] h-[78px] bg-white justify-center flex items-center">
                <p className="text-[#243040] font-poppins text-sm not-italic font-normal leading-normal shrink-0">
                  Explore Video
                </p>
                <span className="w-[66px] h-[1px] bg-[#243040] ml-[14px] mr-[7px]"></span>
                <svg
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
        <div className="w-full min-[1150px]:w-[51.5%] flex justify-center min-[1150px]:justify-start">
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
