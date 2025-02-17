<template>
    <!-- Une fois connecter -->

    <div class="max-w-sm mx-auto">
        <div v-if="storeUser.connecte" class="mb-5">
            <h1 class="block mb-2 text-lg font-bold text-green-900">Bonjour {{ storeUser.utilisateur.displayName }}</h1>
            <button @click="deconnexion"
                class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-800 hover:bg-green-700 focus:ring-green-800">Déconnexion</button>
        </div>
    </div>

    <!-- CREER UN COMPTE -->
    <div class="p-5">
        <form v-on:submit.prevent="creerCompte" class="max-w-sm mx-auto">
            <div class="mb-5">
                <h1 class="block mb-2 text-lg font-bold text-green-900">Créer un compte</h1>
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-green-900">Nom</label>
                <input type="text" id="nom"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-blue-500 block w-full p-2.5"
                    v-model="nom" required />
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-green-900">Your email</label>
                <input type="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@gmail.com" v-model="email" required />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-green-900">Your
                    password</label>
                <input type="password" id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    v-model="pwd" required />
            </div>

            <button type="submit" value="Créer un compte"
                class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-800 hover:bg-green-700 focus:ring-green-800">Créer
                un compte</button>
        </form>
    </div>



</template>

<script setup>
import { ref } from 'vue';
import { auth } from "@/firebase";
import { useRouter } from 'vue-router'; // Import du router
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useUserStore } from '../store/storeUser';

const nom = ref("")
const email = ref("")
const pwd = ref("")

const storeUser = useUserStore()
const router = useRouter(); // Initialisation du router


const creerCompte = async () => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email.value, pwd.value);
        storeUser.connexion(result.user)
        connecte.value = true
        console.log(utilisateur.value);

        // Redirection vers l'accueil après création compte
        router.push("/");
    }
    catch (error) {
        console.error("Échec de la création de l'utilisateur", error);
    }
}



const deconnexion = async () => {
    try {
        const result = await signOut(auth);
        storeUser.deconnexion()
        console.log("Déconnexion réussie", storeUser.utilisateur);
    } catch (error) {
        console.error("Erreur lors de la déconnexion:", error);
    }
}; 
</script>


<style scoped></style>
