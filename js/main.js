function updateBodyPadding() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  let headerHeight = 0;
  let footerHeight = 0;
  if (header) {
    headerHeight = header.offsetHeight;
  }
  if (footer) {
    footerHeight = footer.offsetHeight;
  }
  document.body.style.paddingTop = `${headerHeight + 1}px`;
  document.body.style.paddingBottom = `${footerHeight + 1}px`;
}

// Initial bei load und resize
window.addEventListener("load", updateBodyPadding);
window.addEventListener("resize", updateBodyPadding);

// Beobachte Größenänderungen des Headers und Footers
window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  if ("ResizeObserver" in window) {
    if (header) {
      const headerObserver = new ResizeObserver(updateBodyPadding);
      headerObserver.observe(header);
    }
    if (footer) {
      const footerObserver = new ResizeObserver(updateBodyPadding);
      footerObserver.observe(footer);
    }
  }
});
