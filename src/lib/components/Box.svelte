<script lang="ts">
	export let title;
</script>

<div class="box">
	{#if title}
		<h3 class="box-title">{title}</h3>
	{/if}
	<slot />
</div>
