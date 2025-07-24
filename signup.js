// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIza....",             // 🔁 apna config yahan bhi paste karo
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
