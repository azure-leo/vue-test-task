<script lang="ts" setup>
	import { useQuery } from '@tanstack/vue-query' 
	import { getAllUsers } from '../../lib/API'
	import type { IUser } from '~/types/users.types'

	const { isLoading, data: users } = useQuery({
		queryKey: ['users'],
		queryFn: () => getAllUsers() as unknown as IUser[]
	})

</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">Пользователи</h1>
		<UiTable>
			<UiTableHeader>
				<UiTableRow>
					<UiTableHead class="w-[100px]">Идентификатор</UiTableHead>
					<UiTableHead class="w-[200px]">Имя</UiTableHead>
					<UiTableHead class="w-[200px]">Электронная почта</UiTableHead>
					<UiTableHead class="w-[200px]">Телефон</UiTableHead>
				</UiTableRow>
			</UiTableHeader>
			<UiTableBody>
				<UiTableRow 
					v-for="user in users"
					:key="user.$id"
				>
					<UiTableCell>
						<NuxtLink :href="/users/+user.id">
							{{ user.id }}
						</NuxtLink>
					</UiTableCell>
					<UiTableCell>
						{{ user.name }}
					</UiTableCell>
					<UiTableCell>
						{{ user.email }}
					</UiTableCell>
					<UiTableCell>
						{{ user.phone }}
					</UiTableCell>
				</UiTableRow>
			</UiTableBody>
		</UiTable>
	</div>
</template>~/types/users.types