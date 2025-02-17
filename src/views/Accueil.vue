<template>
    <header>
        <div>
            <h1>Centre de Loisir</h1>
            <P>" ON PREND L'AIR "</P>
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
                    <p><strong>Coût :</strong> {{ activite.cout }} €</p>
                    <p><strong>Date :</strong> {{ activite.date }}</p>
                    <p><strong>Heure :</strong> {{ activite.heure }}</p>
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

const activites = ref([]);
const loading = ref(true);
const storeUser = useUserStore();

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

<style>
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

.bloc {
    /* width: 100%; */
    margin: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.blanc {
    background-color: white;
}

.text-bloc {
    font-size: 50px;

}

img {
    border-radius: 10px;
    /* height: 300px; */
    /* width: 50%; */
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
</style>