// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSVCgT_UMzRrD6yocEVTtfKH8BmxTCiKY",
    authDomain: "klubopedia.firebaseapp.com",
    projectId: "klubopedia",
    storageBucket: "klubopedia.firebasestorage.app",
    messagingSenderId: "516890695405",
    appId: "1:516890695405:web:9b6674d0bb03a8cb185ee4",
    measurementId: "G-4H45EVYWYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Connected to Firebase")