import { classifier } from '$lib/transformer.server';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const text = url.searchParams.get('text')
    if (!text) return {}
    return {
        streamed: {
            result: await classifier(text)
        }
    }
}) satisfies PageServerLoad;
