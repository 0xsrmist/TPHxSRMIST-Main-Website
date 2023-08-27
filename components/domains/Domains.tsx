import DomainCard from './DomainCard';

const Domains = () => {
	return (
		<div id='domains' className='flex flex-col gap-8 px-16 max-w-[1420px] mx-auto py-20'>
			<h2 className='flex justify-center text-white text-5xl md:text-7xl font-medium'>
				DOMAINS
			</h2>
			<div className='flex flex-col md:flex-row gap-6 pt-10 px-20 gap-y-20 justify-between items-center'>
				<DomainCard
					image='./assets/images//technical.svg'
					title='TECHNICAL'
					desc='In the technical realm, innovation is fueled by the mastery of intricacies.'
				/>
				<DomainCard
					image='./assets/images/creative.svg'
					title='CREATIVES'
					desc='In the realm of creativity, imagination knows no bounds, giving life to innovation.'
				/>
				<DomainCard
					image='./assets/images/corporate.svg'
					title='CORPORATE'
					desc='The corporate landscape is where strategy shapes success and collaboration breeds growth.'
				/>
			</div>
		</div>
	);
};

export default Domains;
