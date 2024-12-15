<template>
    <header>
      <nav class="nav-bar">
        <ul class="nav-list">
          <!-- <li class="nav-item"><router-link to="/main" class="nav-link">Main</router-link></li> -->
          <li class="nav-item"><router-link to="/signup" class="nav-link">Signup</router-link></li>
          <li class = "nav-item"><router-link to="/api/Allposts" class="nav-link">AllPosts</router-link></li>
          <!-- <li class = "nav-item"><router-link to="/api/contact" class="nav-link">Contact</router-link></li> -->
          <!-- <li class="nav-item"><router-link to="/api/addPost" class="nav-link">addpost</router-link></li> -->
          <li class="nav-item"><router-link to="/contact" class="nav-link">ContactPage</router-link></li>
        </ul>
        <div v-if="showElement"><button class="logout-button" type="button" @click="Logout">Log Out</button></div>
      </nav>
      
    </header>
  </template>
  
  <script>
  import auth from "../auth";

  export default {
    name: "Header",

    data() {
      return {
        showElement: false,
      };
    },

    async mounted() {
      // Await the result of the asynchronous function
      this.showElement = await auth.authenticated();
    },

    methods:{
    
      Logout() {
        fetch("http://localhost:3000/auth/logout", {
            credentials: 'include', //  Don't forget to specify this if you need cookies
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          this.$router.push("/login");

        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });

      },
    }
  };
  </script>
  
  <style>
  /* styling needs to go here!  */
  
  header {
    background-color: aliceblue;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 20px;
  }

  .nav-item {
    font-size: 18px;
    font-weight: bold;
  }  

  .nav-link {
    text-decoration: none;
    color: black;
    transform: color 0.3s;
  }

  .nav-link:hover {
    color: #0fb80c;
  }

  .logout-button{
  position: absolute;
  left: 90%;
  width: 80px;
  height: 30px;
  background-color: rgb(180, 241, 241);
  border-radius: 5px;
  border-color: #0fb80c;
  border-width: 2px;
  box-shadow: none;
}

.logout-button:hover{
  background-color: rgb(112, 209, 209);
}

  </style>
  