"use client";

import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export const HomeCarousel = () => {
	const swiperRef = useRef<SwiperType | null>(null);
	const videoRefs = useRef<HTMLVideoElement[]>([]);

	const playVideoByIndex = (index: number) => {
		const video = videoRefs.current[index];
		video?.play().catch(() => {
			console.log("Video play error");
		});
	};

	const handleSetSwiper = (swiper: SwiperType) => {
		swiperRef.current = swiper;

		const stopOthers = (active: number) => {
			videoRefs.current.forEach((v, i) => {
				if (i !== active) {
					v.pause();
					v.currentTime = 0;
				}
			});
		};

		swiper.on("transitionEnd", () => {
			const index = swiper.realIndex;
			stopOthers(index);
			playVideoByIndex(index);
		});
	};

	const handleVideoEnd = () => {
		swiperRef.current?.slideNext();
	};

	useEffect(() => {
		playVideoByIndex(0);
	}, []);

	return (
		<div className="relative h-screen">
			<Swiper
				onSwiper={handleSetSwiper}
				slidesPerView={1}
				loop={true}
				modules={[Navigation]}
				navigation
			>
				<SwiperSlide>
					<div className="h-screen">
						<video
							ref={(el) => {
								if (el) videoRefs.current[0] = el;
							}}
							src="/videos/1.mp4"
							muted
							onEnded={handleVideoEnd}
							className="w-full h-full object-cover"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="h-screen">
						<video
							ref={(el) => {
								if (el) videoRefs.current[1] = el;
							}}
							src="/videos/2.mp4"
							muted
							onEnded={handleVideoEnd}
							className="w-full h-full object-cover"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="h-screen">
						<video
							ref={(el) => {
								if (el) videoRefs.current[2] = el;
							}}
							src="/videos/3.mp4"
							muted
							onEnded={handleVideoEnd}
							className="w-full h-full object-cover"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="h-screen">
						<video
							ref={(el) => {
								if (el) videoRefs.current[3] = el;
							}}
							src="/videos/5.mp4"
							muted
							onEnded={handleVideoEnd}
							className="w-full h-full object-cover"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
