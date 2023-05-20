'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { links } from './links';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState(false);
	const [heading, setHeading] = useState('');
	const [subHeading, setSubHeading] = useState('');
	return (
		<nav>
			{/* HEADER TOP  */}
			<h2 className='bg-gray-900 text-white py-1 text-center font-medium tracking-wider text-xs'>
				Step into the Festive Season with Sailor
			</h2>

			{/* HEADER MENU  */}

			<div className='xl:flex justify-between hidden text-xs container m-auto py-3 px-3 border-b border-gray-100'>
				<p>Sailing Life</p>
				<div className=''>
					<Link className='m-2' href='/'>
						Login
					</Link>
					<Link className='m-2' href='/'>
						About Us
					</Link>
					<Link className='m-2' href='/'>
						My Wishlist
					</Link>
					<Link className='m-2' href='/'>
						Cart
					</Link>
					<Link className='m-2' href='/'>
						Compare(0)
					</Link>
					<Link className='m-2' href='/'>
						<ion-icon name='logo-twitter'></ion-icon>
					</Link>
				</div>
			</div>

			<div className='sticky top-0 bg-white'>
				{/* HEADER CONFIG */}

				<div className='container m-auto px-4 xl:flex justify-between items-center py-1 hidden border-b border-gray-100'>
					<Link href='/'>
						<Image src={logo} height={70} />
					</Link>
					<form className='flex align-middle'>
						<input
							type='text'
							placeholder='Search'
							className='outline-none bg-gray-50 px-4 py-2 mr-1 rounded-full rounded-r-none'
						/>
						<button
							className='outline-none bg-gray-50 px-2 py-2 text-black rounded-full rounded-l-none'
							type='submit'
						>
							<ion-icon name='search-outline'></ion-icon>
						</button>
					</form>

					<div className='flex items-center text-xs'>
						<p>
							<ion-icon size='large' name='call'></ion-icon>
						</p>
						<div>
							<p className='m-1 text-gray-500'>Call Us Now</p>
							<Link href='to:01000000000' className='m-1'>
								01000000000
							</Link>
						</div>
					</div>

					<Link href='/'>
						<ion-icon name='heart-outline'></ion-icon>
					</Link>
					<Link href='/'>
						<ion-icon name='cart-outline'></ion-icon>
					</Link>
				</div>

				{/* MEGA MENU */}
				<div className='container m-auto flex items-center font-medium justify-between'>
					<div
						className='z-50 px-4 mt-1 text-3xl md:hidden cursor-pointer'
						onClick={() => setOpen(!open)}
					>
						<ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
					</div>
					<ul className='md:flex hidden uppercase items-center gap-8'>
						{/* desktop */}

						{links.map((link) => (
							<div>
								<div className='px-3 md:cursor-pointer group'>
									<h2
										className='py-4 flex justify-between items-center text-xs group'
										onClick={() => {
											heading !== link.name
												? setHeading(link.name)
												: setHeading('');
											setSubHeading('');
										}}
									>
										{link.name}
									</h2>
									{link.submenu && (
										<div>
											<div className='absolute top-30 w-full left-0 hidden group-hover:md:block hover:md:block'>
												<div className='bg-white p-5 grid grid-cols-3 gap-10'>
													{link.sublinks?.map((mysublinks) => (
														<div>
															<h1 className='text-lg font-semibold'>
																{mysublinks.Head}
															</h1>
															{mysublinks.sublink.map((slink) => (
																<li className='text-sm text-gray-600 my-2.5'>
																	<Link
																		href={slink.link}
																		className='hover:text-primary'
																	>
																		{slink.name}
																	</Link>
																</li>
															))}
														</div>
													))}
												</div>
											</div>
										</div>
									)}
								</div>
								{/* Mobile menus */}
								<div
									className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
						`}
								>
									{/* sublinks */}
									{link.sublinks?.map((slinks) => (
										<div>
											<div>
												<h1
													onClick={() =>
														subHeading !== slinks.Head
															? setSubHeading(slinks.Head)
															: setSubHeading('')
													}
													className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center'
												>
													{slinks.Head}
												</h1>
												<div
													className={`${
														subHeading === slinks.Head ? 'md:hidden' : 'hidden'
													}`}
												>
													{slinks.sublink.map((slink) => (
														<li className='py-3 pl-14'>
															<Link href={slink.link}>{slink.name}</Link>
														</li>
													))}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</ul>
					<ul
						className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto py-16 pl-4
        duration-500 h-screen ${open ? 'left-0' : 'left-[-100%]'}
        `}
					>
						{/* Mobile */}

						{links.map((link) => (
							<div>
								<div className='px-3 text-left md:cursor-pointer group'>
									<h1
										className='py-7 flex justify-between items-center md:pr-0 pr-5 group'
										onClick={() => {
											heading !== link.name
												? setHeading(link.name)
												: setHeading('');
											setSubHeading('');
										}}
									>
										{link.name}
										<span className='text-xl md:hidden inline'>
											<ion-icon
												name={`${
													heading === link.name
														? 'remove-outline'
														: 'add-outline'
												}`}
											></ion-icon>
										</span>
										<span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
											<ion-icon name='chevron-down'></ion-icon>
										</span>
									</h1>
									{link.submenu && (
										<div>
											<div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
												<div className='py-3'>
													<div
														className='w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45'
													></div>
												</div>
												<div className='bg-white p-5 grid grid-cols-3 gap-10'>
													{link.sublinks?.map((mysublinks) => (
														<div>
															<h1 className='text-lg font-semibold'>
																{mysublinks.Head}
															</h1>
															{mysublinks.sublink.map((slink) => (
																<li className='text-sm text-gray-600 my-2.5'>
																	<Link
																		href={slink.link}
																		className='hover:text-primary'
																	>
																		{slink.name}
																	</Link>
																</li>
															))}
														</div>
													))}
												</div>
											</div>
										</div>
									)}
								</div>
								{/* Mobile menus */}
								<div
									className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}
								>
									{/* sublinks */}
									{link.sublinks?.map((slinks) => (
										<div>
											<div>
												<h1
													onClick={() =>
														subHeading !== slinks.Head
															? setSubHeading(slinks.Head)
															: setSubHeading('')
													}
													className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center'
												>
													{slinks.Head}

													<span className='text-xl md:mt-1 md:ml-2 inline'>
														<ion-icon
															name={`${
																subHeading === slinks.Head
																	? 'remove-outline'
																	: 'add-outline'
															}`}
														></ion-icon>
													</span>
												</h1>
												<div
													className={`${
														subHeading === slinks.Head ? 'md:hidden' : 'hidden'
													}`}
												>
													{slinks.sublink.map((slink) => (
														<li className='py-3 pl-14'>
															<Link href={slink.link}>{slink.name}</Link>
														</li>
													))}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</ul>

					<Link href='/' className='md:hidden my-1'>
						<Image src={logo} height={70} />
					</Link>
					<div
						className='md:hidden cursor-pointer group active:border active:border-black px-3 py-2 rounded-sm'
						onClick={() => setSearch(!search)}
					>
						<ion-icon name='search'></ion-icon>

						{search && <form className="absolute top-14 bg-white w-full left-0 p-4">
							<input type="text"  className='w-full py-2 px-3 my-2 bg-gray-100' placeholder='Search'/>
							<button type='submit' className='text-white bg-black text-center w-full py-3'>Search</button>
						</form>}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
