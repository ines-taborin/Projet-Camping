<template>
    <header>
        <div>
            <h1>Centre de Loisir</h1>
            <p>"ON PREND L'AIR"</p>
        </div>
    </header>
    <main>
        <div class="container">
            <h1 class="title">
                {{ storeUser.connecte ? `Bonjour ${storeUser.utilisateur.displayName}, voilà nos activités` : "Nos Activités" }}
            </h1>
            <div v-if="loading">Chargement des activités...</div>
            <div v-else class="cards">
                <div v-for="activite in activites" :key="activite.id" class="card">
                    <h2>{{ activite.nom }}</h2>
                    <p><strong>Type :</strong> {{ activite.type }}</p>
                    <p><strong>Coût :</strong> {{ activite.cout }} $</p>
                    <p><strong>Date :</strong> {{ activite.date }}</p>
                    <p><strong>Heure :</strong> {{ activite.heure }}</p>
                    
                    <!-- Bouton "S'inscrire" visible uniquement pour les adhérents connectés -->
                    <button v-if="storeUser.connecte" @click="ajouterAuPanier(activite)">
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getApp } from "firebase/app";
import { useUserStore } from '../store/storeUser';
import { usePanierStore } from '../store/usePanierStore';
import { useToast } from "vue-toastification";

const activites = ref([]);
const loading = ref(true);
const storeUser = useUserStore();
const storePanier = usePanierStore();
const toast = useToast();

const ajouterAuPanier = (activite) => {
    storePanier.ajouterAuPanier(activite);

    console.log("Panier actuel :", storePanier.panier); 
};

onMounted(async () => {
    try {
        const db = getFirestore(getApp());
        const activitesCollection = collection(db, "activites");
        const snapshot = await getDocs(activitesCollection);

        activites.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Erreur de récupération :", error);
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    text-align: center;
}

header {
    width: 100%;
    height: 400px;
    background-color: rgb(1, 61, 61);
    background-image: url('https://images.unsplash.com/photo-1532339142463-fd0a8979791a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-repeat: repeat;
    background-position: center;
    background-size: cover;
    color: white;
    display: flex;
    justify-content: end;
    align-items: end;
    font-size: 45px;
    font-weight: bold;
    padding: 30px;
    box-sizing: border-box;
}

header h1,
header p {
    margin: 0;
    text-align: end;
}

.title {
    font-size: 24px;
    margin-bottom: 20px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.card {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}
</style>

