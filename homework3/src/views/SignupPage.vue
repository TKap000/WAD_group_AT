<template>
    <div>
      <h1>Signup Page</h1>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" placeholder="Enter your name" />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email" />
  
        <button type="submit" @click.prevent="submitForm">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignupPage",
    data() {
      return {
        name: "",
        email: "",
      };
    },
    methods: {
      submitForm() {
        alert(`Signed up with Name: ${this.name}, Email: ${this.email}`);
      },
    },
  };
  </script>
  