import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    incrementLikes(state, postID) {
      const post = state.posts.find((post) => post.postID === postID);
      if (post) post.likes++;
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    fetchPosts({ commit }) {
      const posts = require('../../Data/postitused.json');
      commit('setPosts', posts);
    },
    incrementLikes({ commit }, postID) {
      commit('incrementLikes', postID);
    },
    resetLikes({ commit }) {
      commit('resetLikes');
    },
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
});
