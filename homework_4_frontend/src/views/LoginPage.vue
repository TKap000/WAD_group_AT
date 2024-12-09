<template>
    <div>
      <Header />
      <div>
        <Login  class = "login" />
      </div>
      
    </div>
    <br>
    <Footer />
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Login from "@/components/Login.vue";
  import Footer from "@/components/Footer.vue";
  
  export default {
    name: "LoginPage",
    components: {
      Header,
      Login,
      Footer,
    },
  };
  </script>
  
  <style>
  .login {
    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: column;
  }
  </style>
  