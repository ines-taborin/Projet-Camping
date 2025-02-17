import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.js";

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const activitesCollection = collection(db, "activites");

const activites = [
  { nom: "Yoga Dynamique", type: "fitness", cout: 20, date: "2025-03-10", heure: "18:00" },
  { nom: "Danse Salsa", type: "danse", cout: 15, date: "2025-03-12", heure: "19:30" },
  { nom: "Tennis", type: "raquette", cout: 25, date: "2025-03-15", heure: "14:00" },
  { nom: "Randonnée en montagne", type: "randonnée", cout: 10, date: "2025-03-20", heure: "08:00" },
  { nom: "Kayak en rivière", type: "kayak", cout: 30, date: "2025-03-25", heure: "10:00" },
  { nom: "Pilates", type: "fitness", cout: 18, date: "2025-04-02", heure: "17:00" },
  { nom: "Danse Hip-Hop", type: "danse", cout: 20, date: "2025-04-05", heure: "20:00" },
  { nom: "Badminton", type: "raquette", cout: 22, date: "2025-04-10", heure: "16:00" },
  { nom: "Randonnée en forêt", type: "randonnée", cout: 12, date: "2025-04-15", heure: "09:30" },
  { nom: "Kayak en mer", type: "kayak", cout: 35, date: "2025-04-20", heure: "11:00" }
];

async function ajouterActivites() {
  for (const activite of activites) {
    await addDoc(activitesCollection, activite);
  }
  console.log("10 activités ajoutées !");
}

ajouterActivites();
