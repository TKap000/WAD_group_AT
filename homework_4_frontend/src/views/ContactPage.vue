<template>

  <div>
    <Header />
    <div class="contact">
      <h1>This is the contacts page, add content please.</h1>
    </div>
    
  </div>
  <br>
  <Footer />

</template>

<script>
import Header from "@/components/Header.vue";
// import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ContactPage",
  components: {
    Header,
    // Contact,
    Footer,
  },
};
</script>
