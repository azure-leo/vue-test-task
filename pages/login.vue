<script lang="ts" setup>
	import { useAuthStore } from '~/store/auth.store';

	const usernameRef = ref('')
	const passwordRef = ref('')

	const router = useRouter()
	const authStore = useAuthStore()

	const login = async () => {
		if(usernameRef.value === 'user' && passwordRef.value === 'password') {
			authStore.set({
				username: 'user',
				status: true,
			})
			await router.push('/')
			console.log('user is: ', authStore.user)
		}
		usernameRef.value = ''
		passwordRef.value = ''

		
	}
</script>

<template>
	<div class="flex items-center justify-center min-h-screen w-full">
		<div class="rounded p-6 w-1/4">
			<h1 class="font-bold text-center mb-6 text-2xl">Логин</h1>

			<form>
				<UiInput placeholder="Введите имя пользователя" type="name" class="mb-3" v-model="usernameRef"/>

				<UiInput placeholder="Введите пароль" type="password" class="mb-3" v-model="passwordRef"/>
				<div class="flex items-center justify-center">
					<UiButton @click="login" style="background-color: #308eed" type="button">Войти</UiButton>
				</div>
			</form>
		</div>
	</div>
</template>

<style>
</style>