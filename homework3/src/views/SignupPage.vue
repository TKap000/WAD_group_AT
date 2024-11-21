<template>
  <div>
    <Header />
    <Signup />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Signup from "@/components/SignUp.vue";


export default {
  name: "SignupPage",
  components: {
    Header,
    Signup,
  },
};
</script>

<style>
/* Add main page styling here */
</style>
