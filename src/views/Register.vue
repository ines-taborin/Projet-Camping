<template>
    <div class="max-w-sm mx-auto">
        <div v-if="storeUser.connecte" class="mb-5">
            <h1 class="block mb-2 text-lg font-bold text-green-900">Bonjour {{ storeUser.utilisateur.displayName }}</h1>
            <button @click="deconnexion"
                class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-800 hover:bg-green-700 focus:ring-green-800">
                Déconnexion
            </button>
        </div>
    </div>

    <!-- FORMULAIRE D'INSCRIPTION -->
    <div class="p-5">
        <form @submit.prevent="creerCompte" class="max-w-sm mx-auto">
            <div class="mb-5">
                <h1 class="block mb-2 text-lg font-bold text-green-900">Créer un compte</h1>
            </div>

            <!-- Champ Nom -->
            <div class="mb-5">
                <label for="nom" class="block mb-2 text-sm font-medium text-green-900">Nom</label>
                <input type="text" id="nom" v-model="nom"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-blue-500 block w-full p-2.5"
                    :class="{ 'border-red-500': v$.nom.$error }" />
                <p v-if="v$.nom.$error" class="text-red-500 text-xs mt-1">
                    {{ v$.nom.$errors[0].$message }}
                </p>
            </div>

            <!-- Champ Email -->
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-green-900">Votre email</label>
                <input type="email" id="email" v-model="userEmail"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-blue-500 block w-full p-2.5"
                    :class="{ 'border-red-500': v$.userEmail.$error }" />
                <p v-if="v$.userEmail.$error" class="text-red-500 text-xs mt-1">
                    {{ v$.userEmail.$errors[0].$message }}
                </p>
            </div>

            <!-- Champ Mot de passe -->
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-green-900">Votre mot de passe</label>
                <input type="password" id="password" v-model="pwd"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    :class="{ 'border-red-500': v$.pwd.$error }" />
                <p v-if="v$.pwd.$error" class="text-red-500 text-xs mt-1">
                    {{ v$.pwd.$errors[0].$message }}
                </p>
            </div>

            <div class="flex items-center justify-between">
                <RouterLink to="/connexion"
                    class="text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-gray-400 hover:bg-gray-500 focus:ring focus:ring-gray-500 focus:ring-offset-2">
                    Retour à Connexion</RouterLink>

                <input type="submit"
                    class="cursor-pointer text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-800 hover:bg-green-700 focus:ring focus:ring-green-800 focus:ring-offset-2" value="Créer le compte" />
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from "@/firebase";
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useUserStore } from '../store/storeUser';
import useVuelidate from '@vuelidate/core';
import { required, email as emailValidator, minLength } from '@vuelidate/validators';

const nom = ref("");
const userEmail = ref("");
const pwd = ref("");

const storeUser = useUserStore();
const router = useRouter();

// Validation avec Vuelidate
const rules = {
    nom: { required, minLength: minLength(3) },
    userEmail: { required, email: emailValidator },
    pwd: { required, minLength: minLength(6) }
};
const v$ = useVuelidate(rules, { nom, userEmail, pwd });

const creerCompte = async () => {
    const isValid = await v$.value.$validate();
    if (!isValid) {
        console.error("Validation échouée");
        return;
    }

    try {
        const result = await createUserWithEmailAndPassword(auth, userEmail.value, pwd.value);

        await updateProfile(result.user, {
          displayName: nom.value,
        });

        // Stocker l'utilisateur avec l'email
        storeUser.connexion({
            uid: result.user.uid,
            email: result.user.email
        });

        console.log("Utilisateur créé :", storeUser.utilisateur);

        // Rediriger vers l'accueil
        router.push("/");
    } catch (error) {
        console.error("Échec de la création de l'utilisateur", error);
    }
};
</script>

<style scoped>
/* Ajoute un style rouge pour les erreurs */
.border-red-500 {
    border-color: red !important;
}
</style>
