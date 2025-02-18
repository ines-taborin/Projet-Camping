import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useUserStore = defineStore('user', ()=>{
    const utilisateur = reactive({});
    const connecte = ref(false);
    const admin = ref(false);

    const connexion = (user)=>{
        utilisateur.value = user
        connecte.value = true;
    }

    const deconnexion = ()=>{
        utilisateur.value = null
        connecte.value = false;
        admin.value = false;
    }

    return {utilisateur, connecte, connexion, deconnexion}
})