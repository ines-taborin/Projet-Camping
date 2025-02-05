<template>
    <main>
        <div class="conteneur">
            <div class="petit">Erreur</div>
            <div class="grand">404</div>
            <div class="moyen">Cette page n'existe pas</div>
            <RouterLink :to="{name: 'accueil'}" >Retourner à la page d'accueil</RouterLink>
        </div>
    </main>
</template>

<style>
    .conteneur{
        background-color: #305774;
        color: white;
        height: 500px;
        width: 90%;
        margin: 20px auto;
        padding: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    }
    .petit{
        font-size: 30px;
    }

    .moyen{
        font-size: 40px;
    }

    .grand{
        font-size: 10em;
    }

    .conteneur a{
        color: white;
        text-decoration: none;
        font-size: 20px;
    }
</style>