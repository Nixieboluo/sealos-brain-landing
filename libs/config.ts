import 'server-only';

/**
 * Server only config file for the site.
 *
 * ? You should render all components on the server side and then pass them to the client components.
 *
 * @example
 * // Importing this file
 * import { Config } from '@/libs/config';
 */
export const Config = {
	pages: {
		home: {
			cta: {
				buttonLink: 'https://forms.sealos.in/form/T0MLe2tf',
			},
		},
	},
} as const;
