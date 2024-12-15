<!-- AllPosts.vue -->
<template>
  <div>
    <Header />
    
    <div class="content-wrapper">
      <aside class="sidebar-left">
      </aside>
    
    <div class="AllPosts">
      <div id="post-list">
        <h1>All Posts</h1>
        <ul>
          <div class="item" v-for="post in posts" :key="post.id">
            <!-- Use router-link for internal navigation -->
            <router-link class="singlepost" :to="'/api/apost/' + post.id">
              <div class="post-container">
              <span class="datetime"> {{ post.datetime }}</span><br />
              <br>
              <span class="title"><b>Title:</b> {{ post.title }}</span><br />              
              <span class="body"><b>Body:</b> {{ post.body }}</span><br />
              <span class="url"><b>Url:</b> {{ post.urllink }}</span><br />
              <br>
              </div>
            </router-link>
          </div>
        </ul>
        <!-- Add Post Button -->
        <div class="button-container">
          <router-link to="/api/addPost" class="add-post-link">Add New Post</router-link>
          <button @click="deleteAllPosts" class="delete-all-posts-link">Delete All Posts</button>
        </div>
      </div>
    </div>

    <aside class="sidebar-right">

      </aside>
    </div>
    <Footer />
  </div>
</template>



<script>

import Header from "@/components/Header.vue";
import Login from "@/components/Login.vue";
import auth from "@/auth";
import Footer from "@/components/Footer.vue";
export default {
  name: "AllPosts",
  components: {
    Header,
    // Login,
    Footer,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      // You should remember how Fetch API works
      // fetch is a GET request unless stated otherwise. Therefore, it will fetch all posts from the database
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    deleteAllPosts() {
      // using Fetch - delete method - deletes all posts
      fetch(`http://localhost:3000/api/posts/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          // redirect to /allposts view
          this.$router.push("/api/Allposts");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");

      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  },
  mounted() {
    // call fetchPosts() when this element (AllPosts) mounts 
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
a {
  text-decoration: none;
}
.AllPosts{
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 50%;
  border-radius: 20px;
  align-items: center;
  
}
.post-container:hover {
  /*text-decoration: underline;*/
  background-color: rgb(118, 190, 150);
}
.datetime{
  position:sticky;
  right: 90%;
}
.item {
  background: rgb(189, 212, 199);
  margin-bottom: 5px;
  padding: 3px 5px;
  border-radius: 10px;
  width: auto;
  align-self: center;
}

/* Styling for the posts list container */

#post-list {
  background: #6e8b97;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 80%;
  border-radius: 20px;
  align-items: center;
}

/*screen adjust*/
@media (max-width: 700px) {
  #post-list {
  background: #6e8b97;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 80%;
  border-radius: 20px;
  align-items: center;
}
}


/* Remove default list styling */
#post-list ul {
  padding: 0;
}

/* Button container styling */
.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

/* Add New Post and Delete All Posts buttons styling */
.add-post-link,
.delete-all-posts-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0a7a8c;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}

/*screen adjust*/
@media (max-width: 500px) {
  .add-post-link,
  .delete-all-posts-link {
    width: 100px;
    height: 70px;
    font-size: 10px;
  }
}

.delete-all-posts-link {
  margin-left: 20px;
}

.add-post-link:hover,
.delete-all-posts-link:hover {
  background-color: #095e73;
}

</style>