import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'frapiocov ─ developer';
	const description = "Hey 👋 I'm Pio, a developer";

	return {
		title,
		description,
		canonical: `https://frapiocov.github.io/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'frapiocov',
			url: `https://frapiocov.github.io/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://frapiocov.github.io/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '',
			site: '',
		},
		...props,
	};
}
