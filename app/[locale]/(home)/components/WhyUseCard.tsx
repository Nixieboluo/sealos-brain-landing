import { cva } from 'class-variance-authority';
import type React from 'react';
import { Card, CardContent, CardHeader } from '@/libs/components/ui/card';
import { cn } from '@/libs/utils/styling';

interface WhyUseCardProps {
	children: React.ReactNode;
	title: string;
	description: string;
	orientation: 'vertical' | 'horizontal';
}

const whyUseCardHeaderVariants = cva('z-10 m-0 flex bg-transparent p-0', {
	variants: {
		orientation: {
			vertical: 'justify-center -mb-32',
			horizontal: 'justify-start items-center absolute h-full left-0 aspect-square',
		},
	},
});

const whyUseCardContentVariants = cva('h-full border-none bg-gray-100 px-8 shadow-md', {
	variants: {
		orientation: {
			vertical: 'pt-36 pb-10',
			horizontal: 'py-10 ml-32 pl-20',
		},
	},
});

export function WhyUseCard({ children, title, description, orientation }: WhyUseCardProps) {
	return (
		<Card className='relative w-full flex-1 overflow-visible rounded-none border-none bg-transparent p-0 shadow-none'>
			<CardHeader className={cn(whyUseCardHeaderVariants({ orientation }))}>{children}</CardHeader>

			<CardContent className={cn(whyUseCardContentVariants({ orientation }))}>
				<h3
					className={cn('text-center text-xl font-semibold tracking-tight', {
						'text-start': orientation === 'horizontal',
					})}
				>
					{title}
				</h3>
				<p
					className={cn('mt-2 w-full text-center text-sm leading-normal text-gray-500', {
						'text-start': orientation === 'horizontal',
					})}
				>
					{description}
				</p>
			</CardContent>
		</Card>
	);
}
