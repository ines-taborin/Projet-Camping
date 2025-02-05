import { defineStore } from "pinia";
import { ref } from "vue";

export const useEquipesStore = defineStore('equipes',()=>{
    const equipes = ref([])

    const ajouterEquipe = (equipe) => {
        equipes.value.push(equipe)
    }

    const getEquipe = (id) => {
        let equipe = equipes.value.find(equipe => equipe.idEquipe === id)
        return equipe
    }

    return {
        equipes,
        ajouterEquipe,
        getEquipe
    }
})