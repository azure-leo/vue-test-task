import axios from 'axios'
import type { IPost } from '~/types/users.types';

const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
})

export const getAllUsers = async () => {
	const { data } = await api.get('/users');
	return data;
}

export const getUserPosts = async (userId: string) => {
	const { data } = await api.get('/posts')
	const userPosts = data.filter((post: IPost) => {
		return post.userId === parseInt(userId)
	})
	return userPosts
	// 	.then(response => {
	// 		const userPosts = response.data.filter((post) => {
	// 			return post.userId === userId
	// 		})
	// 	})
	// 	.catch(error => {
	// 		console.log('Error fetching data: ', error)
	// 	})
}