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
// Welcome Pop-up for first-time visitors
document.addEventListener("DOMContentLoaded", function () {

    // Check if the user has seen the welcome pop-up before
    if (!localStorage.getItem("visitedSafeHaven")) {

        // Create popup div
        const popup = document.createElement("div");
        popup.id = "welcomePopup";

        // Create popup content
        popup.innerHTML = `
            <div class="popup-content">
                <h2>Welcome to Safe Haven!</h2>
                <p>A chill space just for teens to talk, share, and connect.<br>
                Pick a username, explore your favorite topics, and meet new people — all in a safe, friendly environment.</p>
                <button id="closePopup">Let's Go!</button>
            </div>
        `;

        document.body.appendChild(popup);

        // Show the popup
        setTimeout(() => {
            popup.style.visibility = "visible";
            popup.style.opacity = "1";
        }, 100);

        // Close button functionality
        document.getElementById("closePopup").addEventListener("click", function () {
            popup.style.opacity = "0";
            setTimeout(() => popup.style.display = "none", 300);
            localStorage.setItem("visitedSafeHaven", "true");
        });
    }

});
