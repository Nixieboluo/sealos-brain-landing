import { Globe } from 'lucide-react';
import 'server-only';
import { siDiscord, siX } from 'simple-icons';

/**
 * Server only config file for the site.
 *
 * ? You should render all components on the server side and then pass them to the client components.
 *
 * @example
 * // Importing this file
 * import { Config } from '@/libs/config';
 */
export const Config = (() => {
	// For the editor plugin to recognize i18n keys
	const t = <T,>(key: T) => key;

	return {
		pages: {
			home: {
				hero: {
					tryNowLink: 'https://usw.sealos.io/?openapp=system-brain',
				},
				cta: {
					buttonLink: 'https://forms.sealos.in/form/T0MLe2tf',
				},
			},
		},
		components: {
			navbar: {
				contactLink: 'https://sealos.io/contact',
				getStartedLink: 'https://usw.sealos.io/?openapp=system-brain',
				communityItems: [
					{
						name: 'discord',
						icon: (
							<svg
								role='graphics-symbol'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-full'
							>
								<path d={siDiscord.path} />
							</svg>
						),
						titleI18nKey: t('components.navbar.community.discord.title'),
						descriptionI18nKey: t('components.navbar.community.discord.description'),
						link: 'https://discord.gg/kWqbpstw6M',
					},
					{
						name: 'twitter',
						icon: (
							<svg
								role='graphics-symbol'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-full'
							>
								<path d={siX.path} />
							</svg>
						),
						titleI18nKey: t('components.navbar.community.twitter.title'),
						descriptionI18nKey: t('components.navbar.community.twitter.description'),
						link: 'https://x.com/Sealos_io',
					},
					{
						name: 'community',
						icon: <Globe className='size-full' />,
						titleI18nKey: t('components.navbar.community.community.title'),
						descriptionI18nKey: t('components.navbar.community.community.description'),
						link: 'https://github.com/labring/sealos',
					},
				],
			},
		},
	} as const;
})();
