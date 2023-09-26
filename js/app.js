// function handle when scroll
function handleScroll() {
  sections.forEach((sec) => {
    const idLiTag = `li${sec.getAttribute("id").substring(7, 8)}`;
    const liTag = document.getElementById(idLiTag);
    const topSec = sec.getBoundingClientRect().top;
    const bottomSec = sec.getBoundingClientRect().bottom;
    console.log(topSec, bottomSec);
    if (topSec >= 0 && bottomSec <= window.innerHeight) {
      liTag.classList.add("active");
    } else {
      liTag.classList.remove("active");
    }
  });
}
// function handle when click navigate
function handleClick(e) {
  e.preventDefault();
  console.log("e", e.target.getAttribute("id").substring(2, 3));
  const idSectionScroll = `section${e.target
    .getAttribute("id")
    .substring(2, 3)}`;
  document
    .getElementById(`${idSectionScroll}`)
    .scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}

// Get Element in html
const header = document.getElementById("header");
const navHeader = document.createElement("nav");
const ulHeader = document.createElement("ul");
const sections = document.querySelectorAll("main > section");
// Make list section of navigate
sections.forEach((sec, index) => {
  const liHeader = document.createElement("li");
  liHeader.setAttribute("id", `li${sec.getAttribute("id").substring(7, 8)}`);
  liHeader.innerHTML = `Section ${index + 1}`;
  liHeader.classList.add("li_nav");
  ulHeader.appendChild(liHeader);
});
ulHeader.classList.add("ul_nav");
navHeader.appendChild(ulHeader);
// Add naviagte into DOM
header.appendChild(navHeader);
// listener when click naviagte
ulHeader.addEventListener("click", handleClick);
document.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);
