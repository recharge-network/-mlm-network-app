// script.js
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  
  if(email && pass) {
    // Redirect to dashboard page
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter email and password");
  }
}
