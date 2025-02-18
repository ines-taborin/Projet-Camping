import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
import Connexion from "../views/Connexion.vue";
import Register from "../views/Register.vue";
import Erreur from "../views/Erreur.vue";
import Panier from "../views/Panier.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: Accueil,
    },
    {
      path: "/connexion",
      name: "connexion",
      component: Connexion,
    },
    { path: "/panier", name: "Panier", component: Panier },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "erreur",
      component: Erreur,
    },
    {
      path: "/admin/dashboard",
      component: () => import("@/views/AdminActivites.vue")
  },
  ],
});

router.beforeEach((to, from, next) => {
  const isAdminLoggedIn = localStorage.getItem("adminLoggedIn");

  if (to.meta.requiresAuth && !isAdminLoggedIn) {
    next("/admin/login");
  } else {
    next();
  }
});

export default router;
