<template>
    <div class="Signup">
      <h1>Signup Page</h1>
      <form>
        <label for="name">Name: </label>
        <input type="text" id="name" v-model="name" placeholder="Enter your name " />
        <br>

        <label for="email">Email: </label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email " />
        <br>

        <label for="password">Enter password: </label>
        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          @focus="magic_flag = true"
          @blur="magic_flag = false"
          @change="$emit('update:password', $event.target.value)"
          id="password"
          placeholder="Password "
        >
        <button @click="showPassword = !showPassword">
          {{ showPassword ? 'Hide password' : 'Show password' }}
        </button>

        <br>
        <button type="submit" @click.prevent="submitForm">Sign Up</button>
        <br>
        <p>Already have an account?</p>
        <button type="button" @click="goToLogin">Log In</button>
      </form>
      <ul v-if="magic_flag" class="requirements">
        
        <li v-for="(requirement, key) in passwordRequirements"
            :key="key"
            :class="requirement.predicate ? 'is-success' : 'is-error'"
            :hidden="requirement.predicate ? true : false"
            
            >{{ requirement.name }}
        </li>
      </ul>
      
    </div>
</template>

<script setup>
  const emit = defineEmits([
  'update:password',
])

// single value for checking the validity of all parts
watch(passwordRequirements, () => {
    validity = passwordRequirements.value.reduce((accumulator, passreq) =>  {
      return accumulator && passreq.predicate
    }, true)
  console.log(validity)
})
</script>
  
<script>
  import { computed, ref, watch } from 'vue'

  const password = ref('')
  const showPassword = ref(false)
  var validity = false
  const magic_flag = ref(false)
  
  const passwordRequirements = computed(() => ([
    {
      name: 'Password must contain uppercase letters',
      predicate: password.value.toLowerCase() !== password.value,
    },
    {
      name: 'Password must contain at least 2 lowercase letters',
      predicate: /[a-z]{2,}/.test(password.value),
    },
    {
      name: 'Password must contain at least 1 number',
      predicate: /\d/.test(password.value),
    },
    {
      name: 'Password must start with an uppercase letter',
      predicate: /[A-Z]/.test(password.value[0]),
    },
    {
      name: 'Password must include _ ',
      predicate: /[_]/.test(password.value),
    },
    {
      name: 'Password must be at least 8 characters long',
      predicate: password.value.length >= 8,
    },
    {
      name: 'Password must be less than 15 characters long',
      predicate: password.value.length < 15,
    }
  ]))

  export default {
    name: "SignUp",
    data() {
      return {
        name: "",
        email: "",
        password: "",
        showPassword: false,
        passwordRequirements: [],
        validity: false,
      };
    },
    methods: {
      submitForm() {
        if (validity && this.name != "" && this.email != "") {
          alert(`Signed up with Name: ${this.name}, Email: ${this.email}`);
          // this.$router.push({ path: 'main' })
            var data = {
            email: this.email,
            password: this.password
          };
          // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
          fetch("http://localhost:3000/auth/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
              credentials: 'include', //  Don't forget to specify this if you need cookies
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
        }

        if(!this.name || !this.email ){
          alert(`You need to fill in a name and an email!`);
        }

        if(!validity){
          alert(`Password conditions not met!`);
        }
      },

      goToLogin(){
        this.$router.push({ path: 'login' });
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

