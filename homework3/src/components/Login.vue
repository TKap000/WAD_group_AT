<template>
    <div class="login">
      <h1>Login Page</h1>
      <form>

        <label for="email">Email: </label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email " />
        <br>

        <label for="password">Enter password: </label>
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          @change="$emit('update:password', $event.target.value)"
          id="password"
          placeholder="Password "
        >
        <button @click="showPassword = !showPassword">
          {{ showPassword ? 'Hide password' : 'Show password' }}
        </button>

        <br>
        <button type="submit" @click.prevent="submitForm">Log in</button>
        <p>Don't have an account?</p>
        <button type="button" @click.prevent="goToSignup">Sign Up</button>
      </form>
      
    </div>
</template>

<script setup>
  const emit = defineEmits([
  'update:password',
])
</script>
  
<script>
  import { ref, } from 'vue'

  const password = ref('')
  const showPassword = ref(false)
  
  export default {
    name: "SignUp",
    data() {
      return {
        email: "",
        password: "",
        showPassword: false,
      };
    },
    methods: {
      submitForm() {
        if (validity && this.name != "" && this.email != "") {
          alert(`Logging in`);
          this.$router.push({ path: 'main' })
        }
        if(!this.name || !this.email ){
          alert(`You need to fill in a name and an email!`);
        }
        if(!validity){
          alert(`Password conditions not met!`);
        }
      },

      goToSignup(){
        this.$router.push({ path: 'signup' });
      },
    },
  };


</script>
  
<style scoped>

.signup {
  display: flex;
  align-self: center;
  flex-direction: column;
}

form {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  width: 50%
}

label {
  margin-bottom: 8px;
  font-size: 16px;
}

input {
  margin-bottom: 12px;
  padding: 8px;
  font-size: 16px;
}

button {
  margin-bottom: 12px;
  width: 100px;
}

.requirements {
  font-weight: bold;
}

.is-success {
  color: #96CA2D;
  /* visibility: hidden; */
}

.is-error {
  color: #BA3637;
}
</style>