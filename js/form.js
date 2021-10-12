

// Firebase
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDh7Yz4Zr02xNxhS9xngxogHpO2XZ5MjFs",
    authDomain: "vishal-sawai.firebaseapp.com",
    projectId: "vishal-sawai",
    storageBucket: "vishal-sawai.appspot.com",
    messagingSenderId: "434001729051",
    appId: "1:434001729051:web:288f4030ba2bda08858abe",
    measurementId: "G-P0HWXLVTQC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var db = firebase.firestore();

document.getElementById('ajax-contact').addEventListener('submit', storeData);

function storeData(e) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var formMessages = document.getElementById("form-messages")

    e.preventDefault();
    db.collection("Messages").doc(name).set({
        email: email,
        message: message
    })
        .then(function () {
            $(formMessages).text('Your message successfully sent');
            document.getElementById('ajax-contact').reset();
        })
        .catch(function (error) {
            console.error("Error writing doc", error);
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        });

}