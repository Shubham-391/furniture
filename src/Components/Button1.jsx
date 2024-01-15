import React from 'react'

function Button1(props) {
  return (
    <>
      <button
        className={`bg-[#BD7D41] py-[19px] px-[48px] text-white text-center font-poppins text-xl not-italic font-semibold leading-normal duration-300 relative group overflow-hidden inline-flex ${props.className}`}
      >
        <span className="absolute duration-300 inset-0 bg-sky-400 w-0 group-hover:w-full"></span>
        <span className="relative">{props.text}</span>
      </button>
    </>
  );
}

export default Button1