<template>
  <div>
    <Header />
    <h1>Welcome back, it's a pleasure to be of thou precense.</h1>
    <div>
      <button class="destroy_likes" @click="resetLikes">"Don't Click!"</button>
    </div>
    <div v-if="posts.length > 0" class="mainpage">
      <Post
        v-for="post in posts"
        :key="post.postID"
        :post="post"
        :incrementLikes="incrementLikes"
      />
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

    // Reset all likes to zero
    resetLikes() {
      this.posts.forEach((post) => {
        post.likes = 0;
      });
    },

    // Increment likes for a specific post
    incrementLikes(postID) {
      const post = this.posts.find((p) => p.postID === postID);
      if (post) {
        post.likes++;
      }
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style>
.mainpage {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
}

.destroy_likes {
  background: linear-gradient(to bottom, #500a0a, #ff0000);
  color: #000;
  border: none;
  padding: 20px 20px;
  cursor: pointer;
  font-size: 69px;
  border-radius: 128px;
  position: relative;
  box-shadow: 0px 8px 15px rgba(30, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.destroy_likes:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}

.destroy_likes:active {
  transform: scale(0.95);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}
</style>
