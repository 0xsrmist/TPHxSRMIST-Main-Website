import Link from 'next/link';
import React from 'react';

const Hero = () => {
	return (
		<section className='w-full pt-12 p-4 flex items-center justify-center'>
			<div className='bg-[url(/assets/images/landing.svg)] bg-no-repeat bg-contain bg-center w-full max-w-[110%] md:max-w-[80%] min-h-screen md:min-h-[70vh] flex flex-col justify-between font-bold text-center'>
				<h1
					className='uppercase bg-inherit bg-clip-text text-white mt-10'
					style={{
						WebkitBackgroundClip: 'text',
						// WebkitTextFillColor: 'transparent',
						// filter: 'invert(1) grayscale(1) contrast(2) drop-shadow(.05em .05em orange)',
					}}
				>
					<p className='text-4xl md:text-7xl lg:text-9xl'>
						The Blockchain Community
					</p>{' '}
					<br />
					<p className='text-3xl md:text-6xl lg:text-8xl'>
						Built For Students
					</p>
				</h1>
				<button>
					<Link
						target='_blank'
						href='https://lu.ma/gerc8cle'
						className='whitespace-nowrap rounded-xl border-2 border-white py-5 px-8 bg-gradient-to-r from-[#16EE97] to-[#AA66FE] text-4xl font-bold'
					>
						Sign Up
					</Link>
				</button>
			</div>
		</section>
	);
};

export default Hero;
