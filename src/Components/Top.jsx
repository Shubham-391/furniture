import React from "react";
import backtotop from "../assets/images/backtotop.webp";

function Top() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      document.getElementById("Top").style.display = "flex";
    } else {
      document.getElementById("Top").style.display = "none";
    }
  });

  function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button
        id="Top"
        className="hidden bg-none border-none w-[40px] md:w-[50px] h-[40px] md:h-[50px] bottom-0 right-0 fixed z-[3]"
        onClick={up}
      >
        <img className="w-100" src={backtotop} alt="back to top icon" />
      </button>
    </>
  );
}

export default Top;
