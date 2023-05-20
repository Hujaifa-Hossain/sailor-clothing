import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white text-xs font-normal lg:mb-0 mb-10'>
			{/* FOOTER LINKS */}
			<div className='md:flex justify-between max-w-5xl m-auto p-3 '>
				<div className='flex-1 m-2'>
					<h3 className='text-1xl font-semibold my-1 uppercase'>
						Contact Info
					</h3>
					<p>
						NINAKABBO 227/A Tejgaon-Gulshan Link Road Postal Code: 1208 Dhaka,
						Bangladesh
					</p>
					<div className='my-2'>
						<Link href='to:01000000000'>01000000000</Link>
					</div>
					<div className='my-2'>
						<Link href='send:hello@sailor.clothing'>hello@sailor.clothing</Link>
					</div>
				</div>

				<div className='flex-1 m-2'>
					<h3 className='text-1xl font-semibold my-1 uppercase'>Know Us</h3>

					<div className='my-2'>
						<Link href='/'>Who We Are</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Sailor Club</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>
							Brand Social <br /> Responsibilities (BSR)
						</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Join Us</Link>
					</div>
				</div>

				<div className='flex-1 m-2'>
					<h3 className='text-1xl font-semibold my-1 uppercase'>
						Shopping Information
					</h3>

					<div className='my-2'>
						<Link href='/'>Privacy Policy</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Size Guide</Link>
					</div>
				</div>

				<div className='flex-1 m-2'>
					<h3 className='text-1xl font-semibold my-1 uppercase'>
						Service Information
					</h3>
					<div className='my-2'>
						<Link href='/'>Return And Exchange</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Shipping & Charges</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Customer Service</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Terms And Conditions</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Store Locator</Link>
					</div>
				</div>

				<div className='flex-1 m-2'>
					<h3 className='text-1xl font-semibold my-1 uppercase'>Category</h3>
					<div className='my-2'>
						<Link href='/'>Mens</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Women</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Kids</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Newborns</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Accessories</Link>
					</div>
					<div className='my-2'>
						<Link href='/'>Footwear</Link>
					</div>
				</div>

				<div className='flex-1 m-2'>
					<h3 className='text-1xl font-semibold my-1 uppercase'>
						Subscribe Us
					</h3>

					<p className='my-2'>
						Keep yourself updated with the latest Sailor News, Fashion Updates
						and Blogs! Subscribe here!
					</p>

					<form className='my-2'>
						<input
							type='email'
							placeholder='Type your email'
							className='outline-none bg-gray-50 p-2 my-1 w-full text-black'
						/>
						<div>
							<button className='rounded p-2 font-bold border max-w-full' type='submit'>
								Subscribe
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* FOOTER BOTTOM */}
			<div className='lg:flex text-xs justify-between max-w-5xl m-auto border-t '>
				<p className='m-2'>Copyright ©2023 Sailor. All Rights Reserved</p>
				<p className='m-2 text-right'>
					System Design & Developed By :{' '}
					<span className='text-red-400'>HUJAIFA HOSSAIN</span>
				</p>
			</div>

			<div className='fixed bottom-0 md:hidden flex justify-around bg-white w-full text-black z-[1000]'>
				<Link href='/' className='m-2'>
					<ion-icon name='home-sharp'></ion-icon>
				</Link>
				<Link href='/' className='m-2'>
					<ion-icon name='heart-outline'></ion-icon>
				</Link>
				<Link href='/' className='m-2'>
					<ion-icon name='cart-outline'></ion-icon>
				</Link>
				<Link href='/' className='m-2'>
					<ion-icon name='person-outline'></ion-icon>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
