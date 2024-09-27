import { defineCollection, z } from 'astro:content';

export const collections = {
	repertoire: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	termine: defineCollection({
		type: 'data',
		schema: z.object({
			datum: z.coerce.date(),
			vorstellung: z.string(),
			rolle: z.string(),
		}),
	}),
	fotos: defineCollection({
		type: 'data',
		schema: z.object({
			vorstellung: z.string(),
			rolle: z.string(),
			fotograf: z.string(),
			publishDate: z.coerce.date(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
