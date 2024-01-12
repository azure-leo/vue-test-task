<script lang="ts" setup>
	import { useQuery } from '@tanstack/vue-query' 
	import { getAllUsers, getUserPosts } from '../../lib/API'
	import type { IPost, IUser } from '~/types/users.types'

	const route = useRoute()
	const userId = route.params.id as string

	const { isLoading, data: posts } = useQuery({
		queryKey: ['userPosts', userId],
		queryFn: () => getUserPosts(userId) as unknown as IPost[]
	})

</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">Посты пользователя {{ userId }}</h1>
		<UiCard class="w-[350px]" v-for="post in posts"
			:key="post.id">
			<UiCardHeader>
				<UiCardTitle>{{ post.title }}</UiCardTitle>
			</UiCardHeader>
			<UiCardContent>
				{{ post.body }}
			</UiCardContent>
		</UiCard>
	</div>
</template>