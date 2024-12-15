<template>
  <div>
    <!-- Header Component -->
    <Header />
    
    <!-- Add Post Form -->
    <div class="form">
      <h3>Add a Post</h3>
      <label for="title">Title: </label>
      <input name="title" type="text" id="title" required v-model="post.title" />
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <label for="urllink">Url: </label>
      <input name="urllink" type="text" id="urllink" required v-model="post.urllink" />
      <button @click="addPost" class="addPost">Add Post</button>
    </div>
    
    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "AddPost",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
        urllink: "",
        datetime: "",
      },
    };
  },
  methods: {
    addPost() {
      var currentdate = new Date(); 
      var h = (currentdate.getHours()).toString().padStart(2, "0");
      var m = (currentdate.getMinutes()).toString().padStart(2, "0");
      var s = (currentdate.getSeconds()).toString().padStart(2, "0");
      var datetime = currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear() + " @ "  
                + h + ":"  
                + m + ":" 
                + s;

      var data = {
        title: this.post.title,
        body: this.post.body,
        urllink: this.post.urllink,
        datetime: datetime,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        // redirect to /allposts view
        this.$router.push("/api/Allposts");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}
label {
  color: rgb(8, 110, 110);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
}
button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
</style>

