'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import category1 from '../../assets/category1.webp';
import category2 from '../../assets/category2.webp';
import category3 from '../../assets/category3.webp';
import category4 from '../../assets/category4.webp';
import category5 from '../../assets/category5.webp';
import Link from 'next/link';

const Categories = () => {
	const categories = [
		{
			category: 'Men',
			img: category1,
		},
		{
			category: 'Women',
			img: category2,
		},
		{
			category: 'Kids',
			img: category3,
		},
		{
			category: 'New Born',
			img: category4,
		},
		{
			category: 'Footwear',
			img: category5,
		},
		{
			category: 'Accessories',
			img: category3,
		},
	];
	return (
		<>
			<h2 className='font-bold text-xl text-center my-4'>
				Trending Categories
			</h2>

			<div className='mx-2 z-[0]'>
				<Swiper
					spaceBetween={10}
					className='group z-[0]'
					navigation={{
						nextEl: '.button-next-slide',
						prevEl: '.button-prev-slide',
					}}
					modules={[Navigation]}
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 4,
						},
						1440: {
							slidesPerView: 5,
						},
					}}
				>
					{categories?.map((cat, i) => (
						<div className='z-[0]'>
							<SwiperSlide key={i}>
							<div className='relative z-[0]'>
								<Image src={cat?.img} className='w-full z-[0]' alt='category' />
								<Link
									href='/'
									className='bg-white text-black text-center absolute bottom-2 z-50 font-medium py-[5px] text-[14px] w-[80%] m-auto left-2 right-2'
								>
									{cat?.category}
								</Link>
							</div>
						</SwiperSlide>
						</div>
					))}

					<div className='button-prev-slide w-[40px] h-[40px] bg-slate-50 text-black grid place-items-center absolute top-[47%] z-10 left-0'>
						<ion-icon name='arrow-back-outline'></ion-icon>
					</div>
					<div className='button-next-slide w-[40px] h-[40px] bg-slate-50 text-black grid place-items-center absolute top-[47%] z-10 right-0'>
						<ion-icon name='arrow-forward-outline'></ion-icon>
					</div>
				</Swiper>
			</div>
		</>
	);
};

export default Categories;
