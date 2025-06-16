AOS.init({ duration: 1000 });

function togglePanel() {
  const panel = document.getElementById("sidePanel");
  panel.style.left = panel.style.left === "0px" ? "-250px" : "0";
}

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const sidePanel = document.getElementById("sidePanel");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    sidePanel.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    sidePanel.classList.remove("scrolled");
  }

  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
