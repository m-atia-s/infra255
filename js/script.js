/* ===================================================
   INFRA255 - SCRIPT CORE
=================================================== */

/* =========================
   LOADER (Terminal Boot)
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.8s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2000);
});

/* =========================
   SMOOTH SCROLL (Nav links)
========================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* =========================
   NAVBAR EFFECT ON SCROLL
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(8,16,24,0.95)";
        header.style.backdropFilter = "blur(20px)";
        header.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
    } else {
        header.style.background = "rgba(8,16,24,0.80)";
        header.style.backdropFilter = "blur(16px)";
        header.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
    }
});

/* =========================
   FADE IN ON SCROLL
========================= */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
