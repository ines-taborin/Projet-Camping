<template>
    <main>
        <div class="zone">
            <div class="zone-equipe">
                <img :src="logo" :alt="nom">
                <p class="nom">{{ nom }}</p>
            </div>
            <div class="zone-joueurs">
                <p>les joueurs</p>
                <div class="joueurs">
                    <div v-for="joueur in joueurs" :key="joueur.id">
                        <p>{{ joueur.nomJoueur }}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </main>
    
    
</template>

<script setup>
import { useEquipesStore } from '@/store/storeEquipes';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const storeEquipes = useEquipesStore()
const route = useRoute()

const nom = ref("")
const logo = ref("")
const joueurs = ref([])

onMounted(()=>{
    let equipe = storeEquipes.getEquipe(route.params.id)
    console.log(equipe)
    
    nom.value = equipe.nom
    logo.value = equipe.logo
    joueurs.value = equipe.joueurs
})

    
</script>

<style>
    .zone{
        display: flex;
        background-color: white;
        width: 90%;
        margin: 0 auto;
    }

    .zone-equipe{
        width: 30%;
        background-color: #305774;
        color: white;
        text-align: center;
    }

    .zone-equipe img{
        width: 100%;
    }

    .zone-equipe p{
        font-size: 35px;
    }

    .zone-joueurs{
        padding: 30px;
        width: 70%;
    }

    .zone-joueurs p{
        font-size: 45px;
        text-align: end;
        margin: 0;
    }

    .joueurs{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px;
        justify-content: start ;
        align-items: start;
        align-content: start;
    }

    .joueurs p{
        background-color: #32323A;
        color: white;
        width: 300px;
        border-radius: 5px;
        padding: 20px;
        margin: 20px;
        font-size: 30px;
        text-align: center;
    }
</style>