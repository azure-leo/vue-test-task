<script lang="ts" setup>
	const usernameRef = ref('')
	const passwordRef = ref('')

	const login = async () => {

	}
</script>

<template>
	<div class="flex items-center justify-center min-h-screen w-full">
		<div class="rounded p-6 w-1/4">
			<h1 class="font-bold text-center mb-6 text-2xl">Логин</h1>

			<form>
				<UiInput placeholder="Введите имя пользователя" type="name" />
			</form>
		</div>
	</div>
</template>

<style>
</style>