<script lang="ts">
	import ItemCarosel from '$lib/global/ItemCarosel.svelte';
	import type { Product } from '@chec/commerce.js/types/product';

	interface Category {
		category: string;
		description: string;
		button: { text: string; href: string };
		products: Product[];
	}

	export let category: Category;
</script>

<section class="container section w-full flex flex-col ">
	<ItemCarosel
		button={category.button.text}
		href={category.button.href}
		category={category.category}
		description={category.description}
		items={category.products}
	/>
</section>
