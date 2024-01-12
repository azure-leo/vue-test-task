import { useAuthStore } from "~/store/auth.store";

const store = useAuthStore()

const loggedIn = store.isAuth;

export default defineNuxtRouteMiddleware((to, from) => {
	if(to.path !== '/login' && !loggedIn) {
		return navigateTo('/login')
	}
})