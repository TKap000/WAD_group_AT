<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <img :src="post.img" alt="Post image" />
    <p>
      <button @click="incrementLikes(post.postID)" class="like-btn">👍 {{ post.likes }}</button>
      | Author: {{ post.author }}
    </p>
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
    incrementLikes: Function,
  },
};
</script>

<style scoped>
.like-btn {
  background-color: #cd1f93;
  color: rgb(14, 14, 242);
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
}

.like-btn:hover {
  background-color: #0fb80c;
}

.like-btn:active {
  transform: scale(1.1);
}

</style>
