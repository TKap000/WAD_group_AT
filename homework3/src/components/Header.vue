<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/main">Main</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/signup">Signup</router-link></li>
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
  </style>
  