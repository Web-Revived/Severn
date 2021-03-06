interface MediaFormatsContent {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    width: number,
    height: number,
    size: number,
    path: number,
    url: string,
}

interface MediaFormats {
    thumbnail?: MediaFormatsContent,
    small?: MediaFormatsContent,
}

export interface Media {
    id: number,
    name: string,
    alternativeText: string,
    caption: string,
    width: number,
    height: number,
    formats: MediaFormats,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: string | null,
    provider: string,
    provider_metadata: string | null,
    created_at: string,
    updated_at: string,
}

export interface BaseApiResponse {
    id: number,
    published_at: string,
    created_at: string,
    updated_at: string,
}

// This is a work around a SvelteKit Endpoints can't 
// use interfaces for EndpointOutput Typing, All this does
// is convert a Interface to a type
export type Typify<T> = { [K in keyof T]: Typify<T[K]> };

export interface Cache<T> {
    dump: T[]
    lastUpdated: number
}

export const checkCache = async <T>(cache: Cache<T>, endpoint: string, interval = 3600000) => {
    const cacheDuration = Date.now() - (cache.lastUpdated ?? 0)
    if (cacheDuration >= interval) {
        cache.dump = await fetch(`${HOST}${endpoint}`)       
            .then( res => res.json() )
            .catch( e => {
                console.error(e);
                return null
            } )

        cache.lastUpdated = Date.now()
    }
}

export const HOST = "http://localhost:8081"