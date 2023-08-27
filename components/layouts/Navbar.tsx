// import Headroom from "react-headroom"
import Image from 'next/image';
import arrow from '@/public/assets/icons/arrow.svg';
import navbar_star from '@/public/assets/icons/navbarStar.svg';
import InfiniteLooper from '@/components/sponsors/InfinteLooper';
import Link from 'next/link';

const Navbar = () => {
	return (
		<>
		<nav className='flex gap-8 text-white py-2 px-8 justify-around bg-linearback items-center fixed top-0 z-50 w-full'>
			{/* <div className="flex gap-5 w-[100px]">
          <div>
            <Image src={hamburger} alt="hamburger" />
          </div>
          <div>Name</div>
        </div> */}
			<Link
				href='https://lu.ma/tphsrmistrecruitments'
				target='_blank'
				rel='noopener noreferrer'
				className='w-[100%] block'
			>
				<InfiniteLooper speed={10} direction='right'>
					<div className='flex items-center gap-5 text-xl'>
						<div className='flex animate-rotate px-20'>
							<Image
								src={navbar_star}
								alt='star'
								width={20}
								height={20}
							/>
						</div>
						<span className='text-[#0A050C] flex gap-2 text-base uppercase font-light'>
							<span>
								Recruitments are open - Click To Register Now
							</span>
							<Image src={arrow} alt='arrow' />
						</span>
					</div>
				</InfiniteLooper>
			</Link>
			
			{/* <div className="flex justify-end">
          <button className="w-max flex align-middle justify-center justify-self-center align-self">
            <a
             
              className="whitespace-nowrap rounded-xl border-2 border-white py-3 px-8 bg-gradient-to-r from-[#16EE97] to-[#AA66FE] text-lg font-bold"
            >
              Register Now
            </a>
          </button>
        </div> */}
		</nav>
		<Image
					src='/assets/images/logo.png'
					width={100}
					height={100}
					className='object-contain  absolute left-0 top-[50px] p-6 w-[170px] h-auto'
					alt='tphxsrm'
				/>
		</>
	);
};

export default Navbar;
