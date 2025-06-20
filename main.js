const routes = {
  "/": "/index.html",
  "/quiz": "views/quiz.html",
  "/bookmarks": "views/bookmarks.html",
  "/newQuestions": "views/newQuestions.html",
  "/profile": "views/profile.html",
};

async function loadPage(path) {
  try {
    const res = await fetch(path);
    const content = await res.text();
    document.getElementById("app").innerHTML = content;
  } catch (err) {
    document.getElementById("app").innerHTML = "<h2>Seite nicht gefunden.</h2>";
  }
}

function router() {
  const hash = location.hash.slice(1) || "/";
  const path = routes[hash] || "views/404.html";
  loadPage(path);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
