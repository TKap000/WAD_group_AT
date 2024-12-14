<template>

  <div>
    <Header />
    <div class="contact">
      <h1>This contacts page is meant for you</h1>
      <p>Feel free to reach out to us at any time</p>
      <p>Our email is:
        <a href="mailto:">
          blahblahblah@blah.bla
        </a>
      </p>
      <p>Our phone number is:
        <a href="tel:">
          123-456-7890
        </a>
      </p>
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
