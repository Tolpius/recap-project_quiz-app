const routes = {
  "/": "/index.html",
  "/quiz": "views/quiz.html",
  "/bookmarks": "views/bookmarks.html",
  "/newQuestions": "views/newQuestions.html",
  "/profile": "views/profile.html",
};

// Router aufrufen, wenn Seite geladen oder Hash gewechselt wird
window.addEventListener("load", router);
window.addEventListener("hashchange", router);

// Haupt-Router-Funktion
function router() {
  const hash = location.hash.slice(1) || "/";
  const viewPath = routes[hash] || "views/404.html";
  loadPage(viewPath);
}

// Seite laden + zugehöriges JS (wenn vorhanden)
async function loadPage(viewPath) {
  const app = document.getElementById("app");

  try {
    const response = await fetch(viewPath);
    const html = await response.text();
    app.innerHTML = html;

    // Name der Seite extrahieren (z.B. "about" aus "views/about.html")
    const pageName = viewPath.split("/").pop().replace(".html", "");
    const scriptPath = `js/${pageName}.js`;

    console.log(`[Router] Lade Seite: ${viewPath}, zugehöriges Skript: ${scriptPath}`);
    loadScript(scriptPath);
  } catch (err) {
    app.innerHTML = "<h2>Seite konnte nicht geladen werden.</h2>";
    console.error("Fehler beim Laden:", err);
  }
}

// Skript dynamisch einfügen
function loadScript(src) {
  // Existierendes Skript entfernen, falls vorhanden
  const oldScript = document.querySelector(`script[src="${src}"]`);
  if (oldScript) {
    console.log(`[Router] Entferne altes Skript: ${src}`);
    oldScript.remove();
  }

  const script = document.createElement("script");
  script.src = src;
  script.defer = true;

  script.onload = () => {
    console.log(`[Router] Skript geladen: ${src}`);
  };
  script.onerror = () => {
    console.warn(`Kein JS gefunden für: ${src} (optional)`);
  };

  document.body.appendChild(script);
}
