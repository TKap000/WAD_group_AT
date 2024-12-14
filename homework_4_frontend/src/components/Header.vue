<template>
    <header>
      <nav class="nav-bar">
        <ul class="nav-list">
          <!-- <li class="nav-item"><router-link to="/main" class="nav-link">Main</router-link></li> -->
          <li class="nav-item"><router-link to="/signup" class="nav-link">Signup</router-link></li>
          <li class = "nav-item"><router-link to="/api/Allposts" class="nav-link">AllPosts</router-link></li>
          <li class = "nav-item"><router-link to="/api/contact" class="nav-link">Contact</router-link></li>
          <!-- <li class="nav-item"><router-link to="/api/addPost" class="nav-link">addpost</router-link></li> -->
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
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
  
  </style>
  