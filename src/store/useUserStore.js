import { defineStore } from "pinia";
import { ref } from "vue";

export const usePanierStore = defineStore('panier', () => {
    const panier = ref([]);

    const ajouterAuPanier = (activite) => {
        if (!panier.value.some(a => a.id === activite.id)) {
            panier.value.push(activite);
        }
    };

    const supprimerDuPanier = (id) => {
        panier.value = panier.value.filter(a => a.id !== id);
    };

    const confirmerTransaction = () => {
        panier.value = [];
        alert("Votre inscription aux activités a été confirmée !");
    };

    return { panier, ajouterAuPanier, supprimerDuPanier, confirmerTransaction };
});
