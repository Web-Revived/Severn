<script lang="ts">
	import Rating from '$lib/views/home/Rating.svelte';
	export let rating = 5;
</script>

<div
	class="feedback flex flex-wrap gap-5 text-1 items-center justify-center"
	p="x-10 md:x-20 lg:x-40 y-7"
	text="brown-1200 center"
	bg="white-300"
>
	<p>Postive Feedback</p>
	<Rating {rating} />
	<p>based on the recent 100+ reviews</p>
</div>

<style>
	@media only screen and (max-width: 768px) {
		.feedback {
			width: 100%;
			gap: 0.5rem;
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style>
