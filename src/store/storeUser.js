import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', ()=>{
    const utilisateur = ref({})
    const connecte = ref(false)

    const connexion = (user)=>{
        utilisateur.value = user
        connecte.value = true
    }

    const deconnexion = ()=>{
        utilisateur.value = null
        connecte.value = false
    }

    return {utilisateur, connecte, connexion, deconnexion}
})