import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

// Import partner images
import affineLogo from '../images/partners/affine.svg';
import anthropicLogo from '../images/partners/anthropic.svg';
import appsmithLogo from '../images/partners/appsmith.svg';
import bytebaseLogo from '../images/partners/bytebase.svg';
import cronicleLogo from '../images/partners/cronicle.svg';
import fastgptLogo from '../images/partners/fastgpt.svg';
import githubLogo from '../images/partners/github.svg';
import jetbrainsLogo from '../images/partners/jetbrains.svg';
import openaiLogo from '../images/partners/openai.svg';
import tiktokLogo from '../images/partners/tiktok.svg';

export async function PartnersSection() {
	const t = await getTranslations('pages.home.partners');

	// Array of partner logos
	const partnerLogos = [
		{ logo: affineLogo, name: 'Affine' },
		{ logo: anthropicLogo, name: 'Anthropic' },
		{ logo: appsmithLogo, name: 'Appsmith' },
		{ logo: bytebaseLogo, name: 'Bytebase' },
		{ logo: cronicleLogo, name: 'Cronicle' },
		{ logo: fastgptLogo, name: 'FastGPT' },
		{ logo: githubLogo, name: 'GitHub' },
		{ logo: jetbrainsLogo, name: 'JetBrains' },
		{ logo: openaiLogo, name: 'OpenAI' },
		{ logo: tiktokLogo, name: 'TikTok' },
	];

	return (
		<section className='group relative container mt-16 sm:mt-24 md:mt-36'>
			<div className='grid grid-cols-2 gap-16 group-hover:blur-md sm:grid-cols-5'>
				{partnerLogos.map((partner) => (
					<div
						key={partner.name}
						className='flex flex-col items-center justify-center'
					>
						<div className='flex h-12 items-center justify-center'>
							<Image
								src={partner.logo}
								alt={partner.name}
								width={0}
								height={48}
								className='h-full w-auto object-contain'
							/>
						</div>
					</div>
				))}
			</div>

			<div className='absolute inset-0 z-10 -m-5 flex items-center justify-center bg-gray-50/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
				<span className='text-center text-4xl font-semibold'>
					{t('overlay.text')}
					<span className='text-blue-600'>{t('overlay.emphasis-text')}</span>
				</span>
			</div>
		</section>
	);
}
