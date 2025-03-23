//Dom elements
let navbar = document.getElementsByClassName("navbar")[0];
let heroTitle = document.getElementById("heroTitle");
let heroSub = document.getElementById("heroSub");
let formSubmitBtn = document.getElementById("formSubmitBtn");
let heroButton1 = document.getElementById("heroButton1");
let heroButton2 = document.getElementById("heroButton2");

//Scroll behavior handlers
window.onscroll = function () {
  handleHeroTitle();
  handleNavbarScroll();
};

//Hides the landing title on scroll for better asthetics
function handleHeroTitle() {
  let heroScrollChangeThreshold = window.innerHeight * 0.05;

  if (window.scrollY >= heroScrollChangeThreshold) {
    heroTitle.classList.add("d-none");
    heroSub.classList.add("d-none");
  } else {
    heroTitle.classList.remove("d-none");
    heroSub.classList.remove("d-none");
  }
}

//fills the navbar bg color when over content to avoid
//looking like a total mess.
function handleNavbarScroll() {
  let navbarScrollChangeThreshold = window.innerHeight * 0.65;

  if (window.scrollY > navbarScrollChangeThreshold) {
    navbar.classList.add("navbarScrollChange");
    // navbar.classList.add("logoTwo");
    // navbar.classList.remove("logo");
  } else {
    navbar.classList.remove("navbarScrollChange");
    // navbar.classList.add("logo");
    // navbar.classList.remove("logoTwo");
  }
}

//Text pop in animation handler
document.addEventListener("DOMContentLoaded", () => {
  let textEnterLeft = document.querySelectorAll(".textEnterLeft");
  let textEnterRight = document.querySelectorAll(".textEnterRight");

  let options = {
    root: null, // Observes the viewport
    rootMargin: "0px",
    threshold: 0.2, // Triggers when 20% of the element is visible
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("textEnterLeft")) {
          entry.target.classList.add("animateEnterLeft");
        } else if (entry.target.classList.contains("textEnterRight")) {
          entry.target.classList.add("animateEnterRight");
        }
        observer.unobserve(entry.target); // Stops observing once animation is triggered
      }
    });
  }, options);

  textEnterLeft.forEach((element) => observer.observe(element));
  textEnterRight.forEach((element) => observer.observe(element));
});

// Button handlers
function submitForm() {
  Swal.fire({
    title: "Submission successful!",
    text: "Were this website live, we would have received your message",
    icon: "success",
  });
  event.preventDefault();
}

function bookNow() {
  Swal.fire({
    title: "Booking now!",
    text: "Were this website live, we would redirect you to our booking page",
    icon: "info",
  });
  event.preventDefault();
}

function test() {
  window.alert("tested");
}

// Event listeners
formSubmitBtn.addEventListener("click", submitForm);
heroButton1.addEventListener("click", bookNow);
heroButton2.addEventListener("click", bookNow);
