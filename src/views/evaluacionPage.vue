<template>
    <div class="home-container">
      <h2>Bienvenido al Sistema de Evaluaciones</h2>
      <button @click="logout">Cerrar sesión</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Elimina el item 'user' del localStorage (presumiblemente el token o datos del usuario)
        localStorage.removeItem('user');
        
        // Redirige al usuario a la página de login
        this.$router.push('/login');  // El '/' es la ruta del login
      }
    }
  };
  </script>
  
  <style scoped>
  .home-container {
    text-align: center;
  }
  </style>
  