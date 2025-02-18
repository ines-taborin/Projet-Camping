<template>
    <!-- FORMULAIRE DE CONNEXION -->
    <div >
        <form @submit.prevent="seConnecter" class="max-w-sm mx-auto">
            <div class="mb-5">
                <h1 class="block mb-2 text-lg font-bold text-green-900">Se connecter</h1>
            </div>

            <!-- Champ Email -->
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-green-900">Votre email</label>
                <input type="email" id="email" v-model="userEmail"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-800 focus:border-blue-500 block w-full p-2.5"
                    :class="{ 'border-red-500': v$.email.$error }" />
                <p v-if="v$.email.$error" class="text-red-500 text-xs mt-1">
                    {{ v$.email.$errors[0].$message }}
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
                <RouterLink to="/register" class="text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-gray-400 hover:bg-gray-500 focus:ring focus:ring-gray-600 focus:ring-offset-2">Créer un compte</RouterLink>

            <input type="submit"
                class="cursor-pointer text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-800 hover:bg-green-700 focus:ring focus:ring-green-800 focus:ring-offset-2" value="Se connecter">
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from "@/firebase";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useUserStore } from '../store/storeUser';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

const userEmail = ref("");
const pwd = ref("");
const storeUser = useUserStore();
const router = useRouter();
const adminConnecte = ref(false);

// Validation avec Vuelidate
const rules = {
    email: { required, email },
    pwd: { required, minLength: minLength(4) }
};
const v$ = useVuelidate(rules, { email: userEmail, pwd: pwd });

// Vérifier si l'admin est déjà connecté
onMounted(() => {
    adminConnecte.value = localStorage.getItem("adminLoggedIn") === "true";
});

// Fonction de connexion avec validation
const seConnecter = async () => {
    const isValid = await v$.value.$validate();
    if (!isValid) {
        console.error("Validation échouée");
        return;
    }

    if (userEmail.value === "admin@admin.com" && pwd.value === "admin123") {
        const user = {
            displayName: "Administrateur",
            email: "admin@admin.com",
        }
        storeUser.utilisateur = user;
        storeUser.admin = true;
        localStorage.setItem("adminLoggedIn", "true");
        adminConnecte.value = true;
        router.push("/admin/dashboard");
        return;
    } else {
        try {
            const result = await signInWithEmailAndPassword(auth, userEmail.value, pwd.value);
            storeUser.connexion(result.user);
            console.log("Utilisateur connecté :", storeUser.utilisateur);
            router.push("/");
        } catch (error) {
            console.error("Échec de la connexion", error);
        }
    }
};
</script>

<style scoped>
.border-red-500 {
    border-color: red !important;
}
</style>
