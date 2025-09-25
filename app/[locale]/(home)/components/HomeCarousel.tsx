'use client';

import EmblaCarouselAutoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import type React from 'react';
import { Carousel } from '@/libs/components/ui/carousel';

export function HomeCarousel({ children }: { children: React.ReactNode }) {
	return (
		<Carousel
			className='w-full relative'
			opts={{
				align: 'start',
				containScroll: 'keepSnaps',
				loop: true,
			}}
			plugins={[
				EmblaCarouselAutoplay({
					delay: 4000,
				}),
				WheelGesturesPlugin(),
			]}
		>
			<div className='bg-gradient-to-r from-background to-transparent absolute left-0 top-0 h-full w-20 z-10' />
			<div className='bg-gradient-to-l from-background to-transparent absolute right-0 top-0 h-full w-20 z-10' />
			{children}
		</Carousel>
	);
}
