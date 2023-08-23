import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { pipeline } from '@xenova/transformers';

const summarizer = await pipeline('summarization',"Xenova/distilbart-cnn-6-6");

export const GET: RequestHandler = async ({ url }) => {
    const text = url.searchParams.get('text')
    if (!text) throw error(400, 'provide "text" query params')
    const result = await summarizer(text)
    return new Response(result[0].summary_text)
};