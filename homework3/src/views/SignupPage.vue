<template>
  <div>
    <Header />
    <div>
      <Signup  class = "signuppage"/>
    </div>
    <Footer />
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
.signuppage {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
}
</style>
