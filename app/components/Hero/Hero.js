import Image from 'next/image';
import React from 'react';
import hero1 from '../../assets/hero1.webp';
import hero2 from '../../assets/hero2.png';
import hero3 from '../../assets/hero3.png';
import Link from 'next/link';

const Hero = () => {
	return (
		<>
			<div>
				<Link href='/'>
					<Image src={hero1} className='w-screen' alt='hero'/>
				</Link>
			</div>
			<div className='lg:flex'>
				<Link href='/'>
					<Image src={hero2} className='w-screen' alt='hero'/>
				</Link>
				<Link href='/'>
					<Image src={hero3} className='w-screen' alt='hero'/>
				</Link>
			</div>
		</>
	);
};

export default Hero;
