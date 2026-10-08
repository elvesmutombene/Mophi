
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjBar-is1b9vqeaTfaGkICeojtNF0z1cw",
    authDomain: "produtiva-89d7d.firebaseapp.com",
    projectId: "produtiva-89d7d",
    storageBucket: "produtiva-89d7d.firebasestorage.app",
    messagingSenderId: "237663641410",
    appId: "1:237663641410:web:28704ab8560c98922272db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
