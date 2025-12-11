"use client";

import Image, { type StaticImageData } from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProductCarousel = ({ images }: Props) => {
	if (!images || images.length === 0) {
		return (
			<div className="w-full h-80 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500">
				Нет изображений
			</div>
		);
	}

	return (
		<div className="w-full max-w-xl mx-auto">
			<Swiper
				modules={[Navigation, Pagination]}
				loop
				spaceBetween={20}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				className="rounded-lg overflow-hidden"
			>
				{images.map((src, i) => (
					<SwiperSlide key={i.toString()}>
						<div className="relative w-full h-[400px] md:h-[500px]">
							<Image
								src={src}
								alt={`product-image-${i}`}
								fill
								className="object-contain bg-white"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

interface Props {
	images: (string | StaticImageData)[];
}
