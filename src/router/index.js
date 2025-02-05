import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Equipes from '../views/Equipes.vue'
import Ajout from '../views/Ajout.vue'
import Details from '../views/Details-equipe.vue'
import Erreur from '../views/Erreur.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/equipes',
      name: 'equipes',
      component: Equipes
    },
    {
      path: '/equipes/ajout',
      name: 'ajout-equipe',
      component: Ajout
    },
    {
      path: '/details-equipe/:id',
      name: 'details-equipe',
      component: Details
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'erreur',
      component: Erreur
    }
  ]
})

export default router
