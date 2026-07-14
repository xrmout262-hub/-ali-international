// Ali International Website

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const cards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(60px)";
  card.style.transition = "all .8s ease";
  observer.observe(card);
});