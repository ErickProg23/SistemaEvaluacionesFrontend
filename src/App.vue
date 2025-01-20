<template>
  <v-app>
    <!-- Aquí importas tu NavigationDrawer -->
    <NavigationDrawer />

    <v-main>
      <router-view></router-view> <!-- Donde se renderizarán las vistas hijas -->
    </v-main>
  </v-app>
</template>


<script>
import NavigationDrawer from '../components/NavigationDrawer.vue';

export default {
  name: "App",
  components: {
    NavigationDrawer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
