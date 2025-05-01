const login = document.querySelector(".login");

function X() {
  window.location.href = "#statut";
}

login.addEventListener("click", X);

const student = document.querySelector(".statut1");
const prof = document.querySelector(".statut2");

function Y() {
  window.location.href = "loginStu.html";
}

function Z() {
  window.location.href = "loginPro.html";
}

student.addEventListener("click", Y);
prof.addEventListener("click", Z);

const scl = document.querySelector(".btn-scroll");

function Scroll() {
  if (window.scrollY >= 400) {
    scl.style.display = "block";
  } else {
    scl.style.display = "none";
  }
}

function ScrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", Scroll);
scl.addEventListener("click", ScrollTop);

const sidebar = document.querySelector(".slidebar");

function hideSidebar() {
  sidebar.style.display = "none";
}

function showSidebar() {
  sidebar.style.display = "flex";
}
