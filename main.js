const home = document.getElementById("home");
const experience = document.getElementById("experience");
const gallery = document.getElementById("gallery");
const contact = document.getElementById("contact");

let activePage;

const tl = gsap.timeline();

//fadeout function for outros for all elements
function fadeOut(element) {
  tl.fromTo(element, 3, { opacity: 1 }, { opacity: 0 });
}

//animate different pages in different manner
function animateHome() {
  tl.set(home, { zIndex: 1 }, 0.25).fromTo(
    home,
    1,
    { y: "-100%" },
    { y: "0%", ease: Power2.easeInOut }
  );
  activePage = home;
}

function animateExperience() {
  tl.set(experience, { zIndex: 3 }, 0.25).fromTo(
    experience,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    1
  );
}

function animateGallery() {
  tl.fromTo(gallery, 1, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut });
}

function animateContact() {
  tl.fromTo(contact, 1, { y: "0%" }, { y: "100%", ease: Power2.easeInOut });
}

//Fire functions with key presses:
window.addEventListener("keydown", (event) => {
  if (tl.isActive()) return;

  switch (event.key) {
    case "ArrowUp":
      fadeOut(activePage);
      animateHome();
      break;
    case "ArrowLeft":
      animateExperience();
      break;
    case "ArrowRight":
      animateGallery();
      break;
    case "ArrowDown":
      animateContact();
      break;
  }
});

document.addEventListener("DOMContentLoaded", animateHome());
