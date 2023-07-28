import { summarizer } from '$lib/transformer.server';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const text = url.searchParams.get('text')
    if (!text) throw error(400, 'provide "text" query params')
    const result = await summarizer(text)
    return json({ text, ...result[0] })
    return new Response('summarize')
};