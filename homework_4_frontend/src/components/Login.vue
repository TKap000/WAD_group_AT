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
        <button type="submit" @click.prevent="LogIn">Log in</button>
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

        LogIn() {
        var data = {
          email: this.email,
          password: this.password
        };
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            credentials: 'include', // Specifying that we need cookies
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
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

button{
background-color: rgb(180, 241, 241);
border-radius: 5px;
border-color: #0fb80c;
border-width: 2px;
box-shadow: none;
}

button:hover{
background-color: rgb(112, 209, 209);
}
</style>