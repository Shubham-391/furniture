import React from "react";
import Button1 from "./Button1";
import sofa11 from "../assets/images/sofa11.webp";

function Section4() {
  return (
    <>
      <div className="min-h-[524px] w-full relative pb-12 md:pb-0">
        <div className="w-full min-h-[459px] bg-[rgba(45,57,73,0.04)]">
          <div className="max-w-[1345px] min-h-[459px] mx-auto px-3 flex flex-wrap gap-6 md:gap-0">
            <div className="w-full min-[1200px]:w-[37%] relative z-[2]">
              <div className="max-w-[436px]">
                <p className="text-[#BD7D41] font-poppins text-xl not-italic font-normal leading-normal mt-12 md:mt-[75px] pl-[104px] relative before:absolute before:w-[95px] before:h-[1px] before:bg-black before:top-[50%] before:left-0 mb-6">
                  Shopping Store
                </p>
                <h2 className="text-[#243040] font-poppins text-[35px] not-italic font-bold leading-normal mb-[53px] ml-[2px]">
                  Wooden Sofa Starts From{" "}
                  <span className="text-[33px]">₹ 1200.00</span>
                </h2>
                <Button1 className="ml-[2px]" text="SHOP NOW" />
              </div>
            </div>
            <div className="w-full min-[1200px]:w-[63%] flex justify-end min-[1200px]:justify-start items-end">
              <img 
                className="max-w-[745px] w-full min-[395px] relative z-[2]"
                src={sofa11}
                alt="sofa"
              />
            </div>
          </div>
        </div>
        <div className="w-[741px] h-[160px] min-[450px]:h-[270px] bg-[#243040] absolute right-0 bottom-0"></div>
      </div>
    </>
  );
}

export default Section4;
