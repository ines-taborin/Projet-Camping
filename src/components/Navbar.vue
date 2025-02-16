<template>
    <nav class="navbar">
        <!-- LOGO -->
        <div class="logo">
            <img src="../../public/logo_camping.png" alt="logo camping">
        </div>

        <!-- MENUS -->
        <ul class="menu">
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/connexion">Connexion</RouterLink></li>
        </ul>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';


</script>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #ffffff;
        color: #fff;
    }

    .logo{
        font-size: 32px;
        padding-left: 25px;
        font-weight: bold;
    }

    .logo img{
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

    .menu a.router-link-exact-active{
        border: 1px solid #0e481e;
        background-color: #ffffff;
        color: #0e481e;
        padding: 15px 15px;
    }

    

        
</style>