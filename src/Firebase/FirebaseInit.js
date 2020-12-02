import firebase from 'firebase';

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyBMwC0osKzqUpq1Uh9RRt1e0PK45BBmptg",
    authDomain: "home-d374e.firebaseapp.com",
    databaseURL: "https://home-d374e.firebaseio.com",
    storageBucket: "home-d374e.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

export default database;
