'use client';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { arrive } from './arrive';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Arrivals = () => {
	const [index, setIndex] = useState(0);

	return (
		<div>
			<h2 className='font-bold text-xl text-center my-4'>New Arrivals</h2>

			{/* TABS HEAD */}
			<div className='container m-auto flex justify-center gap-2'>
				<button
					type='button'
					className={`font-bold md:text-xs text-[10px] py-1 md:px-4 px-2 rounded-full border ${
						index === 0
							? 'bg-red-700 text-white  border-red-700'
							: 'border-black text-black'
					}`}
					onClick={() => setIndex(0)}
				>
					MEN
				</button>
				<button
					type='button'
					className={`font-bold md:text-xs text-[10px] py-1 md:px-4 px-2 rounded-full border ${
						index === 1
							? 'bg-red-700 text-white  border-red-700'
							: 'border-black text-black'
					}`}
					onClick={() => setIndex(1)}
				>
					WOMEN
				</button>
				<button
					type='button'
					className={`font-bold md:text-xs text-[10px] py-1 md:px-4 px-2 rounded-full border ${
						index === 2
							? 'bg-red-700 text-white  border-red-700'
							: 'border-black text-black'
					}`}
					onClick={() => setIndex(2)}
				>
					KID
				</button>
				<button
					type='button'
					className={`font-bold md:text-xs text-[10px] py-1 md:px-4 px-2 rounded-full border ${
						index === 3
							? 'bg-red-700 text-white  border-red-700'
							: 'border-black text-black'
					}`}
					onClick={() => setIndex(3)}
				>
					NEWBORN
				</button>
				<button
					type='button'
					className={`font-bold md:text-xs text-[10px] py-1 md:px-4 px-2 rounded-full border ${
						index === 4
							? 'bg-red-700 text-white  border-red-700'
							: 'border-black text-black'
					}`}
					onClick={() => setIndex(4)}
				>
					FOOTWEAR
				</button>
			</div>

			{/* TABS BODY */}

      {/* MEN */}
			<div className='mx-2'>
			<div hidden={index !== 0}>
				{arrive?.map((arr, i) =>
					arr?.name === 'men' ? (
						<Swiper
							spaceBetween={10}
							navigation={{
								nextEl: '.button-next-slide',
								prevEl: '.button-prev-slide',
							}}
							className='group my-4'
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
							<>
								{arr?.sources?.map((s, i) => (
									<SwiperSlide key={i}>
										<Image
											src={s?.src}
											className='w-full'
											alt='arrivals'
										/>
									</SwiperSlide>
								))}
							</>
							<div className='button-prev-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 left-0'>
								<ion-icon name='arrow-back-outline'></ion-icon>
							</div>
							<div className='button-next-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 right-0'>
								<ion-icon name='arrow-forward-outline'></ion-icon>
							</div>
						</Swiper>
					) : (
						<div />
					)
				)}
			</div>

      {/* WOMEN */}
			<div hidden={index !== 1}>
				{arrive?.map((arr, i) =>
					arr?.name === 'women' ? (
						<Swiper
							spaceBetween={10}
							navigation={{
								nextEl: '.button-next-slide',
								prevEl: '.button-prev-slide',
							}}
							className='group my-4'
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
							<>
								{arr?.sources?.map((s, i) => (
									<SwiperSlide key={i}>
										<Image
											src={s?.src}
											className='w-full'
											alt='arrivals'
										/>
									</SwiperSlide>
								))}
							</>
							<div className='button-prev-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 left-0'>
								<ion-icon name='arrow-back-outline'></ion-icon>
							</div>
							<div className='button-next-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 right-0'>
								<ion-icon name='arrow-forward-outline'></ion-icon>
							</div>
						</Swiper>
					) : (
						<div />
					)
				)}
			</div>

      {/* KIDS */}
			<div hidden={index !== 2}>
				{arrive?.map((arr, i) =>
					arr?.name === 'kids' ? (
						<Swiper
							spaceBetween={10}
							navigation={{
								nextEl: '.button-next-slide',
								prevEl: '.button-prev-slide',
							}}
							className='group my-4'
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
							<>
								{arr?.sources?.map((s, i) => (
									<SwiperSlide key={i}>
										<Image
											src={s?.src}
											className='w-full'
											alt='arrivals'
										/>
									</SwiperSlide>
								))}
							</>
							<div className='button-prev-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 left-0'>
								<ion-icon name='arrow-back-outline'></ion-icon>
							</div>
							<div className='button-next-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 right-0'>
								<ion-icon name='arrow-forward-outline'></ion-icon>
							</div>
						</Swiper>
					) : (
						<div />
					)
				)}
			</div>

      {/* NEWBORNS */}
			<div hidden={index !== 3}>
				{arrive?.map((arr, i) =>
					arr?.name === 'newborn' ? (
						<Swiper
							spaceBetween={10}
							navigation={{
								nextEl: '.button-next-slide',
								prevEl: '.button-prev-slide',
							}}
							className='group my-4'
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
							<>
								{arr?.sources?.map((s, i) => (
									<SwiperSlide key={i}>
										<Image
											src={s?.src}
											className='w-full'
											alt='arrivals'
										/>
									</SwiperSlide>
								))}
							</>
							<div className='button-prev-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 left-0'>
								<ion-icon name='arrow-back-outline'></ion-icon>
							</div>
							<div className='button-next-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 right-0'>
								<ion-icon name='arrow-forward-outline'></ion-icon>
							</div>
						</Swiper>
					) : (
						<div />
					)
				)}
			</div>
      {/* FOOTWEAR */}
			<div hidden={index !== 4}>
				{arrive?.map((arr, i) =>
					arr?.name === 'footwear' ? (
						<Swiper
							spaceBetween={10}
							navigation={{
								nextEl: '.button-next-slide',
								prevEl: '.button-prev-slide',
							}}
							className='group my-4'
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
							<>
								{arr?.sources?.map((s, i) => (
									<SwiperSlide key={i}>
										<Image
											src={s?.src}
											className='w-full'
											alt='arrivals'
										/>
									</SwiperSlide>
								))}
							</>
							<div className='button-prev-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 left-0'>
								<ion-icon name='arrow-back-outline'></ion-icon>
							</div>
							<div className='button-next-slide w-[40px] h-[40px] bg-red-700 text-white grid place-items-center absolute top-[47%] z-10 right-0'>
								<ion-icon name='arrow-forward-outline'></ion-icon>
							</div>
						</Swiper>
					) : (
						<div />
					)
				)}
			</div>
			</div>
		</div>
	);
};

export default Arrivals;
