import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyArgE4vHgRc0TYW7gxru5mqBV4pS402Tuw",
    authDomain: "lviv-cinema-booking.firebaseapp.com",
    databaseURL: "https://lviv-cinema-booking.firebaseio.com",
    projectId: "lviv-cinema-booking",
    storageBucket: "",
    messagingSenderId: "1096996725457"
};

firebase.initializeApp(config);

const ref = firebase.database();

export default ref;