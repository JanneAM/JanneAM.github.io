const home = document.getElementById("home");
const experience = document.getElementById("experience");
const gallery = document.getElementById("gallery");
const contact = document.getElementById("contact");

//initialize function for getting css variable values to be used in the animations
let getVariableValue = (variable) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable);

const homeContentColor = getVariableValue("--home-content-color");
const galleryContentColor = getVariableValue("--gallery-content-color");
const contactContentColor = getVariableValue("--contact-content-color");
const experienceContentColor = getVariableValue("--experience-content-color");

let activePage;
let resetElement;
let masterTl = gsap.timeline();

//animate different pages in different manner
function animateHome() {
  const tl = gsap.timeline();

  tl.set(home, { zIndex: 2, opacity: 1 }, 1)
    .fromTo(home, 1, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut })
    .to("html", { "--active-content-color": homeContentColor }, "-=0.5");
  activePage = home;

  return tl;
}

function animateGallery() {
  const tl = gsap.timeline();

  tl.set(gallery, { zIndex: 2, opacity: 1 }, 1)
    .fromTo(gallery, 1, { x: "100%" }, { x: "0%", ease: Power2.easeInOut })
    .to("html", { "--active-content-color": galleryContentColor }, "-=0.5");
  activePage = gallery;

  return tl;
}

function animateContact() {
  const tl = gsap.timeline();

  tl.set(contact, { zIndex: 2, opacity: 1 }, 1)
    .fromTo(contact, 1, { y: "100%" }, { y: "0%", ease: Power2.easeInOut })
    .to("html", { "--active-content-color": contactContentColor }, "-=0.5");
  activePage = contact;

  return tl;
}

function animateExperience() {
  const tl = gsap.timeline();

  tl.set(experience, { zIndex: 2, opacity: 1 }, 1)
    .fromTo(experience, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
    .to("html", { "--active-content-color": experienceContentColor }, "-=0.5");
  activePage = experience;

  return tl;
}

//fadeout function for outros for all elements
function animateOut(element) {
  const tl = gsap.timeline();
  const content = element.querySelector(".content");

  tl.set(element, { zIndex: 1 }).to(content, 1, { opacity: 0, y: 60 });
  resetElement = element;
  return tl;
}

//reset element arrtibutes for future animations
function resetElem(element) {
  const tl = gsap.timeline();
  const content = element.querySelector(".content");

  tl.set(element, { zIndex: 0 }).set(content, { opacity: 1 });

  return tl;
}

//Fire functions with key presses:
window.addEventListener("keydown", (event) => {
  if (masterTl.isActive()) return;

  switch (event.key) {
    case "ArrowUp":
      if (activePage == home) break;
      masterTl
        .add(animateOut(activePage))
        .add(animateHome)
        .add(resetElem(resetElement), "+=2");
      break;
    case "ArrowLeft":
      if (activePage == experience) break;
      masterTl
        .add(animateOut(activePage))
        .add(animateExperience)
        .add(resetElem(resetElement), "+=2");
      break;
    case "ArrowRight":
      if (activePage == gallery) break;
      masterTl
        .add(animateOut(activePage))
        .add(animateGallery)
        .add(resetElem(resetElement), "+=2");
      break;
    case "ArrowDown":
      if (activePage == contact) break;
      masterTl
        .add(animateOut(activePage))
        .add(animateContact)
        .add(resetElem(resetElement), "+=2");
      break;
  }
});

document.addEventListener("DOMContentLoaded", animateHome());
