

// JavaScript-Code für dein Portfolio

// Setze deine persönlichen Daten
const yourName = "Finn Paulsen";
const yourAge = "15 Jahre";
const yourLocation = "Norderstedt";
const yourEmail = "finnpaulsen10@web.de";

// Setze deine Links
const githubLink = "https://github.com/Finn-paulsen";
const discordLink = "https://discordapp.com/users/Finn2punkt0";
const instagramLink = "https://www.instagram.com/fpaulsenhh";

// Lade deine persönlichen Informationen
document.getElementById("name").textContent = yourName;
document.getElementById("age").textContent = yourAge;
document.getElementById("location").textContent = yourLocation;
document.getElementById("email").textContent = yourEmail;

// Lade deine Social-Media-Links
document.getElementById("github-link").href = githubLink;
document.getElementById("discord-link").href = discordLink;
document.getElementById("instagram-link").href = instagramLink;

// Funktion, um das Terminal zu aktualisieren
function updateTerminal(content) {
  const terminalOutput = document.getElementById("terminal-output");
  terminalOutput.textContent = content;
}

// Funktion zum Zurücksetzen des Terminals
function clearTerminal() {
  const terminalOutput = document.getElementById("terminal-output");
  terminalOutput.textContent = "";
}

// Füge Event Listener hinzu, um Befehle auszuführen
document.getElementById("terminal-input-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const command = document.getElementById("command-input").value.trim();
  handleCommand(command);
});

// Funktion zum Verarbeiten von Befehlen
function handleCommand(command) {
  const terminalOutput = document.getElementById("terminal-output");
  if (command === "help") {
    updateTerminal("Verfügbare Befehle:\n- whoami\n- experience\n- education\n- skills\n- publications\n- blogs\n- github\n- linkedin\n- contact\n- clear");
  } else if (command === "whoami") {
    updateTerminal(`Name: ${yourName}\nAlter: ${yourAge}\nStandort: ${yourLocation}`);
  } else if (command === "experience") {
    // Füge hier deine Erfahrungen hinzu
    updateTerminal("Hier ist dein Erfahrungsbereich.");
  } else if (command === "education") {
    // Füge hier deine Bildungsinformationen hinzu
    updateTerminal("Hier ist deine Bildungsgeschichte.");
  } else if (command === "skills") {
    // Füge hier deine Fähigkeiten hinzu
    updateTerminal("Hier sind deine Fähigkeiten.");
  } else if (command === "publications") {
    // Füge hier deine Veröffentlichungen hinzu
    updateTerminal("Hier sind deine Veröffentlichungen.");
  } else if (command === "blogs") {
    // Füge hier Links zu deinen Blogs hinzu
    updateTerminal("Hier sind deine Blogs.");
  } else if (command === "github") {
    // Füge deinen GitHub-Link hinzu
    updateTerminal(`GitHub: ${githubLink}`);
  } else if (command === "linkedin") {
    // Füge deinen LinkedIn-Link hinzu
    updateTerminal("LinkedIn: Dein LinkedIn-Link hier");
  } else if (command === "contact") {
    // Füge deine Kontaktinformationen hinzu
    updateTerminal(`E-Mail: ${yourEmail}`);
  } else if (command === "clear") {
    clearTerminal();
  } else {
    updateTerminal("Befehl nicht gefunden. Verwende 'help', um verfügbare Befehle anzuzeigen.");
  }
}

