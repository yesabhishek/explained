import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Pegasi',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Cool Guides',
					items: [

						{ label: 'Svelte Development & Deployment', link: '/cool-guides/svelte/' },
					],
				},
				{
					label: 'Backend Development',
					items: [

						{ label: 'Django', link: '/backend/django/' },
						{ label: 'Express', link: '/backend/express-js/' },
						{ label: 'FastAPI', link: '/backend/fast-api/' },
						{ label: 'Go', link: '/backend/go-lang/' },
					],
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Frontend Development',
					items: [
						{ label: 'Svelte', link: '/frontend/svelte/' },
						{ label: 'React', link: '/frontend/react/' },
						{ label: 'Next', link: '/frontend/next/' },
						{ label: 'Vue', link: '/frontend/vue/' },
						{ label: 'Tailwind', link: '/frontend/tailwind/' },
						{ label: 'Animation', link: '/frontend/animation/' },
					],
				},
				{
					label: 'Cloud Services',
					items: [
						{ label: 'AWS', link: '/cloud-services/aws/' },
						{ label: 'Google Cloud Platform', link: '/cloud-services/google-cloud/' },
						{ label: 'Vercel', link: '/cloud-services/vercel/' },
						{ label: 'Supabse', link: '/cloud-services/supabase/' },
						{ label: 'Azure', link: '/cloud-services/azure/' },
					],
				},
				{
					label: 'Data Engineering',
					items: [
						{ label: 'Extract, transform & load', link: '/data-engineering/etl/' },
						{ label: 'Data Cleaning', link: '/data-engineering/data-cleaning/' },
						{ label: 'Excel', link: '/data-engineering/excel/' },
						{ label: 'Impact Analysis', link: '/data-engineering/impact-analysis/' },
					],
				},
			],
		}),
	],
});
