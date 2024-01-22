import React, { useState } from "react";
import Button1 from "./Button1";
import stars from "../assets/images/stars.webp";
import Slider from "react-slick";
import blueclose from "../assets/images/blueclose.webp";
import sofa5 from "../assets/images/sofa5.webp";
import sofa6 from "../assets/images/sofa6.webp";
import sofa7 from "../assets/images/sofa7.webp";
import sofa8 from "../assets/images/sofa8.webp";
import sofa9 from "../assets/images/sofa9.webp";
import sofa10 from "../assets/images/sofa10.webp";

function Section3() {
  const product = [
    {
      id: 1,
      img: sofa5,
    },
    {
      id: 2,
      img: sofa6,
    },
    {
      id: 3,
      img: sofa7,
    },
    {
      id: 4,
      img: sofa8,
    },
    {
      id: 5,
      img: sofa9,
    },
    {
      id: 6,
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
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    setCart(true);
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      {/* cart */}
      {cart == false
        ? document.body.classList.remove("overflow-hidden")
        : document.body.classList.add("overflow-hidden")}
      <div
        className={`fixed duration-300 top-0 bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center items-center p-3 ${
          cart == false ? "opacity-0 z-[0]" : "opacity-100 z-[7]"
        }`}
        onClick={() => setCart(false)}
      ></div>
      <div
        className={`fixed duration-300 bg-white shadow-[0px_0px_0px_0px_rgba(0,0,0,0.12)] w-full sm:w-1/2 md:w-1/4 top-0 h-full z-10 overflow-y-scroll ${
          cart == false ? "left-[-100%]" : "left-[0%]"
        }`}
      >
        <div>
          <div className="flex justify-end p-3">
            <img
              onClick={() => setCart(false)}
              className="w-[30px] h-[30px] cursor-pointer"
              src={blueclose}
              alt="close"
            />
          </div>

          <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
          {cartItems.map((item, index) => (
            <div
              className="w-full max-w-[422px] duration-300 bg-white shadow-[0px_0px_0px_0px_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] pt-[18px] px-[23px] pb-7 min-[450px]:pb-[53px]"
              key={index}
            >
              <img className="w-full mb-[19px]" src={item.img} alt="sofa" />
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
                <button onClick={() => onAdd(item)} className="text-black font-poppins text-xl sm:text-[28.7px] not-italic font-semibold leading-normal">
                  +
                </button>
                <p className="text-right text-black font-poppins text-base not-italic font-normal leading-normal">
                  Quantity : {item.qty}
                </p>
                <button onClick={() => onRemove(item)} className="text-black font-poppins text-xl sm:text-[28.7px] not-italic font-semibold leading-normal">
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white pt-12 lg:pt-[135px] pb-12 lg:pb-[169px] overflow-hidden relative">
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
            {product.map((product, index) => (
              <div
                className="w-full max-w-[422px] duration-300 bg-white shadow-[0px_0px_0px_0px_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] pt-[18px] px-[23px] pb-7 min-[450px]:pb-[53px]"
                key={index}
              >
                <img
                  className="w-full mb-[19px]"
                  src={product.img}
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
                  <button
                    onClick={() => onAdd(product)}
                    className="bg-[#BD7D41] hover:text-black duration-300 py-[10px] pl-[12px] pr-[13px] text-white font-poppins text-base sm:text-xl not-italic font-medium leading-normal"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="min-[900px]:hidden">
            <Slider className="section3Slider" {...settings}>
              {product.map((product, index) => (
                <div
                  className="w-full max-w-[422px] duration-300 bg-white shadow-[0px_0px_0px_0px_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] pt-[18px] px-[23px] pb-7 min-[450px]:pb-[53px]"
                  key={index}
                >
                  <img
                    className="w-full mb-[19px]"
                    src={product.img}
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
                    <button
                      onClick={() => onAdd(product)}
                      className="bg-[#BD7D41] hover:text-black duration-300 py-[10px] pl-[12px] pr-[13px] text-white font-poppins text-base sm:text-xl not-italic font-medium leading-normal"
                    >
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
