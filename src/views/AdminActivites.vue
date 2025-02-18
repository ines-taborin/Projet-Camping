<template>
    <div class="container">
        <h1>Gestion des Activités</h1>

        <!-- Formulaire pour ajouter/modifier une activité -->
        <form @submit.prevent="ajouterOuModifierActivite">
            <div>
                <input type="text" v-model="activite.nom" placeholder="Nom de l'activité"
                    :class="{ 'border-red-500': v$.nom.$error }" />
                <p v-if="v$.nom.$error" class="text-red-500 text-xs mt-1">
                    {{ v$.nom.$errors[0].$message }}
                </p>
            </div>

            <div>
                <input type="text" v-model="activite.type" placeholder="Type"
                    :class="{ 'border-red-500': v$.type.$error }" />
                <p v-if="v$.type.$error" class="text-red-500 text-xs mt-1">
                    {{ v$.type.$errors[0].$message }}
                </p>
            </div>

            <div>
                <input type="number" v-model="activite.cout" placeholder="Coût (€)"
                    :class="{ 'border-red-500': v$.cout.$error }" />
                <p v-if="v$.cout.$error" class="text-red-500 text-xs mt-1">
                    {{ v$.cout.$errors[0].$message }}
                </p>
            </div>

            <div>
                <input type="date" v-model="activite.date"
                    :class="{ 'border-red-500': v$.date.$error }" />
                <p v-if="v$.date.$error" class="text-red-500 text-xs mt-1">
                    {{ v$.date.$errors[0].$message }}
                </p>
            </div>

            <div>
                <input type="time" v-model="activite.heure"
                    :class="{ 'border-red-500': v$.heure.$error }" />
                <p v-if="v$.heure.$error" class="text-red-500 text-xs mt-1">
                    {{ v$.heure.$errors[0].$message }}
                </p>
            </div>

            <button type="submit">{{ activite.id ? "Modifier" : "Ajouter" }}</button>
            <button v-if="activite.id" type="button" @click="resetForm">Annuler</button>
        </form>

        <!-- Liste des activités -->
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
                <tr v-for="a in activites" :key="a.id">
                    <td>{{ a.nom }}</td>
                    <td>{{ a.type }}</td>
                    <td>{{ a.cout }} €</td>
                    <td>{{ a.date }}</td>
                    <td>{{ a.heure }}</td>
                    <td>
                        <button @click="modifierActivite(a)">Modifier</button>
                        <button @click="supprimerActivite(a.id)">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { getApp } from "firebase/app";
import useVuelidate from "@vuelidate/core";
import { required, minLength, numeric, minValue } from "@vuelidate/validators";

const db = getFirestore(getApp());
const activitesCollection = collection(db, "activites");

const activites = ref([]);
const activite = ref({ nom: "", type: "", cout: "", date: "", heure: "", id: null });

// Validation avec Vuelidate
const rules = {
    nom: { required, minLength: minLength(3) },
    type: { required, minLength: minLength(3) },
    cout: { required, numeric, minValue: minValue(0) },
    date: { required },
    heure: { required }
};

const v$ = useVuelidate(rules, activite);

// Charger les activités existantes
const chargerActivites = async () => {
    const snapshot = await getDocs(activitesCollection);
    activites.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Ajouter ou modifier une activité
const ajouterOuModifierActivite = async () => {
    const isValid = await v$.value.$validate();
    if (!isValid) {
        console.error("Validation échouée");
        return;
    }

    if (activite.value.id) {
        const docRef = doc(db, "activites", activite.value.id);
        await updateDoc(docRef, { ...activite.value });
    } else {
        await addDoc(activitesCollection, { ...activite.value });
    }
    resetForm();
    chargerActivites();
};

// Préparer la modification d'une activité
const modifierActivite = (a) => {
    activite.value = { ...a };
};

// Supprimer une activité
const supprimerActivite = async (id) => {
    const docRef = doc(db, "activites", id);
    await deleteDoc(docRef);
    chargerActivites();
};

// Réinitialiser le formulaire
const resetForm = () => {
    activite.value = { nom: "", type: "", cout: "", date: "", heure: "", id: null };
};

onMounted(chargerActivites);
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
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #4CAF50;
    color: white;
}

input {
    border: 1px solid #ccc;
}

.border-red-500 {
    border-color: red !important;
}

button {
    margin: 5px;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
}

button:first-of-type {
    background-color: #f4a261;
    color: white;
}

button:last-of-type {
    background-color: #e63946;
    color: white;
}
</style>
