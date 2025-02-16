import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    // Initialize utilisateur as null, so we know when there's no logged-in user
    const utilisateur = ref(null);
    const connecte = ref(false);

    const connexion = (user) => {
        // Ensure that the user object has the required properties like displayName and photoURL
        utilisateur.value = {
            displayName: user.displayName || "Nom inconnu", // Fallback if no displayName exists
            photoURL: user.photoURL || "https://randomuser.me/api/portraits/men/22.jpg", // Default photo
            ...user, // Spread other user data
        };
        connecte.value = true;
    };

    const deconnexion = () => {
        utilisateur.value = null;
        connecte.value = false;
    };

    return { utilisateur, connecte, connexion, deconnexion };
});
