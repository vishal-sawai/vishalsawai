//nav Toggle
var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";
function togglemenu() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "130px";
    }
    else {
        menulist.style.maxHeight = "0px";
    }
}
$(document).ready(function(){
  $(".navicon").hover(function(){
    $(".vi").slideToggle();
  });
});

//firebase
var db = firebase.firestore();

document.getElementById('contactForm').addEventListener('submit', storeData);

function storeData(e) {
 e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
 
     db.collection("Messages").doc(name).set({
         email:email,
         message:message
     })
     .then(function() {
         alert('Thank you!');
         document.getElementById('contactForm').reset();
     })
     .catch(function(error) {
        console.error("Error writing doc", error);
     });

}