import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const helvetica = localFont({
	src: [
		{
			path: '../public/fonts/Helvetica/helvetica-compressed-5871d14b6903a.otf',
			weight: '500',
			style: 'medium',
		},
		{
			path: '../public/fonts/Helvetica/Helvetica.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-helvetica',
});

export const metadata: Metadata = {
	title: 'TPH x SRMIST | Home',
	description: 'Official Website of TPH x SRMIST.',
	openGraph: {
		type: 'website',
		title: 'TPH x SRMIST | Home',
		description: 'Official Website of TPH x SRMIST.',
		url: 'https://tph-srmist.vercel.app',
		images: ['/og-thumbnail.png'],
	},
	twitter: {
		title: 'TPH x SRMIST | Home',
		description: 'Official Website of TPH x SRMIST.',
		card: 'summary_large_image',
		images: ['/twitter-thumbnail.png'],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${helvetica.variable} font-helvetica`}>
				{children}
			</body>
		</html>
	);
}
