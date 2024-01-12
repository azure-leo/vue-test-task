<template>
	<section class="grid-view" style="min-height: 100vh">
		<LayoutSidebar />
		<div class="bg-gray-100">
			<slot />
		</div>
	</section>
</template>

<style scoped>
	.grid-view {
		display: grid;
		grid-template-columns: 1fr 5fr;
		color:#c4dffa
		#308eed
		#0059b1
	}
</style>