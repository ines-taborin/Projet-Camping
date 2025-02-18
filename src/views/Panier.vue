<template>
    <div class="container">
        <h1>Mon Panier</h1>

        <div v-if="storePanier.panier.length === 0">
            <p>Votre panier est vide.</p>
        </div>

        <div v-else>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Type</th>
                        <th>Coût</th>
                        <th>Date</th>
                        <th>Heure</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="activite in storePanier.panier" :key="activite.id">
                        <td>{{ activite.nom }}</td>
                        <td>{{ activite.type }}</td>
                        <td>{{ activite.cout }} €</td>
                        <td>{{ activite.date }}</td>
                        <td>{{ activite.heure }}</td>
                        <td>
                            <button @click="storePanier.supprimerDuPanier(activite.id)">
                                Supprimer
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button class="confirm-btn" @click="confirmerInscription">
                Confirmer l'inscription
            </button>
        </div>

        <p v-if="confirmationMessage" class="confirmation-message">{{ confirmationMessage }}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { usePanierStore } from "../store/usePanierStore";

const storePanier = usePanierStore();
const confirmationMessage = ref("");

const confirmerInscription = () => {
    if (storePanier.panier.length > 0) {
        confirmationMessage.value = "Votre inscription aux activités a été confirmée ! 🎉";
        storePanier.viderPanier();
    }
};
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    text-align: center;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
}

th {
    background-color: #f4f4f4;
}

button {
    padding: 8px 12px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #c82333;
}

.confirm-btn {
    margin-top: 20px;
    background-color: #28a745;
}

.confirm-btn:hover {
    background-color: #218838;
}

.confirmation-message {
    margin-top: 20px;
    font-size: 18px;
    color: #28a745;
    font-weight: bold;
}
</style>
