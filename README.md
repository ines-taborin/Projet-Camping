# 🏕️ Centre de Loisirs – Vue 3 + Firebase + Pinia

Ce projet est une application web développée avec **Vue 3**, **Pinia** et **Firebase**, simulant la page d’accueil d’un centre de loisirs. Il permet d’afficher dynamiquement une liste d’activités issues de Firestore et de permettre aux utilisateurs authentifiés de s’y inscrire via un système de panier.

---

## 🎯 Objectif du projet

- Afficher une liste dynamique d’activités proposées par un centre de loisirs
- Permettre aux utilisateurs connectés de s’inscrire à une ou plusieurs activités
- Gérer l’état de connexion de l’utilisateur et afficher du contenu conditionnel
- Gérer un panier d’inscription local avec ajout dynamique
- Proposer un design responsive simple et agréable

---

## 🖼️ Aperçu

![Aperçu de l'application](./public/screenshot.png)

![Aperçu de l'application](./public/screenshot2.png)

---

## 🔄 Fonctionnalités

- 🏕️ Page d’accueil présentant les activités proposées
- 👤 Affichage personnalisé avec un message de bienvenue si l’utilisateur est connecté
- 🔄 Récupération dynamique des activités depuis une base **Firestore**
- 📅 Informations affichées pour chaque activité :
  - Nom
  - Type
  - Coût
  - Date
  - Heure
- ✅ Inscription possible uniquement pour les utilisateurs connectés (adhérents ou admins)
- 🛒 Ajout d’activités dans un **panier d'inscription local**, géré avec **Pinia**
- 🔐 Redirection vers la page de connexion si l’utilisateur n’est pas connecté
- 🍞 Notifications (via **vue-toastification**) à l’ajout d’activité
- 🎨 Interface responsive avec mise en page en `grid` et visuels épurés

---

## ⚙️ Stack technique

- 🖼️ **Vue 3** avec composition API (`<script setup>`)
- 📦 **Pinia** pour la gestion des états utilisateur et panier
- ☁️ **Firebase Firestore** pour la base de données
- 🔒 **Firebase Auth** (si présent dans le reste du projet)
- 💅 **CSS pur** (ou **Tailwind CSS** si utilisé dans d’autres composants)
- 🍞 **Vue Toastification** pour les messages utilisateur
- 📁 **Vue Router** pour la navigation

---

## 🚀 Lancer le projet en local

```bash
# 1. Cloner le dépôt
git clone https://github.com/ines-taborin/Projet-Camping.git
cd Projet-Camping

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# connexion admin
email: "admin@admin.com"
mot de passe: "admin123"
