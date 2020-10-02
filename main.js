const home = document.getElementById("home");
const experience = document.getElementById("experience");
const gallery = document.getElementById("gallery");
const contact = document.getElementById("contact");

const tl = gsap.timeline();

function moveSectionVertical(element, duration, yStart, yEnd) {
  //check that element and valid duration has been assinged
  if (
    typeof element == "object" &&
    typeof duration == "number" &&
    typeof yStart == ("string" || "number") &&
    typeof yEnd == ("string" || "number")
  ) {
    tl.fromTo(
      element,
      duration,
      { y: yStart },
      { y: yEnd, ease: Power2.easeInOut }
    );
  } else console.log("invalid inputs for function");
}

function moveSectionHorizontal(element, duration, xStart, xEnd) {
  //check that element and valid duration has been assinged
  if (
    typeof element == "object" &&
    typeof duration == "number" &&
    typeof yStart == ("string" || "number") &&
    typeof yEnd == ("string" || "number")
  ) {
    tl.fromTo(
      element,
      duration,
      { x: xStart },
      { x: xEnd, ease: Power2.easeInOut }
    );
  } else console.log("invalid inputs for function");
}

function animOpacity(element, aStart, aEnd) {
  tl.FromTo(element);
}

document.addEventListener(
  "DOMContentLoaded",
  moveSectionVertical(home, 2, "-100%", "0%")
);

function animateHome() {
  tl.fromTo(home, 1, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut });
}

function animateExperience() {
  tl.fromTo(experience, 1, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut });
}

function animateGallery() {
  tl.fromTo(gallery, 1, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut });
}

function animateContact() {
  tl.fromTo(contact, 1, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut });
}

//Fire functions with key presses:
window.addEventListener("keydown", (event) => {
  if (tl.isActive()) return;

  switch (event.key) {
    case "ArrowUp":
      animateHome();
      break;
    case "ArrowDown":
      animateExperience();
      break;
    case "ArrowLeft":
      animateGallery();
      break;
    case "ArrowRight":
      animateContact();
      break;
  }
});
