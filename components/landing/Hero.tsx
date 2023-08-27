import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className='w-full p-4 pt-16 pb-10 flex items-center justify-center'>
			{/* <div className="bg-[url(/assets/images/hero.svg)] bg-no-repeat bg-contain bg-center w-full max-w-[110%] mt-7 md:w-[100vw] min-h-screen md:min-h-[90vh] flex flex-col justify-between font-bold text-center">
        <h1
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
        </h1>
      </div> */}
     
			<div className='w-full mt-[150px]  mx-auto md:max-w-4xl'>
				<Image
					src='/assets/images/hero.svg'
					width={100}
					height={100}
					className='object-contain w-full h-auto'
					alt='tphxsrm'
				/>
			</div>
		</section>
	);
};

export default Hero;
