import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '🍟Nerd Nuggets',
			defaultLocale: 'en',
			social: {
				github: 'https://github.com/yesabhishek/Nerd Nuggets',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Cool Guides',
					items: [

						{ label: 'Sveltekit under 30 mins', link: '/cool-guides/svelte' },
						{ label: 'Create PYPI library', link: '/cool-guides/pypi' },
					],
				},
				{
					label: 'Backend Development',
					items: [
						{ label: 'Understand Django', link: '/backend/django/' },
						{ label: 'Configure Django with Postgres', link: '/backend/django-with-postgres/' },
						
					],
					autogenerate: { directory: 'reference' },
				}
			],
		}),
	],
});
