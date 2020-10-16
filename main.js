let getById = (id) => document.getElementById(id);
const home = getById("home");
const experience = getById("experience");
const gallery = getById("gallery");
const contact = getById("contact");

let getByClass = (className) => document.getElementsByClassName(className);

const arrowUp = getByClass("up")[0];
const arrowRight = getByClass("right")[0];
const arrowDown = getByClass("down")[0];
const arrowLeft = getByClass("left")[0];

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

function homeTimeLine() {
  if (activePage == home) return;
  masterTl
    .add(animateOut(activePage))
    .add(animateHome)
    .add(resetElem(resetElement), "+=2");
}

function experienceTimeLine() {
  if (activePage == experience) return;
  masterTl
    .add(animateOut(activePage))
    .add(animateExperience)
    .add(resetElem(resetElement), "+=2");
}

function galleryTimeLine() {
  if (activePage == gallery) return;
  masterTl
    .add(animateOut(activePage))
    .add(animateGallery)
    .add(resetElem(resetElement), "+=2");
}

function contactTimeLine() {
  if (activePage == contact) return;
  masterTl
    .add(animateOut(activePage))
    .add(animateContact)
    .add(resetElem(resetElement), "+=2");
}

//Fire functions with key presses:
window.addEventListener("keydown", (event) => {
  if (masterTl.isActive()) return;

  switch (event.key) {
    case "ArrowUp":
      homeTimeLine();
      break;
    case "ArrowRight":
      galleryTimeLine();
      break;
    case "ArrowDown":
      contactTimeLine();
      break;
    case "ArrowLeft":
      experienceTimeLine();
      break;
  }
});

arrowUp.addEventListener("click", homeTimeLine);
arrowRight.addEventListener("click", galleryTimeLine);
arrowDown.addEventListener("click", contactTimeLine);
arrowLeft.addEventListener("click", experienceTimeLine);

document.addEventListener("DOMContentLoaded", animateHome());
