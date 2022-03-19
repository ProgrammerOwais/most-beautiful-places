gsap.registerPlugin(ScrollTrigger);
/************************** HERO SECTION *********************/
const intro = document.querySelector(".main-heading");
const intro2 = document.querySelector(".main-heading2");
intro.innerHTML = intro.textContent.replace(
  /\S/g,
  "<span class ='main-heading-chars'>$&</span>"
);
document.querySelector(".main-heading").style.opacity = "1";
document.querySelector(".main-heading2").style.opacity = "1";
intro2.innerHTML = intro2.textContent.replace(
  /\S/g,
  "<span class ='main-heading-chars'>$&</span>"
);
let introAnimation = gsap.timeline({ ease: "back" });
introAnimation.to(".main-heading-chars", {
  // color: "black",
  y: 20,
  opacity: 1,
  stagger: 0.1,
});
introAnimation.to(".main-heading-chars ,.arrow-div", {
  //   delay: 3,
  color: "darkslategray",
});

/************************** SECTION1 *********************/
const santoriniHeading = document.querySelector(".santorini-heading");
const santoriniPara = document.querySelector(".santorini-para");
santoriniHeading.innerHTML = santoriniHeading.textContent.replace(
  /\S/g,
  "<span class = 'santorini'>$&</span>"
);
santoriniPara.innerHTML = santoriniPara.textContent.replace(
  /\S/g,
  "<span class = 'santorini'>$&</span>"
);
let place1Text = gsap.timeline();
place1Text.from(".santorini", {
  opacity: 0,
  fontSize: "2rem",
  fontWeight: "900",
  stagger: 0.1,
});
let sections1 = gsap.utils.toArray(".box-a");
gsap.to(sections1, {
  xPercent: -100 * (sections1.length - 1),
  ease: "none",
  scrollTrigger: {
    start: "top top",
    trigger: ".place1-section",
    scrub: 1,
    // markers: true,
    pin: true,
    snap: 1 / (sections1.length - 1),
    end: "+=100%",
  },
});
// let time = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".section1",
//     start: "top top",
//     end: "+=100%",
//     markers: true,
//     scrub: true,
//     pin: true,
//   },
// });
// time.to(sections1, {
//   xPercent: -100 * (sections1.length - 1),
//   ease: "none",
// });
// .to(".box2", {
//   xPercent: -100 * (sections1.length - 1),
//   ease: "none",
// })
// .to(".box3", {
//   xPercent: -100 * (sections1.length - 1),
//   ease: "none",
// });
let sections2 = gsap.utils.toArray(".box-b");
gsap.to(sections2, {
  xPercent: 100 * (sections2.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".place2-section",
    scrub: 1,
    pin: true,
    snap: 1 / (sections2.length - 1),
    // markers: true,
    start: "top top",
    end: "+=100%",
  },
});

gsap.utils.toArray(".box-c").forEach((box) => {
  ScrollTrigger.create({
    trigger: box,
    start: "top top",
    end: "+=100%",
    // markers: true,
    pin: true,
    pinSpacing: false,
  });
});
let section4 = gsap.utils.toArray(".box-d");
gsap.to(section4, {
  ease: "none",
  xPercent: -100 * (section4.length - 1),
  scrollTrigger: {
    trigger: ".place4-section",
    start: "top top",
    end: "+=100%",
    // markers: true,
    pin: true,
    scrub: 1,
    snap: 1 / (section4.length - 1),
  },
});
let section5 = gsap.utils.toArray(".box-f");
gsap.to(section5, {
  ease: "none",
  xPercent: 100 * (section5.length - 1),
  scrollTrigger: {
    trigger: ".place5-section",
    start: "top top",
    end: "+=100%",
    // markers: true,
    pin: true,
    scrub: 1,
    snap: 1 / (section5.length - 1),
  },
});
gsap.utils.toArray(".box-g").forEach((box) => {
  ScrollTrigger.create({
    trigger: box,
    start: "top top",
    end: "+=100%",
    // markers: true,
    pin: true,
    pinSpacing: false,
  });
});

gsap.utils.toArray(".foot-container").forEach((box) => {
  ScrollTrigger.create({
    trigger: box,
    start: "top top",
    end: "100%",
    // markers: true,
    pin: true,
    pinSpacing: false,
  });
});
/***************************** PLACE 3 CONTAINER *****************/

// gsap.from(".place3-container", {
//   ease: "none",
//   y: -50,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".place3-container",
//     start: "top top",
//     markers: true,
//     end: "5 top",
//     border: "2px solid yellow",
//   },
// });

/****************************** FORM BOOKING SECTION ***********/
let formDiv = document.querySelector(".form-container");
let formCloseBtn = document.querySelector(".close-btn");
let bookingBtn = document.querySelector(".booking-btn");
formCloseBtn.addEventListener("click", () => {
  formDiv.classList.toggle("form-toggle");
});
bookingBtn.addEventListener("click", () => {
  formDiv.classList.toggle("form-toggle");
});
