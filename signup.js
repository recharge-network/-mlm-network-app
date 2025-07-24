// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIza....",             // // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9KS6E7oWd2aNumYPRkTpCvl_Sqb1TZtE",
  authDomain: "mlm-network-157e8.firebaseapp.com",
  projectId: "mlm-network-157e8",
  storageBucket: "mlm-network-157e8.firebasestorage.app",
  messagingSenderId: "433192039581",
  appId: "1:433192039581:web:42d02b965870e4a8969074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  authDomain: "mlm-network.firebaseapp.com",
  projectId: "mlm-network",
  storageBucket: "mlm-network.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Please enter email and password");
    return;
  }

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      alert("Signup successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
}
