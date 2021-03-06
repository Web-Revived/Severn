import { HOST } from "$lib/api/index"
import type { BaseApiResponse, Media } from '$lib/api/index'
import type { BaseProducts, ProductItem } from '$lib/api/products'

export interface BaseCategory extends BaseApiResponse {
    short_title: string,
    short_description: string,
    long_title: string,
    long_description: string,
    thumbnail: Media,
    icon: Media,
}

interface CategoryProducts extends BaseProducts {
    category: number
}

export interface CategoriesApi extends BaseCategory {
    products: CategoryProducts[]
}

// This is what our components expect
export interface CategoryProps {
    category: string,
    description: string,
    button: string,
    items: ProductItem[]
}

export const findOneByID: (number) => Promise<CategoriesApi> = async (id: number) => {
    return await fetch(`${HOST}/categories/${id}`).then( res => res.json() )
}
export const findOneByTitle: (string) => Promise<CategoriesApi> = async (title: string) => {
    return (await fetch(`${HOST}/categories?short_title=${title}`).then( res => res.json() ))[0]
}

export const findAll: () => Promise<CategoriesApi[]> = async () => {
    return await fetch(`${HOST}/categories`).then( res => res.json() )
}