<template>
    <main>
        <div class="titre">
            <div>
                Nos Équipes
            </div>
            <div>
                <button @click="ajouter">Ajouter une équipe</button>
            </div>
        </div>

        <div class="zone-equipes">
            <div v-for="equipe in equipeStore.equipes" :key="equipe.idEquipe" class="carte-equipe">
                <RouterLink :to="{ name: 'details-equipe', params: { id: equipe.idEquipe } }">
                    <img :src="equipe.logo" :alt="equipe.nom">
                    <p class="nom">{{ equipe.nom }}</p>
                </RouterLink>

            </div>
        </div>
    </main>
</template>

<script setup>
import router from '@/router';
import { useEquipesStore } from '@/store/storeEquipes';

const equipeStore = useEquipesStore();

const ajouter = ()=>{
    router.push({ name: 'ajout-equipe' })
}
</script>

<style>
a {
    text-decoration: none;
}

.titre {
    margin: 30px;
    font-size: 35px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-bottom: 15px;
}

button {
    background-color: #305774;
    border: none;
    color: white;
    padding: 10px 15px;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}

.zone-equipes {
    display: flex;
    flex-wrap: wrap;
}

.carte-equipe {
    width: 300px;
    margin: 30px;
}

.carte-equipe img {
    height: 200px;
    display: block;
    margin: 0 auto;
}

.carte-equipe .nom {
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    color: #305774;
}
</style>