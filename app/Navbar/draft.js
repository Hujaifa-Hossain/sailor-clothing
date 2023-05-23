<ul
	className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto py-16 pl-4
        duration-500 h-screen ${open ? 'left-0' : 'left-[-100%]'}
        `}
>
	{/* Mobile */}
	{links.map((link) => (
		<div>
			<div className='px-2 group'>
				{/* Category tom heading like men, women */}
				<div
					className='py-1 pl-2 flex justify-between items-center group border-b'
					onClick={() => {
						heading !== link.name ? setHeading(link.name) : setHeading('');
						setSubHeading('');
					}}
				>
					<p>{link.name}</p>
					<p className='md:hidden inline'>
						<ion-icon
							name={`${
								heading === link.name ? 'remove-outline' : 'add-outline'
							}`}
						></ion-icon>
					</p>
				</div>
				{/* Category top heading like men, women */}

				{link.submenu && (
					<div className='absolute top-10 hidden group-hover:md:block hover:md:block'>
						{/* <div className='py-3'>
							<div
								className='w-4 h-4 left-3 absolute 
											mt-1 bg-white rotate-45'
							></div>
						</div> */}
						<div className='bg-white p-5 grid grid-cols-3 gap-10'>
							{link.sublinks?.map((mysublinks) => (
								<div>
									<h1 className='font-medium'>{mysublinks.Head}</h1>
									{mysublinks.sublink.map((slink) => (
										<li className='text-sm text-gray-600 py-1'>
											<Link href={slink.link} className='hover:text-primary'>
												{slink.name}
											</Link>
										</li>
									))}
								</div>
							))}
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
								className='py-1 pl-2 font-medium md:pr-0 pr-5 flex justify-between items-center'
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
</ul>;
