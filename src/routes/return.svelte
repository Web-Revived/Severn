<script lang="ts">
	import NavBar from '$lib/components/navigation/Bar.svelte';
	import Header from '$lib/global/HeaderHR.svelte';
	import MailToCard from '$lib/global/MailTo/Card.svelte';
	import Answers from '$lib/views/account/return/Answers.svelte';
</script>

<main>
	<section class="x-container pt-6">
		<NavBar dark />
	</section>

	<Header title="Returns and Exchanges">
		You got questions? we got answers for you. If you have any other query feel free to contact our <span
			class="text-hex-83612E">support team.</span
		>
	</Header>

	<Answers />

	<MailToCard />
</main>
