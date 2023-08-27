import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full pt-12 p-4 flex items-center justify-center">
      <div className=" bg-[url(/assets/images/hero.svg)] bg-no-repeat bg-contain bg-center w-full max-w-[110%] mt-7 md:w-[100vw] min-h-screen md:min-h-[90vh] flex flex-col justify-between font-bold text-center">
        {/* <h1
          className="uppercase bg-inherit bg-clip-text text-white mt-10"
          style={{
            WebkitBackgroundClip: "text",
            // WebkitTextFillColor: 'transparent',
            // filter: 'invert(1) grayscale(1) contrast(2) drop-shadow(.05em .05em orange)',
          }}
        >
          <div className="flex justify-center gap-10 items-center">
            <p>The</p>
            <p className="text-4xl md:text-7xl lg:text-[90px]">BlockChain</p>
          </div>
          <br />
          <div className="flex justify-center gap-10 items-center">
            <p className="text-4xl md:text-7xl lg:text-[90px]">Community</p>{" "}
            <p>Build</p>
          </div>
          <br />
          <div className="flex justify-center gap-10 items-center">
            <p>For</p>
            <p className="text-4xl md:text-7xl lg:text-[90px]">Students</p>
          </div>
        </h1> */}
        {/* <div className="flex justify-center">
          <button className="w-max flex align-middle justify-center justify-self-center align-self">
            <a
              href="https://lu.ma/gerc8cle"
              className="whitespace-nowrap rounded-xl border-2 border-white py-5 px-8 bg-gradient-to-r from-[#16EE97] to-[#AA66FE] text-4xl font-bold"
            >
              Sign Up
            </a>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
