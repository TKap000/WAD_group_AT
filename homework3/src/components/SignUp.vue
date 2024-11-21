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
          @change="$emit('update:password', $event.target.value)"
          id="password"
          placeholder="Password "
        >
        <button @click="showPassword = !showPassword">
          {{ showPassword ? 'Hide password' : 'Show password' }}
        </button>

        <br>
        <button type="submit" @click.prevent="submitForm">Sign Up</button>
      </form>
      <ul class="requirements">
        <li
          v-for="(requirement, key) in passwordRequirements"
          
          :key="key"
          :class="requirement.predicate ? 'is-success' : 'is-error'"
        >
          {{ requirement.name }}
        </li>
      </ul>
      
    </div>
</template>

<script setup>
  const emit = defineEmits([
  'update:password',
  'update:validity'
])

watch(passwordRequirements, () => {
  emit(
    'update:validity',
    passwordRequirements.value.reduce((v, p) => v && p.predicate, true)
  )
})
</script>
  
<script>
  import { computed, ref, watch } from 'vue'

  const password = ref('')
  const showPassword = ref(false)
  
  const passwordRequirements = computed(() => ([
    {
      name: 'Password must contain uppercase letters',
      predicate: password.value.toLowerCase() !== password.value,
    },
    {
      name: 'Password must contain lowercase letters',
      predicate: password.value.toUpperCase() !== password.value,
    },
    {
      name: 'Password must contain numbers',
      predicate: /\d/.test(password.value),
    },
    {
      name: 'Password must contain symbols',
      predicate: /\W/.test(password.value),
    },
    {
      name: 'Password must be at least 8 characters long',
      predicate: password.value.length >= 8,
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

      };
    },
    methods: {
      submitForm() {
        alert(`Signed up with Name: ${this.name}, Email: ${this.email}`);
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
  width: 20%
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