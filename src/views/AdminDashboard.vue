<template>
  <div class="admin-container">
      <h1>Bienvenue, Administrateur</h1>
      
      <nav>
          <RouterLink to="/admin/activites">Gérer les Activités</RouterLink>
      </nav>

      <button @click="deconnexion">Déconnexion</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const adminLoggedIn = ref(false);

onMounted(() => {
  adminLoggedIn.value = localStorage.getItem("adminLoggedIn") === "true";
  if (!adminLoggedIn.value) {
      router.push("/connexion");
  }
});

const deconnexion = () => {
  localStorage.removeItem("adminLoggedIn");
  router.push("/connexion");
};
</script>

<style scoped>
.admin-container {
  text-align: center;
  margin: 20px;
}

nav {
  margin: 20px 0;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: blue;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
