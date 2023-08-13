import React from 'react';

const Hero = () => {
	return (
		<section className='w-full pt-12 p-4 flex items-center justify-center'>
			<div className='bg-[url(/assets/images/landing.svg)] bg-no-repeat bg-contain bg-center w-full max-w-[110%] md:max-w-[80%] min-h-screen md:min-h-[70vh] flex justify-center font-bold text-center'>
				<h1
					className='uppercase bg-inherit bg-clip-text text-white mt-10'
					style={{
						WebkitBackgroundClip: 'text',
						// WebkitTextFillColor: 'transparent',
						// filter: 'invert(1) grayscale(1) contrast(2) drop-shadow(.05em .05em orange)',
					}}
				>
					<p className='text-4xl md:text-7xl lg:text-9xl'>
						The Blockchain
					</p>{' '}
					<br />
					<p className='text-3xl md:text-6xl lg:text-8xl'>
						Build For Students
					</p>
				</h1>
			</div>
		</section>
	);
};

export default Hero;
