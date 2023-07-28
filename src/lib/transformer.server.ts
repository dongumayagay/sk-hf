import { pipeline } from '@xenova/transformers';

export const classifier = await pipeline('sentiment-analysis');