import React, { Component } from "react";
import Slider from "react-slick";
import section6img1 from "../assets/images/section6img1.webp";
import section6img2 from "../assets/images/section6img2.webp";
import section6img3 from "../assets/images/section6img3.webp";
import section6img4 from "../assets/images/section6img4.webp";
import section6img5 from "../assets/images/section6img5.webp";
import section6img6 from "../assets/images/section6img6.webp";
import section6img7 from "../assets/images/section6img7.webp";

export default class Section6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings2 = {
      slidesToShow: 7,
      swipeToSlide: true,
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "0",
      asNavFor: this.state.nav2,
      responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    const settings3 = {
      asNavFor: this.state.nav1,
    };
    const job = [
      {
        name: "Julie",
        para: "Consultant",
      },
      {
        name: "Jack",
        para: "Actor",
      },
      {
        name: "Jasmine",
        para: "Model",
      },
      {
        name: "Treepi Shoty",
        para: "Teacher",
      },
      {
        name: "Jhone",
        para: "Photographer",
      },
      {
        name: "Mary",
        para: "Teacher",
      },
      {
        name: "Rosie",
        para: "Dancer",
      },
    ];
    return (
      <div className="bg-white overflow-hidden pb-12 md:pb-[109px]">
        <div className="max-w-[1345px] w-full mx-auto px-3">
          <p className="text-[#BD7D41] font-poppins text-xl not-italic font-normal leading-normal pl-[103px] relative before:absolute before:w-[95px] before:h-[1px] before:bg-black before:left-0 before:top-[50%] mb-3">
            Customer Says
          </p>
          <h2 className="text-[#243040] font-poppins text-[35px] not-italic font-bold leading-normal mb-[39px]">
            Testimonial
          </h2>

          <div>
            <Slider
              className="slider3 max-h-[160px] mb-[11px]"
              ref={(slider) => (this.slider1 = slider)}
              {...settings2}
            >
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(195,176,169,0.30)] w-[108px] h-[132px]"
                  src={section6img1}
                  alt="lady"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(118,68,35,0.30)] w-[115px] h-[119px]"
                  src={section6img2}
                  alt="man"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(49,173,234,0.30)] w-[76px] h-[77px]"
                  src={section6img3}
                  alt="lady"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(0,0,0,0.04)] w-[116px] h-[134px]"
                  src={section6img4}
                  alt="lady"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(131,121,84,0.30)] w-[92px] h-[129px]"
                  src={section6img5}
                  alt="man"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(43,43,43,0.30)] w-[83px] h-[102px]"
                  src={section6img6}
                  alt="lady"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(110,52,37,0.30)] w-[116px] h-[136px]"
                  src={section6img7}
                  alt="lady"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(195,176,169,0.30)] w-[108px] h-[132px]"
                  src={section6img1}
                  alt="lady"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(118,68,35,0.30)] w-[115px] h-[119px]"
                  src={section6img2}
                  alt="man"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(49,173,234,0.30)] w-[76px] h-[77px]"
                  src={section6img3}
                  alt="lady"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(0,0,0,0.04)] w-[116px] h-[134px]"
                  src={section6img4}
                  alt="lady"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(131,121,84,0.30)] w-[92px] h-[129px]"
                  src={section6img5}
                  alt="man"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(43,43,43,0.30)] w-[83px] h-[102px]"
                  src={section6img6}
                  alt="lady"
                />
              </div>
              <div className="!flex justify-center min-[1350px]:justify-start">
                <img
                  className="drop-shadow-[0px_50px_50px_rgba(110,52,37,0.30)] w-[116px] h-[136px]"
                  src={section6img7}
                  alt="lady"
                />
              </div>
            </Slider>
            <Slider
              className="slider4"
              ref={(slider) => (this.slider2 = slider)}
              {...settings3}
            >{job.map((job, index) => (
              <div key={index} className="!flex justify-center">
                <div className="max-w-[350px] flex flex-col items-center">
                  <h2 className="text-black font-poppins text-lg not-italic font-semibold leading-normal">
                    {job.name}
                  </h2>
                  <p className="text-[rgba(0,0,0,0.70) font-poppins text-sm not-italic font-light leading-normal mb-3">
                    {job.para}
                  </p>
                  <p className="text-black text-center font-poppins text-sm not-italic font-light leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse feugiat nunc in leo vestibulum, at congue erat
                    accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                    sapien.
                  </p>
                </div>
              </div>
            ))} </Slider>
          </div>
        </div>
      </div>
    );
  }
}

