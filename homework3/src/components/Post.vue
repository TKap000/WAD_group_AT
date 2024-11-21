<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <!-- Use post.img directly since the path is absolute -->
    <img :src="post.img" alt="Post image" />
    <p>Author: {{ post.author }} | Likes: {{ post.likes }}</p>
    <ul>
      <li v-for="comment in post.comments" :key="comment.commentID">
        <strong>{{ comment.author }}:</strong> {{ comment.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>

<style>
/* Add post styling here */
</style>
