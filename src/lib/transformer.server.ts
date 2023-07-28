import { pipeline } from '@xenova/transformers';

// export const sentiment_classifier = await pipeline('sentiment-analysis', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');
export const summarizer = await pipeline('summarization', 'Xenova/distilbart-cnn-6-6');