import { getTranslations } from 'next-intl/server';
import { Button } from '@/libs/components/ui/button';
import { RightArrow } from '@/libs/components/ui/sealos-icons';
import { ShinyInput } from '@/libs/components/ui/shiny-input';
import { Config } from '@/libs/config';

export async function Hero() {
	const t = await getTranslations('pages.home.hero');

	return (
		<section className='relative container mx-auto px-4 py-16 md:py-24'>
			<h1 className='text-3xl leading-tight font-medium md:text-4xl lg:text-5xl'>
				<div>
					<span>{t('title.meet')} </span>
					<span className='text-blue-600'>{t('title.sealosBrain')}</span>
				</div>
				<div>{t('title.subtitle')}</div>
			</h1>
			<p className='mt-4 text-lg font-normal text-gray-500 lg:text-xl'>{t('description')}</p>

			<div className='mt-10 flex flex-wrap items-center gap-4 sm:mt-12 md:flex-nowrap'>
				<ShinyInput
					inputProps={{
						placeholder: t('input.placeholder'),
					}}
				/>
				<Button
					variant='ghost'
					className='border-foreground h-14 gap-6 rounded-full border bg-transparent px-6 pr-2 text-xl shadow-none backdrop-blur-sm'
					asChild
				>
					<a href={Config.pages.home.hero.tryNowLink}>
						<span>{t('button.tryNow')}</span>
						<div className='bg-foreground flex aspect-square h-10 w-10 items-center justify-center rounded-full text-white'>
							<RightArrow className='size-6' />
						</div>
					</a>
				</Button>
			</div>
		</section>
	);
}
