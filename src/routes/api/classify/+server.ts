// import { sentiment_classifier } from '$lib/transformer.server';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { pipeline } from '@xenova/transformers';

const sentiment_classifier = await pipeline('sentiment-analysis', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');

export const GET: RequestHandler = async ({ url }) => {
    const text = url.searchParams.get('text')
    if (!text) throw error(400, 'provide "text" query params')
    const result = await sentiment_classifier(text)
    return json({ text, ...result[0] })
};