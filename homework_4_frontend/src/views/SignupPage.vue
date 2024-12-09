<template>
  <div>
    <Header />
    <div>
      <Signup  class = "signuppage" />
    </div>
    
  </div>
  <br>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Signup from "@/components/SignUp.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SignupPage",
  components: {
    Header,
    Signup,
    Footer,
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
