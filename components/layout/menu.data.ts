export interface IMenuItem {
	name: string;
	url: string;
	icon: string;
}

export const MENU_DATA: IMenuItem[] = [
	{
		name: 'Documentation',
		url: '/',
		icon: 'akar-icons:dashboard',
	},
	{
		name: 'Пользователи',
		url: '/users',
		icon: 'basil:user-outline',
	}
]