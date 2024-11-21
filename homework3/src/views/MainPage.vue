<template>
  <div>
    <Header />
    <h1>Main Page</h1>
    <div v-if="posts.length > 0">
      <Post v-for="post in posts" :key="post.postID" :post="post" />
    </div>
    <div v-else>
      <p>Loading posts...</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";

export default {
  name: "MainPage",
  components: {
    Header,
    Footer,
    Post,
  },
  computed: {
    ...mapGetters(["allPosts"]),
    posts() {
      return this.allPosts;
    },
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style>
/* Add main page styling here */
</style>
