import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA9KS6E7oWd2aNumYPRkTpCvl_Sqb1TZtE",
  authDomain: "mlm-network-157e8.firebaseapp.com",
  projectId: "mlm-network-157e8",
  storageBucket: "mlm-network-157e8.appspot.com",
  messagingSenderId: "433192039581",
  appId: "1:433192039581:web:42d02b965870e4a8969074"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Please enter email and password");
    return;
  }

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};
