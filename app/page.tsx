import Domains from '../components/domains/Domains';
import Footer from '@/components/layouts/Footer';
import Sponsor from '../components/sponsors/Sponsor';
import AboutUs from '@/components/aboutUs/AboutUs';
import NewsLetter from '@/components/newsletter/NewsLetter';
import Hero from '@/components/landing/Hero';
import Navbar from '@/components/layouts/Navbar';

export default function Home() {
	return (
		<main className='bg-black text-white overflow-clip'>
			<Navbar />
			<Hero />
			<Sponsor />
			<AboutUs />
			<Domains />
			<NewsLetter />
			<Footer />
		</main>
	);
}
