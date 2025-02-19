import { createRouter, createWebHistory } from "vue-router";

import Accueil from "../views/Accueil.vue";
import Connexion from "../views/Connexion.vue";
import Register from "../views/Register.vue";
import Erreur from "../views/Erreur.vue";
import Panier from "../views/Panier.vue";
import AdminActivites from "@/views/AdminActivites.vue";
import { useUserStore } from "@/store/storeUser";

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
    {
      path: "/panier",
      name: "Panier",
      component: Panier
    },
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
      component: AdminActivites,
      meta: { auth: true },
  },
  ],
});

router.beforeEach(async (to, from, next) => {
  const storeUser = useUserStore();

  if (to.meta.auth && !storeUser.admin) {
    return next({ name: "accueil" });
  } else {
    next();
  }
});

export default router;
