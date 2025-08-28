// helper
const qs =(sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx =document) => Array.from(ctx.querySelectorAll(sel));

// theme toogle

const html = document.documentElement;
const themeToggle = qs("#theme-toggle");

const setTheme = (theme) => {
    html.setAttribute('data-bs-theme',theme);
    localStorage.setItem("theme",theme);
    themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
};

(()=> {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =window.matchMedia("(prefers-color-scheme:dark)").matches;
    setTheme(savedTheme || (prefersDark ? "dark" : "light"));

})();

themeToggle.addEventListener("click",() => {
    const currentTheme = html.getAttribute("data-bs-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark" )
});

// nav link

const navLinks = qsa(".nav-link");
const sections = ["home", "about", "projects", "contact"].map(id => qs("#" + id));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + id)
        );
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0.1 }
);
sections.forEach(sec => observer.observe(sec));


// reveal

const reveals = qsa (".reveal");
const revealObs = new IntersectionObserver (
    (entries, obs) => {
        entries.forEach((e) => {
            if(e.isIntersecting){
                e.target.classList.add("on");
                obs.unobserve(e.target);
            };
        });
    },{threshold: 0.1}
);
reveals.forEach(el => revealObs.observe(el));

// project 

const chips = qsa(".chip");
const cards = qsa(".project");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => {
      c.classList.toggle("active", c === chip);
      c.setAttribute("aria-selected", c === chip);
    });
    const filter = chip.dataset.filter;
    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !match);
    });
  });
});