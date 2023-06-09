'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { links } from './links';
import logo from '../assets/logo.png';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState(false);
	const [heading, setHeading] = useState('');
	const [subHeading, setSubHeading] = useState('');

	const menuRef = useRef();
	const searchRef = useRef();

	useEffect(() => {
		let handleClickOutSide = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOpen(false);
			}
			if (!searchRef.current.contains(e.target)) {
				setSearch(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutSide);

		return () => {
			document.removeEventListener('mousedown', handleClickOutSide);
		};
	}, []);

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
						<Image src={logo} height={70} alt='logo' />
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

				{/* MEGA MENU FOR DESKTOP */}
				<div className='container m-auto hidden md:flex uppercase items-center gap-8'>
					{/* desktop */}

					{links.map((link, i) => (
						<div key={i}>
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
									<div className='absolute top-30 w-full left-0 hidden group-hover:md:block hover:md:block'>
										<div className='bg-white p-5 grid grid-cols-3 gap-10'>
											{link.sublinks?.map((mysublinks, i) => (
												<div key={i}>
													<h1 className='text-lg font-semibold'>
														{mysublinks.Head}
													</h1>
													{mysublinks.sublink.map((slink, i) => (
														<Link
															key={i}
															href={slink.link}
															className='block text-sm text-gray-600 my-2.5 hover:text-black'
														>
															{slink.name}
														</Link>
													))}
												</div>
											))}
										</div>
									</div>
								)}
							</div>
							<div
								className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
						`}
							>
								{/* sublinks */}
								{link.sublinks?.map((slinks, i) => (
									<div key={i}>
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
												{slinks.sublink.map((slink, i) => (
													<li className='py-3 pl-14' key={i}>
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
				</div>
			</div>

			<div className='container m-auto md:hidden flex items-center font-medium justify-between bg-white'>
				<div className='px-4 mt-1 cursor-pointer relative '>
					<ion-icon name='menu' onClick={() => setOpen(!open)}></ion-icon>

					{/* Mobile offcanvas started */}
					<div
						className={`
							md:hidden bg-[#00000050] fixed top-0 
							duration-500 h-[100vh] z-50 ${open ? 'left-0 w-[100%]' : 'left-[-100%]'}
        			`}
					>
						<div
							ref={menuRef}
							className='bg-white p-2 h-[100vh] opacity-100 w-[70%] overflow-y-auto'
						>
							{/* Mobile */}
							{links.map((link, i) => (
								<div key={i}>
									<div className='group my-[2px]'>
										{/* Category tom heading like men, women */}
										<div
											onClick={() => {
												heading !== link.name
													? setHeading(link.name)
													: setHeading('');
												setSubHeading('');
											}}
											// className='py-1 flex justify-between items-center group border-b'
											className={`py-1 px-2 flex justify-between items-center group border-b w-full ${
												heading === link.name ? 'bg-gray-900 text-white' : ''
											}`}
										>
											<p>{link.name}</p>
											<p className='md:hidden inline'>
												<ion-icon
													name={`${
														heading === link.name
															? 'remove-outline'
															: 'add-outline'
													}`}
												></ion-icon>
											</p>
										</div>
										{/* Category top heading like men, women */}
									</div>

									{/* Mobile menus */}
									<div
										className={`
            				${heading === link.name ? 'md:hidden' : 'hidden'}
          					`}
									>
										{/* sublinks */}
										{link.sublinks?.map((slinks, i) => (
											<>
												{/* top heading like Topwear */}
												<div
													key={i}
													onClick={() =>
														subHeading !== slinks.Head
															? setSubHeading(slinks.Head)
															: setSubHeading('')
													}
													className={`py-1 px-2 flex justify-between items-center group border-b ${
														subHeading === slinks.Head
															? 'bg-gray-900 text-white'
															: ''
													}`}
												>
													<p>{slinks.Head}</p>

													<p className='md:hidden inline'>
														<ion-icon
															name={`${
																subHeading === slinks.Head
																	? 'remove-outline'
																	: 'add-outline'
															}`}
														></ion-icon>
													</p>
												</div>
												{/* top heading like Topwear */}

												<div
													className={`${
														subHeading === slinks.Head ? 'md:hidden' : 'hidden'
													}`}
												>
													{slinks.sublink.map((slink, i) => (
														<div key={i}>
															<Link
																className='py-1 pl-2 text-base font-normal'
																href={slink.link}
															>
																{slink.name}
															</Link>
														</div>
													))}
												</div>
											</>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Mobile offcanvas ended */}
				</div>

				<Link href='/' className='my-1'>
					<Image src={logo} height={60} />
				</Link>

				<div
					className='cursor-pointer relative mx-3 my-2 rounded-sm'
					ref={searchRef}
				>
					<ion-icon
						name={search ? 'close' : 'search'}
						onClick={() => setSearch(!search)}
					></ion-icon>
					<form
						className={`top-16 bg-white w-full left-0 p-4 duration-500 ${
							search ? 'fixed' : 'hidden'
						}`}
					>
						<input
							type='text'
							className='w-full py-2 px-3 my-2 bg-gray-100'
							placeholder='Search'
						/>
						<button
							type='submit'
							className='text-white bg-black text-center w-full py-3'
						>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
