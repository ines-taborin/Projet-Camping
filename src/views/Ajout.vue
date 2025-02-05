<template>
    <main>
        <div class="titre">Ajout d'une nouvelle équipe</div>
        <form @submit="ajouter">
            <div class="sous-titre">Informations de l'équipe</div>
            <div class="infos espace">
                <div class="groupe">
                    <label for="id">Entrez l'id de l'équipe</label>
                    <input type="text" id="id" v-model="donneesFormulaire.idEquipe">
                    <span v-if="erreurs.erreurId">Veuillez entrer l'id</span>
                </div>
                <div class="groupe">
                    <label for="nom">Entrez le nom de l'équipe</label>
                    <input type="text" id="nom" v-model="donneesFormulaire.nom">
                    <span v-if="erreurs.erreurNom">Veuillez entrer le nom de l'équipe</span>
                </div>

                <div class="groupe">
                    <label for="logo">Entrez le logo de l'équipe</label>
                    <input type="text" id="logo" v-model="donneesFormulaire.logo">
                    <span v-if="erreurs.erreurLogo">Veuillez entrer le lien du logo</span>
                </div>
            </div>

            <div class="sous-titre">Liste des joueurs</div>
            <div class="infos">
                <div class="groupe">
                    <label for="j1">Joueur 1</label>
                    <input type="text" id="j1" v-model="donneesFormulaire.joueurs.joueur1">
                    <span v-if="erreurs.erreurJoueur1">Veuillez entrer le nom du joueur 1</span>
                </div>
                <div class="groupe">
                    <label for="j2">Joueur 2</label>
                    <input type="text" id="j2" v-model="donneesFormulaire.joueurs.joueur2">
                    <span v-if="erreurs.erreurJoueur2">Veuillez entrer le nom du joueur 2</span>
                </div>
                <div class="groupe">
                    <label for="j3">Joueur 3</label>
                    <input type="text" id="j3" v-model="donneesFormulaire.joueurs.joueur3">
                    <span v-if="erreurs.erreurJoueur3">Veuillez entrer le nom du joueur 3</span>
                </div>
                <div class="groupe">
                    <label for="j4">Joueur 4</label>
                    <input type="text" id="j4" v-model="donneesFormulaire.joueurs.joueur4">
                    <span v-if="erreurs.erreurJoueur4">Veuillez entrer le nom du joueur 4</span>
                </div>
                <div class="groupe">
                    <label for="j5">Joueur 5</label>
                    <input type="text" id="j5" v-model="donneesFormulaire.joueurs.joueur5">
                    <span v-if="erreurs.erreurJoueur5">Veuillez entrer le nom du joueur 5</span>
                </div>
            </div>

            <div class="centrer">
                <button type="submit">Ajouter l'équipe</button>
            </div>
        </form>


    </main>

</template>

<script setup>
import { useEquipesStore } from '@/store/storeEquipes';
import { reactive, ref } from 'vue';
import router from '@/router';

const { ajouterEquipe } = useEquipesStore()

const donneesFormulaire = reactive({
    idEquipe: "",
    nom: "",
    logo: "",
    joueurs: {
        joueur1: "",
        joueur2: "",
        joueur3: "",
        joueur4: "",
        joueur5: ""
    }
})

const erreurs = reactive({
    erreurId: false,
    erreurNom: false,
    erreurLogo: false,
    erreurJoueur1: false,
    erreurJoueur2: false,
    erreurJoueur3: false,
    erreurJoueur4: false,
    erreurJoueur5: false
})


const validation = ()=>
{
    reset()
    let valide = true

    if (donneesFormulaire.idEquipe == "") {
        erreurs.erreurId = true
        valide = false
    }

    if (donneesFormulaire.nom == "") {
        erreurs.erreurNom = true
        valide = false
    }

    if (donneesFormulaire.logo == "") {
        erreurs.erreurLogo = true
        valide = false
    }

    if (donneesFormulaire.joueurs.joueur1 == "") {
        erreurs.erreurJoueur1 = true
        valide = false
    }

    if (donneesFormulaire.joueurs.joueur2 == "") {
        erreurs.erreurJoueur2 = true
        valide = false
    }

    if (donneesFormulaire.joueurs.joueur3 == "") {
        erreurs.erreurJoueur3 = true
        valide = false
    }

    if (donneesFormulaire.joueurs.joueur4 == "") {
        erreurs.erreurJoueur4 = true
        valide = false
    }

    if (donneesFormulaire.joueurs.joueur5 == "") {
        erreurs.erreurJoueur5 = true
        valide = false
    }

    return valide
}

const reset = ()=>{
                erreurs.erreurId  = false
                erreurs.erreurNom  = false
                erreurs.erreurLogo  = false
                erreurs.erreurJoueur1 = false
                erreurs.erreurJoueur2 = false
                erreurs.erreurJoueur3 = false
                erreurs.erreurJoueur4 = false
                erreurs.erreurJoueur5 = false
            }

const ajouter = (e)=>{
        e.preventDefault()

        if (validation() == true) {
            let donneesFinales = {
                idEquipe: donneesFormulaire.idEquipe,
                nom: donneesFormulaire.nom,
                logo: donneesFormulaire.logo,
                joueurs: [
                    { id: 1, nomJoueur: donneesFormulaire.joueurs.joueur1 },
                    { id: 2, nomJoueur: donneesFormulaire.joueurs.joueur2 },
                    { id: 3, nomJoueur: donneesFormulaire.joueurs.joueur3 },
                    { id: 4, nomJoueur: donneesFormulaire.joueurs.joueur4 },
                    { id: 5, nomJoueur: donneesFormulaire.joueurs.joueur5 },
                ]
            }

            // console.log(donneesFinales)
            ajouterEquipe(donneesFinales)

            router.push({ name: 'equipes' })
        }

    }
</script>

<style scoped>
.sous-titre {
    font-size: 30px;
    font-weight: 300;
}

.espace {
    margin-bottom: 20px;
}

form {
    background-color: #32323A;
    color: white;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    font-size: 25px;
}

.infos {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    width: 100%;
}

.groupe {
    margin: 15px;
    width: 30%;
}

label {
    display: block;
}

input {
    display: block;
    height: 20px;
    padding: 10px;
    width: 100%;
    font-size: 21px;
}

.groupe span {
    color: red;
}

.centrer {
    text-align: center;
    margin: 20px;
}
</style>
