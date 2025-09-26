'use client';

import EmblaCarouselAutoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import type React from 'react';
import { Carousel } from '@/libs/components/ui/carousel';

export function HomeCarousel({ children }: { children: React.ReactNode }) {
	return (
		<Carousel
			className='relative w-full'
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
			<div className='from-background absolute top-0 left-0 z-10 h-full w-5 bg-gradient-to-r to-transparent md:w-20' />
			<div className='from-background absolute top-0 right-0 z-10 h-full w-5 bg-gradient-to-l to-transparent md:w-20' />
			{children}
		</Carousel>
	);
}
