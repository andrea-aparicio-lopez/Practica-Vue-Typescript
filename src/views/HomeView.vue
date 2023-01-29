<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div> -->
  <h2>Bienvenido a Fake Shop!</h2>
  <h4>Una tienda ficticia donde podrás navegar y encontrar cientos de productos sin sentido</h4>
  <br>
  <!-- <p v-if="!loggedIn">Inicia sesión o regístrate para comenzar</p> -->
  <h4>Inicia sesión para comenzar</h4>
  <button @click="$router.push('login')">Log In</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
});
</script>
