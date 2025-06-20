import React from "react";
import YouWillSee from "./YouWillSee";

const Banner = () => {
  return (
    <>
      <div>
        <div className="h-[100vh] flex flex-col justify-center items-center bg-black text-[#EBEBEB] text-center">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold w-3/4">
            Not here to make noise. Here to make it work.
          </h1>
          <p className="pt-5 text-[#C1C1C1] max-w-2xl mx-auto lg:text-3xl text-2xl">
            Smart strategy. Clean design. Thoughtful content.
            <br className="hidden sm:block" /> Built to move metrics and
            outcomes
          </p>
        </div>
        <div>
          <YouWillSee/>
        </div>
      </div>
    </>
  );
};

export default Banner;
