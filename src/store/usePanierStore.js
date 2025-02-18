import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";

export const usePanierStore = defineStore("panier", () => {
  const panier = ref([]);
  const toast = useToast();

  const ajouterAuPanier = (activite) => {
    if (!panier.value.some((a) => a.id === activite.id)) {
      panier.value.push(activite);
      toast.success(`${activite.nom} ajouté au panier ! `);
    } else {
      toast.warning(`${activite.nom} est déjà dans le panier ! ⚠️`);
    }
  };

  const supprimerDuPanier = (id) => {
    const activite = panier.value.find((a) => a.id === id);
    if (activite) {
      panier.value = panier.value.filter((a) => a.id !== id);
      toast.error(`${activite.nom} supprimé du panier ❌`, {
        position: "top-right",
        timeout: 3000,
      });
    }
  };
  const viderPanier = () => {
    panier.value = [];
  };

  return { panier, ajouterAuPanier, supprimerDuPanier, viderPanier };
});
