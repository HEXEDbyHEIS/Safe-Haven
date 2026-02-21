// Check if user already chose a name
let username = localStorage.getItem("safeHavenUser");

const welcomeText = document.getElementById("welcomeUser");
const loginBtn = document.getElementById("loginBtn");

// If user exists, show it
if (username) {
    welcomeText.textContent = "Hi, " + username + " 👋";
    loginBtn.textContent = "Change";
}

// When button is clicked
loginBtn.addEventListener("click", () => {
    let name = prompt("Pick a username (no real names):");

    if (name && name.trim().length > 2) {
        localStorage.setItem("safeHavenUser", name);
        welcomeText.textContent = "Hi, " + name + " 👋";
        loginBtn.textContent = "Change";
    } else {
        alert("Username must be at least 3 characters.");
    }
});