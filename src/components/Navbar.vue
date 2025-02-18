<template>
    <nav class="navbar">
        <!-- LOGO -->
        <div class="logo">
            <img src="/logo_camping.png" alt="logo camping">
        </div>

        <!-- MENUS -->
        <ul class="menu">
            <li><RouterLink to="/">Accueil</RouterLink></li>

            <li v-if="storeUser.connecte">
                <RouterLink to="/panier">Mon Panier</RouterLink>
            </li>

            <li v-if="!storeUser.connecte">
                <RouterLink to="/connexion">Connexion</RouterLink>
            </li>

            <li v-else>
                <button @click="deconnexion">Déconnexion</button>
            </li>
        </ul>

        <!-- Nom de l'adhérent connecté -->
        <div v-if="storeUser.connecte" class="user-info">
            <span>Bienvenue, {{ storeUser.utilisateur.displayName }}</span>
        </div>
    </nav>
</template>

<script setup>
import { useUserStore } from "../store/storeUser";
import { useRouter } from "vue-router";

const storeUser = useUserStore();
const router = useRouter();

const deconnexion = () => {
    storeUser.deconnexion();
    router.push("/");
};
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
}

.logo {
    font-size: 32px;
    padding-left: 25px;
    font-weight: bold;
}

.logo img {
    margin: 25px;
    width: 90px;
}

.menu {
    display: flex;
    font-size: 18px;
}

.menu a {
    text-decoration: none;
    color: #fff;
    background-color: #0e481e;
    padding: 15px 15px;
}

.menu li {
    list-style: none;
    padding: 5px 14px;
}

.menu a:hover {
    background-color: #0e481e;
    border-radius: 5px;
}

.menu a.router-link-exact-active {
    border: 1px solid #0e481e;
    background-color: #ffffff;
    color: #0e481e;
    padding: 15px 15px;
}

/* Bouton Déconnexion */
button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #c82333;
}

/* Affichage du nom de l'utilisateur */
.user-info {
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
    color: #0e481e;
}
</style>
