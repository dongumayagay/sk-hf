import { pipeline } from '@xenova/transformers';

export const sentiment_classifier = await pipeline('sentiment-analysis');
