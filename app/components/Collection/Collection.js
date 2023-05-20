import React from 'react';
import boy from '../../assets/boy.png';
import girl from '../../assets/girl.png';
import shoe1 from '../../assets/shoe1.jpg';
import shoe2 from '../../assets/shoe2.jpg';
import feature1 from '../../assets/feature1.webp';
import shoe3 from '../../assets/shoe3.jpg';
import shoe4 from '../../assets/shoe4.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Collection = () => {
	return (
		<div>
			{/* COLLECTION SECTION */}
			<div className='xl:flex xl:justify-between gap-2 md:block container m-auto my-6'>
				<Link href='/' className='w-full mx-1'>
					<Image src={boy} alt='boy' className='w-screen' />
				</Link>
				<Link href='/' className='w-full mx-1'>
					<Image src={girl} alt='girl' className='w-screen' />
				</Link>
			</div>

			<div>
			<Link href='/' className='w-full h-[300px]'>
						<Image src={feature1} alt='boy' className='w-screen h-[250px]' />
					</Link>
			</div>

			{/* CREATIVE LAYOUT BY ME */}
			<div className='xl:flex xl:justify-between gap-2 md:block container m-auto my-6'>
				<Link href='/' className='w-full my-2'>
					<Image src={shoe1} alt='boy' className='w-screen h-[510px]' />
				</Link>

				<div className='w-full flex flex-col gap-y-2 my-2'>
					<Link href='/' className='w-full'>
						<Image src={shoe2} alt='boy' className='w-screen h-[250px]' />
					</Link>
					<div className='flex justify-between gap-x-2'>
						<Link href='/' className='w-full'>
							<Image src={shoe3} alt='boy' className='w-screen h-[250px]' />
						</Link>
						<Link href='/' className='w-full'>
							<Image src={shoe4} alt='boy' className='w-screen h-[250px]' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collection;
