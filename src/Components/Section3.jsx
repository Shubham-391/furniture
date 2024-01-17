import React from "react";
import Button1 from "./Button1";
import sofa5 from "../assets/images/sofa5.webp";
import sofa6 from "../assets/images/sofa6.webp";
import sofa7 from "../assets/images/sofa7.webp";
import sofa8 from "../assets/images/sofa8.webp";
import sofa9 from "../assets/images/sofa9.webp";
import sofa10 from "../assets/images/sofa10.webp";
import stars from "../assets/images/stars.webp";
import Slider from "react-slick";

function Section3() {
  const sofaData2 = [
    {
      img: sofa5,
    },
    {
      img: sofa6,
    },
    {
      img: sofa7,
    },
    {
      img: sofa8,
    },
    {
      img: sofa9,
    },
    {
      img: sofa10,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="bg-white pt-12 lg:pt-[135px] pb-12 lg:pb-[169px] overflow-hidden">
        <div className="max-w-[1353px] mx-auto pl-3 min-[1200px]:pl-4 pr-3">
          <p className="text-[#BD7D41] font-poppins text-xl not-italic font-normal leading-normal pl-[104px] relative before:absolute before:w-[95px] before:h-[1px] before:bg-black before:top-[50%] before:left-0 mb-[11px]">
            Shopping Store
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-12 md:mb-[90px]">
            <h2 className="text-[#243040] font-poppins text-[35px] not-italic font-bold leading-normal pl-[5px]">
              Our Products
            </h2>
            <Button1 text="VIEW ALL PRODUCT" />
          </div>

          <div className="hidden min-[900px]:flex flex-wrap gap-x-[27px] gap-y-[42px] justify-center min-[1200px]:pr-[5px]">
            {sofaData2.map((sofaData2, index) => (
              <div
                className="w-full max-w-[422px] duration-300 bg-white shadow-[0px_0px_0px_0px_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] pt-[18px] px-[23px] pb-7 min-[450px]:pb-[53px]"
                key={index}
              >
                <img
                  className="w-full mb-[19px]"
                  src={sofaData2.img}
                  alt="sofa"
                />
                <div className="flex justify-between items-center mb-4">
                  <p className="text-black font-poppins text-xl not-italic font-medium leading-normal">
                    Single Sofa
                  </p>
                  <img src={stars} alt="rating" />
                </div>
                <p className="text-[rgba(0,0,0,0.70)] font-poppins text-lg not-italic font-normal leading-normal mb-4">
                  Lorem ipsum dolor{" "}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-black font-poppins text-xl sm:text-[28.7px] not-italic font-semibold leading-normal">
                    ₹<span className="ml-[3px]">1200.00</span>
                  </p>
                  <button className="bg-[#BD7D41] hover:text-black duration-300 py-[10px] pl-[12px] pr-[13px] text-white font-poppins text-base sm:text-xl not-italic font-medium leading-normal">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="min-[900px]:hidden">
            <Slider className="section3Slider" {...settings}>
              {sofaData2.map((sofaData2, index) => (
                <div
                  className="w-full max-w-[422px] duration-300 bg-white shadow-[0px_0px_0px_0px_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] pt-[18px] px-[23px] pb-7 min-[450px]:pb-[53px]"
                  key={index}
                >
                  <img
                    className="w-full mb-[19px]"
                    src={sofaData2.img}
                    alt="sofa"
                  />
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-black font-poppins text-xl not-italic font-medium leading-normal">
                      Single Sofa
                    </p>
                    <img src={stars} alt="rating" />
                  </div>
                  <p className="text-[rgba(0,0,0,0.70)] font-poppins text-lg not-italic font-normal leading-normal mb-4">
                    Lorem ipsum dolor{" "}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-black font-poppins text-xl sm:text-[28.7px] not-italic font-semibold leading-normal">
                      ₹<span className="ml-[3px]">1200.00</span>
                    </p>
                    <button className="bg-[#BD7D41] hover:text-black duration-300 py-[10px] pl-[12px] pr-[13px] text-white font-poppins text-base sm:text-xl not-italic font-medium leading-normal">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
