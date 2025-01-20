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
  name: "AppLayout",
  components: {
    NavigationDrawer,
  },
};
</script>

<style>
/* Agrega tus estilos aquí */
</style>
