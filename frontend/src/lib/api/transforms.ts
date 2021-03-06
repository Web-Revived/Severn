import type { ProductsApi, ProductItem } from '$lib/api/products'
import type { CategoriesApi, CategoryProps } from '$lib/api/categorys'
import { HOST } from '$lib/api/index'

type CategoryToProps = (CategoriesApi) => CategoryProps
export const TransformCategoryToProps: CategoryToProps = (cate: CategoriesApi) => ({
    category: cate.short_title,
    description: cate.short_description,
    button: cate.short_title,
    items: cate.products.map( prod => TransformProductsToItem(prod, cate) )
})

type ProductsToItem = (ProductsApi, CategoriesApi) => ProductItem
export const TransformProductsToItem: ProductsToItem = (prod: ProductsApi, cate: CategoriesApi) => ({
    id: prod.id,
    src: `${HOST}${prod.cover.url}`,
    category: cate.short_title,
    title: prod.title,
    price: prod.price
})