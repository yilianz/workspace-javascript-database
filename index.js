// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.
async function main() {
  // Add Firebase project configuration object here
  var firebaseConfig = {
    apiKey: "AIzaSyA2Uacv6L6bwgZki9KuWeajw0avahJ7B04",
    authDomain: "to-do-list-d6f67.firebaseapp.com",
    databaseURL: "https://to-do-list-d6f67.firebaseio.com",
    projectId: "to-do-list-d6f67",
    storageBucket: "to-do-list-d6f67.appspot.com",
    messagingSenderId: "868269005971",
    appId: "1:868269005971:web:0db7aa8694db4c6d7ac166",
    measurementId: "G-8KK8PPHNRT"
  };
  firebase.initializeApp(firebaseConfig);
}

main();

// save
document.getElementById("save").addEventListener("click", saveElement);

function saveElement() {
  // Delete all the elements in the colleciton first
  firebase
    .firestore()
    .collection("shoppinglist")
    .get().then(function(querySnapshot){
         querySnapshot.forEach(function(doc) {
        console.log(doc.data());
        doc.ref.delete();
      });
    });

  var nlist = document.querySelectorAll("li");
  for (var i = 0; i < nlist.length; i++) {
    var items = nlist[i].textContent;
    firebase
      .firestore()
      .collection("shoppinglist")
      .add({
        item: items
      });
  }
}
