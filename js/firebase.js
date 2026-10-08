
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    getAnalytics,
    isSupported
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8kHjRg3t5wD2BbFzfSXo9jn0aC4rcWus",
    authDomain: "produtiva-f1d41.firebaseapp.com",
    projectId: "produtiva-f1d41",
    storageBucket: "produtiva-f1d41.firebasestorage.app",
    messagingSenderId: "769544977935",
    appId: "1:769544977935:web:d706a297e5f6d8828c6d7a",
    measurementId: "G-LQXFPZYRQS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Analytics é opcional e pode não funcionar em alguns ambientes.
isSupported()
    .then((supported) => {
        if (supported) {
            getAnalytics(app);
        }
    })
    .catch((error) => {
        console.warn("Analytics indisponível:", error);
    });

export { app, auth };

