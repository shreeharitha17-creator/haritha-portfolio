// MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("show");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");

            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
    let currentSection = "home";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 140) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// AUTOMATIC FOOTER YEAR
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// CONSOLE MESSAGE
console.log("Welcome to Haritha Sri's Portfolio!");