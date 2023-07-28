<script lang="ts">
	import { page } from '$app/stores';
	export let data;
</script>

<div>
	<main>
		<form>
			<input type="text" name="text" id="" placeholder="enter text here" />
			<button type="submit">classify</button>
		</form>

		{#await data.streamed then data}
			{#if data?.result}
				<section>
					<i>
						{$page.url.searchParams.get('text')}"
					</i>
					<br />
					<b class={`${data.result[0].label == 'POSITIVE' ? 'positive' : 'negative'}`}>
						{(parseFloat(data.result[0].score) * 100).toFixed(2)}%
						{data.result[0].label}
					</b>
				</section>
			{/if}
		{/await}
	</main>
</div>

<style>
	div {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.positive {
		color: white;
		background-color: green;
	}
	.negative {
		color: white;
		background-color: red;
	}
	section {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 1rem 0.5rem;
	}
	b {
		padding: 1rem 0rem;
		border-radius: 9999px;
	}
</style>
