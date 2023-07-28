import { classifier } from '$lib/transformer';
import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
    const text = url.searchParams.get('text')
    if (!text) return {}
    return {
        streamed: {
            result: await classifier(text)
        }
    }
}) satisfies PageLoad;
