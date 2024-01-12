<script setup>
	import { MENU_DATA } from './menu.data';


</script>

<template>
	<div class="py-7">
		<div class="mb-3 px-5">Меню</div>
		<NuxtLink 
			class="MenuLink flex items-center py-2 px-3 w-full font-medium text-base leading-6 hover:shadow transition-all"
			v-for="item in MENU_DATA"
			:key="item.name"
			:to="item.url"
		>
			<div class="menu-item-wrapper px-3">
				<Icon :name="item.icon" class="mr-3"/>
				<span class=""> {{ item.name }}</span>
			</div>

		</NuxtLink>
	</div>
</template>

<style scoped>
	.MenuLink:hover {
		background-color: #c4dffa;
		color: #308eed;
		font-weight: 600;
	}
	.MenuLink {
		color: rgb(104, 104, 104);
	}
	.menu-item-wrapper {

	}
</style>