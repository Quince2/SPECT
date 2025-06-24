const validUsername = "Null Horizon"; 
const passwordForPage1 = "Solus"; 
const passwordForPage2 = "15061983"; 

const loginBtn = document.getElementById("loginBtn"); 
const errorMsg = document.getElementById("error");

loginBtn.addEventListener("click", () => {
  const enteredUsername = document.getElementById("username").value.trim();
  const enteredPass = document.getElementById("password").value.trim();

  if (enteredUsername !== validUsername) {
    errorMsg.textContent = "Invalid username.";
    return;
  }

  if (enteredPass === passwordForPage1) {
    window.location.href = "dashboard1.html"; 
  } else if (enteredPass === passwordForPage2) {
    window.location.href = "dashboard2.html"; 
  } else {
    errorMsg.textContent = "Invalid password.";
  }
});

// Hidden button click listener
const hiddenBtn = document.getElementById("hiddenBtn");
hiddenBtn.addEventListener("click", () => {
  window.location.href = "dashboard3.html"; // Replace with your target page
});