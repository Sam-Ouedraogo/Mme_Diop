import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['necklaces', 'rings', 'earrings', 'bracelets', 'sets']),
    price: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    available: z.boolean().default(true),
  }),
});

const settings = defineCollection({
  type: 'content',
  schema: z.object({
    // site.md
    businessName: z.string().optional(),
    tagline: z.string().optional(),
    whatsapp: z.string().optional(),
    address: z.string().optional(),
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    email: z.string().optional(),
    seoDescription: z.string().optional(),
    // about.md
    title: z.string().optional(),
    subtitle: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    years: z.number().optional(),
    pieces: z.number().optional(),
    clients: z.number().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    review: z.string(),
    rating: z.number().min(1).max(5).default(5),
    photo: z.string().optional(),
  }),
});

export const collections = { products, settings, testimonials };
