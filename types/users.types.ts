export interface IBaseField {
	$id: string;
}

export interface IUser extends IBaseField {
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}


export interface IPost extends IBaseField {
	userId: number;
	title: string;
	body: string;
}