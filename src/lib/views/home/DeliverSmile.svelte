<script lang="ts">
	import Button from '$lib/global/Button.svelte';
</script>

<section
	class="wrapper container section relative w-full gap-7.5 items-center justify-center  flex flex-col text-center <sm:gap-4"
>
	<img
		class="CircleImg w-24.5 h-24.5"
		pos="absolute -left-27px lg:left-101px top-63px lg:top-123px"
		src="/images/candel_hero.jpg"
		alt="Candle being burned"
	/>
	<img
		class="CircleImg w-13.5 h-13.5"
		pos="absolute left-12px lg:left-321px top-227px lg:top-337px"
		src="/images/CircleImg-1.jpg"
		alt="Candle being burned"
	/>
	<img
		class="CircleImg w-22 h-22"
		pos="absolute -right-20px lg:right-162px top-220px lg:top-191px"
		src="/images/About_Thumbnail.png"
		alt="Candle being burned"
	/>

	<h1 class="text-1 <sm:text-13px text-brown-1200 z-2">THE TRUE MAGIC IS IN OUR BLEND</h1>
	<h2 class="heading-2 <sm:text-xl max-w-131.5 <sm:max-w-80.5 md:mb-12.5 text-black-600 z-2">
		Timeless candles, with scents to lift the mood, and made with the best, clean ingredients.
	</h2>

	<div class="z-2">
		<Button href="/shop" outline>Shop Now</Button>
	</div>
</section>

<style lang="scss">
	.CircleImg {
		@apply rounded-full lg:w-33.5 lg:h-33.5 z-1;
	}

	.wrapper {
		overflow-x: hidden;
		overflow-y: hidden;
	}

	@media only screen and (min-width: 767.9px) {
		.wrapper {
			padding-bottom: 0;
		}
	}
	
	@media only screen and (max-width: 639px) {
		img {
			display: none;
		}
	}

	@media only screen and (max-width: 425px) {
		section {
			img:nth-child(1) {
				top: 2rem;
			}
			img:nth-child(2) {
				top: unset;
				left: 0;
				bottom: 2.5rem;
			}
			img:nth-child(3) {
				top: 0;
			}
		}
	}
</style>
