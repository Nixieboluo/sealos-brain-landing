import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { QuestionMarkIcon } from '@/libs/components/ui/sealos-icons';
import AiTranslatorImage from '../images/ai-translator.svg';
import NoCliffImage from '../images/no-cliff.svg';
import VisualOrchestrationImage from '../images/visual-orchestration.svg';
import { WhyUseCard } from './WhyUseCard';

const Cards = async ({ orientation }: { orientation: 'vertical' | 'horizontal' }) => {
	const t = await getTranslations('pages.home.why');

	return (
		<>
			<WhyUseCard
				title={t('features.aiTranslator.title')}
				description={t('features.aiTranslator.description')}
				orientation={orientation}
			>
				<Image
					src={AiTranslatorImage}
					alt={t('features.aiTranslator.imageAlt')}
				/>
			</WhyUseCard>
			<WhyUseCard
				title={t('features.visualOrchestration.title')}
				description={t('features.visualOrchestration.description')}
				orientation={orientation}
			>
				<Image
					src={VisualOrchestrationImage}
					alt={t('features.visualOrchestration.imageAlt')}
				/>
			</WhyUseCard>
			<WhyUseCard
				title={t('features.noCliff.title')}
				description={t('features.noCliff.description')}
				orientation={orientation}
			>
				<Image
					src={NoCliffImage}
					alt={t('features.noCliff.imageAlt')}
				/>
			</WhyUseCard>
		</>
	);
};

export async function WhySection() {
	const t = await getTranslations('pages.home.why');

	return (
		<section className='container mt-16 sm:mt-24 md:mt-36'>
			<h2 className='flex items-baseline text-4xl font-medium'>
				<span>
					<span className='text-blue-600'>{t('title.why')}</span>
					<span> {t('title.sealosBrain')}</span>
				</span>
				<QuestionMarkIcon className='ml-4 h-6 w-6 text-blue-600' />
			</h2>
			<div className='mt-2 text-gray-500'>{t('description')}</div>

			{/* Vertical cards */}
			<div className='mt-10 grid grid-cols-1 gap-6 sm:hidden md:grid md:grid-cols-3'>
				<Cards orientation='vertical' />
			</div>
			{/* Horizontal cards */}
			<div className='mt-10 hidden grid-cols-1 gap-6 sm:grid md:hidden'>
				<Cards orientation='horizontal' />
			</div>
		</section>
	);
}
