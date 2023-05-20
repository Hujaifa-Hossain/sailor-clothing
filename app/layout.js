import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sailor Clothing',
	description: 'Best of clothing you have ever seen.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				<Navbar />
				{children}
				<Footer />
				<script
					type='module'
					src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
				></script>
				<script
					nomodule
					src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
				></script>
			</body>
		</html>
	);
}
