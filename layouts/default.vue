<script lang="ts" setup>
	import { useAuthStore } from "~/store/auth.store"

	const store = useAuthStore()
	const router = useRouter()

	onMounted(async() => {
		try {
			console.log('is store authenticated?', store.isAuth)
			if(store.isAuth) {
				store.set({username: 'user', status: true})
			}
		} catch(error) {
			router.push('/login')
		}
	})
</script>

<template>
	<section :class="{grid: store.isAuth}" style="min-height: 100vh">
		<LayoutSidebar v-if="store.isAuth" />
		<div class="bg-gray-100">
			<slot />
		</div>
	</section>
</template>

<style scoped>
	.grid {
		display: grid;
		grid-template-columns: 1fr 5fr;
		color:#c4dffa
		#308eed
		#0059b1
	}
</style>