import { defineStore } from 'pinia';

export interface Post {
	id: string;
	title: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface PostState {
	posts: Post[] | undefined[];
}

const state = (): PostState => ({
	posts: []
});

const getters = () => {
	getById: (state: PostState) => (id: string) => {
		return state.posts.find(post => post.id === id);
	},
	getOrderedPosts: (state: PostState) => state.posts.sort((a: Post, b: Post) => a.createdAt.getMilliseconds() - b.createdAt.getMilliseconds())
}

const actions = () => {

}

export const usePostStore = defineStore('postStore', {
	state,
	getters,
	actions
})