import React from "react";
import sofa12 from "../assets/images/sofa12.webp";
import sofa13 from "../assets/images/sofa13.webp";
import sofa14 from "../assets/images/sofa14.webp";
import stars from "../assets/images/stars.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Section5() {
  const sofaData3 = [
    {
      img: sofa12,
    },
    {
      img: sofa13,
    },
    {
      img: sofa14,
    },
    {
      img: sofa12,
    },
    {
      img: sofa13,
    },
    {
      img: sofa14,
    },
  ];
  const slider2 = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-white mt-[45px] ">
        <div className="max-w-[1341px] mx-auto px-3 mb-[66px]">
          <p className="text-[#BD7D41] font-poppins text-xl not-italic font-normal leading-normal pl-[104px] relative before:absolute before:w-[95px] before:h-[1px] before:bg-black before:top-[50%] before:left-0 mb-[19px]">
            Shopping Store
          </p>
          <h2 className="text-[#243040] font-poppins text-[35px] not-italic font-bold leading-normal pl-1">
            Latest Deal
          </h2>
        </div>
        <div className="max-w-[1571px] mx-auto pl-3 pr-3 min-[1200px]:pr-[15px] relative">
          <button
            className="w-[99px] h-[99px] bg-white drop-shadow-[2px_7px_16px_rgba(0,0,0,0.08)] rounded-[50%] justify-center items-center border border-solid border-transparent duration-300 hover:border-black absolute left-0 top-[40%] hidden min-[1550px]:flex"
            onClick={() => slider2?.current?.slickPrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="16"
              viewBox="0 0 42 16"
              fill="none"
            >
              <path
                d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z"
                fill="black"
              />
            </svg>
          </button>
          <button
            className="w-[99px] h-[99px] bg-white drop-shadow-[2px_7px_16px_rgba(0,0,0,0.08)] rounded-[50%] justify-center items-center border border-solid border-transparent duration-300 hover:border-black absolute right-0 top-[40%] hidden min-[1550px]:flex"
            onClick={() => slider2?.current?.slickNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="16"
              viewBox="0 0 42 16"
              fill="none"
            >
              <path
                d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="flex w-[222px] justify-between min-[1550px]:hidden absolute top-[95%] z-[2] left-[50%] translate-x-[-50%]">
            <button
              className="w-[70px] sm:w-[99px] h-[70px] sm:h-[99px] bg-white drop-shadow-[2px_7px_16px_rgba(0,0,0,0.08)] rounded-[50%] flex justify-center items-center border border-solid border-transparent duration-300 hover:border-black"
              onClick={() => slider2?.current?.slickPrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="16"
                viewBox="0 0 42 16"
                fill="none"
              >
                <path
                  d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              className="w-[70px] sm:w-[99px] h-[70px] sm:h-[99px] bg-white drop-shadow-[2px_7px_16px_rgba(0,0,0,0.08)] rounded-[50%] flex justify-center items-center border border-solid border-transparent duration-300 hover:border-black "
              onClick={() => slider2?.current?.slickNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="16"
                viewBox="0 0 42 16"
                fill="none"
              >
                <path
                  d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="max-w-[1320px] mx-auto">
            <Slider className="section5Slider" ref={slider2} {...settings}>
              {sofaData3.map((sofaData3, index) => (
                <div
                  key={index}
                  className="w-[422px] bg-white shadow-[0px_0px_0px_0px rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] px-[23px] pt-[18px] pb-[53px] item"
                >
                  <img
                    className="w-full mb-[19px]"
                    src={sofaData3.img}
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
                      ₹ 1200.00
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

        <div className="pt-[90px] max-w-[1343px] mx-auto px-3 flex items-center flex-col min-[1200px]:flex-row gap-9 pb-12 md:pb-[109px]">
          <div className="bg-section5bg1 bg-cover bg-no-repeat bg-center max-w-[642px] w-full  min-h-[363px]">
            <p className="mt-8 text-black font-poppins text-xl not-italic font-normal leading-normal relative before:absolute before:w-[43px] sm:before:w-[95px] before:h-[1px] before:bg-black before:left-0 before:top-[50%] pl-[54px] sm:pl-[107px] mb-5">
              Festival Offer
            </p>
            <h2 className="text-[#BD7D41] font-poppins text-[35px] not-italic font-bold leading-normal pl-[54px] sm:pl-[107px]">
              Upto 40% Off
            </h2>
            <p className="max-w-[369px] text-[rgba(0,0,0,0.70)] font-poppins text-lg font-normal not-italic leading-normal pl-[54px] sm:pl-[107px] mb-[38px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="pl-[54px] sm:pl-[107px] pb-[71px]">
              <button className="bg-[#BD7D41] hover:text-black duration-300 py-[10px] pl-[12px] pr-[13px] text-white font-poppins text-base sm:text-xl not-italic font-medium leading-normal">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="bg-section5bg2 bg-cover bg-no-repeat bg-center max-w-[642px] w-full min-h-[363px]">
            <p className="mt-8 text-black font-poppins text-xl not-italic font-normal leading-normal relative before:absolute before:w-[43px] sm:before:w-[95px] before:h-[1px] before:bg-black before:left-0 before:top-[50%] pl-[54px] sm:pl-[107px] mb-5">
              Festival Offer
            </p>
            <h2 className="text-[#BD7D41] font-poppins text-[35px] not-italic font-bold leading-normal pl-[54px] sm:pl-[107px]">
              Upto 40% Off
            </h2>
            <p className="max-w-[369px] text-[rgba(0,0,0,0.70)] font-poppins text-lg font-normal not-italic leading-normal pl-[54px] sm:pl-[107px] mb-[38px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="pl-[54px] sm:pl-[107px] pb-[71px]">
              <button className="bg-[#BD7D41] hover:text-black duration-300 py-[10px] pl-[12px] pr-[13px] text-white font-poppins text-base sm:text-xl not-italic font-medium leading-normal">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5;
