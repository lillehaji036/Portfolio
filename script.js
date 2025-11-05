const name = "Manhal Alothman";
const role = "IT-Developer";
const welcome = document.getElementById("welcome");
welcome.textContent = `Welcome to my portfolio, my name is ${name} and my role is ${role} `;

const myObject = {
  name: "Manhal Alothman",
  age: "20",
  skills: ["HTML", "CSS", "JavaScript"],
  city: "Stockholm",
};

// * Dark / Light mode /*

const theme = document.getElementById("toggle-btn");
const body = document.body;
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

theme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// * Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// * Progress
const progress = document.querySelector("progress");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  window.scrollY;
});

// * Loop Text
const words = ["Hello", "and", "welcome", "to", "my", "portfolio!"];
let i = 0;
setInterval(() => {
  document.getElementById("name").textContent = words[i];
  i++;

  if (i >= words.length) {
    i = 0;
  }
}, 900);

// * Star Loop
const starContainer = document.getElementById("starLoop");
for (let i = 0; i < 300; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.right = Math.random() * 85 + "vw";
  star.style.top = Math.random() * -100 + "vh";
  star.style.animationDelay = Math.random() * 4 + "s";
  starContainer.appendChild(star);
}
