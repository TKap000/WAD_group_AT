// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [], // Define posts in state
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts; // Update posts in the state
    },
  },
  actions: {
    fetchPosts({ commit }) {
      // Simulate fetching posts (replace with your API call if necessary)
      const posts = require('../../Data/postitused.json');
      commit('setPosts', posts);
    },
  },
  getters: {
    allPosts(state) {
      return state.posts; // Getter for posts
    },
  },
});
