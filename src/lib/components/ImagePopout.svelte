<script>
	export let path = '';
	export let title = '';
	//export let expanded = false;
</script>

<a href={path} target="_blank" rel="noopener noreferrer">
	<div class="hover-glow">
		<img class="w-full md:w-64" src={path} alt={title} />
	</div>
</a>
<!--
{#if expanded}
	<div
		tabindex="-1"
		class="fixed inset-0 bg-gray-900 backdrop-blur-sm flex justify-center items-center z-50"
	>
		<div class="relative z-50 bg-gray-900 w-full">
			<div class="flex justify-between bg-slate-800 px-4 py-1 space-x-2">
				<button type="button" class="link" on:click={() => (expanded = false)}>
					<i class="bi bi-arrow-left" />
				</button>
				<h3>{title}</h3>
				<button type="button" class="link" on:click={() => (expanded = false)}>
					<i class="bi bi-x-lg" />
				</button>
			</div>
			<div class="h-screen flex justify-center">
				<img class="object-scale-down max-h-full" src={path} alt={title} />
			</div>
		</div>
	</div>
{:else}
	<button
		type="button"
		class="hover-glow"
		on:click={() => {
			expanded = true;
		}}
	>
		<img class="w-full md:w-64" src={path} alt={title} />
	</button>
{/if}

-->
