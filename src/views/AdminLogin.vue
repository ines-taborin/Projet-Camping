<template>
    <div class="login-container">
      <h2>Connexion Administrateur</h2>
      <form @submit.prevent="login">
        <label>Nom d'utilisateur :</label>
        <input type="text" v-model="username" required />
        
        <label>Mot de passe :</label>
        <input type="password" v-model="password" required />
        
        <button type="submit">Se connecter</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref("");
  const password = ref("");
  const error = ref("");
  const router = useRouter();
  
  const adminCredentials = {
    username: "admin",
    password: "admin123"
  };
  
  const login = () => {
    if (username.value === adminCredentials.username && password.value === adminCredentials.password) {
      localStorage.setItem("adminLoggedIn", true);
      router.push("/admin/dashboard");
    } else {
      error.value = "Identifiants incorrects";
    }
  };
  </script>