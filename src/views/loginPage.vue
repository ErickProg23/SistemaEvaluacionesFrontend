<template>
  <div id="app">
    <div id="login">
      <div id="description">
        <h1>Iniciar Sesion</h1>
        <p>Ingresa tu correo y contraseña para ingresar al sistema de evaluaciones</p>
      </div>
      <div id="form">
        <form @submit.prevent="login">
          <label for="email">Correo</label>
          <input type="text" id="email" v-model="correo" placeholder=" " autocomplete="off">

          <label for="password">Contraseña</label>&nbsp;
          <i class="fas" :class="[passwordFieldIcon]" @click="hidePassword = !hidePassword"></i>
          <input :type="passwordFieldType" id="password" v-model="contrasena" placeholder=" ">

          <button type="submit">Iniciar sesion</button>
          <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      correo: '',
      contrasena: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      if (!this.correo || !this.contrasena) {
        this.errorMessage = 'Por favor, completa todos los campos.';
        return;
      }

      try {
        // Realiza una llamada POST a la API de Flask
        const response = await axios.post('http://localhost:5000/api/login', {
          correo: this.correo,
          contrasena: this.contrasena
        });

        // Si la respuesta es exitosa, guarda el token en localStorage
        const token = response.data.access_token;
        localStorage.setItem('token', token);

        // Redirige al usuario a la página principal
        this.$router.push('/home');
      } catch (error) {
        // Manejo de errores
        this.errorMessage =
          error.response?.data?.message || 'Error al iniciar sesión';
      }
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Verdana, sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

div#app {
  width: 100%;
  height: 100%;
}

div#app div#login {
  align-items: center;
  background-color: #e2e2e5;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

div#app div#login div#description {
  background-color: #ffffff;
  width: 280px;
  padding: 35px;
}

div#app div#login div#description h1,
div#app div#login div#description p {
  margin: 0;
}

div#app div#login div#description p {
  font-size: 0.8em;
  color: #95a5a6;
  margin-top: 10px;
}

div#app div#login div#form {
  background-color: #34495e;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px #666;
  color: #ecf0f1;
  width: 260px;
  padding: 35px;
}

div#app div#login div#form label,
div#app div#login div#form input {
  outline: none;
  width: 100%;
}

div#app div#login div#form label {
  color: #95a5a6;
  font-size: 0.8em;
}

div#app div#login div#form input {
  background-color: transparent;
  border: none;
  color: #ecf0f1;
  font-size: 1em;
  margin-bottom: 20px;
}

div#app div#login div#form ::placeholder {
  color: #ecf0f1;
  opacity: 1;
}

div#app div#login div#form button {
  background-color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
}

div#app div#login div#form button:hover {
  background-color: #eeeeee;
}

@media screen and (max-width: 600px) {
  div#app div#login {
    align-items: unset;
    background-color: unset;
    display: unset;
    justify-content: unset;
  }

  div#app div#login div#description {
    margin: 0 auto;
    max-width: 350px;
    width: 100%;
  }

  div#app div#login div#form {
    border-radius: unset;
    box-shadow: unset;
    width: 100%;
  }

  div#app div#login div#form form {
    margin: 0 auto;
    max-width: 280px;
    width: 100%;
  }
}
</style>