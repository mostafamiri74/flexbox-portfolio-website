const about = document.getElementById("about");
const services = document.getElementById("services");
const portfolio = document.getElementById("portfolio");
const weblog = document.getElementById("weblog");
const call = document.getElementById("call");
const nav = document.getElementById("nav");
const link = document.querySelectorAll(".nav__link");

/////////////////

// navigation scroll

/////////////////

window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (scroll >= 100) {
    nav.classList.add("nav-scroll");
    for (let l of link) {
      l.classList.add("nav-scroll__link");
    }
  } else {
    nav.classList.remove("nav-scroll");
    for (let l of link) {
      l.classList.remove("nav-scroll__link");
    }
  }

  if (scroll < about.offsetTop - 70) {
    for (let l of link) {
      l.classList.remove("nav__active");
    }
    link[0].classList.add("nav__active");
  }

  if (about.offsetTop - 70 <= scroll && scroll < services.offsetTop - 70) {
    for (let l of link) {
      l.classList.remove("nav__active");
    }
    link[1].classList.add("nav__active");
  }

  if (services.offsetTop - 70 <= scroll && scroll < portfolio.offsetTop - 70) {
    for (let l of link) {
      l.classList.remove("nav__active");
    }
    link[2].classList.add("nav__active");
  }

  if (portfolio.offsetTop - 70 <= scroll && scroll < weblog.offsetTop - 70) {
    for (let l of link) {
      l.classList.remove("nav__active");
    }
    link[3].classList.add("nav__active");
  }

  if (weblog.offsetTop - 70 <= scroll && scroll < call.offsetTop - 70) {
    for (let l of link) {
      l.classList.remove("nav__active");
    }
    link[4].classList.add("nav__active");
  }

  if (call.offsetTop - 70 <= scroll) {
    for (let l of link) {
      l.classList.remove("nav__active");
    }
    link[5].classList.add("nav__active");
  }
});

let link2 = document.querySelectorAll(".nav__link");
for (let i of link2) {
  i.addEventListener("click", () => {
    for (let j of link2) {
      j.classList.remove("nav__active");
    }
    i.classList.add("nav__active");
  });
}

let navlist = document.getElementsByClassName("nav__list");

document.getElementById("checkbox").onchange = function (event) {
  if (event.target.checked) {
    navlist[0].classList.add("nav__list__column");
  } else {
    navlist[0].classList.remove("nav__list__column");
  }
};

for (let l of link) {
  l.addEventListener("click", () => {
    navlist[0].classList.remove("nav__list__column");
  });
}

/////////////////

// Filter Gallery

/////////////////

const filterContainer = document.querySelectorAll(".section-portfolio__link");
let galleryItems = document.querySelectorAll(".section-portfolio__card");

for (let f of filterContainer) {
  f.addEventListener("click", (event) => {
    for (let l of filterContainer) {
      l.classList.remove("section-portfolio__active");
    }
    event.target.classList.add("section-portfolio__active");
    const filterValue = event.target.getAttribute("data-filter");
    console.log(filterValue);
    galleryItems.forEach((item) => {
      if (
        item.getAttribute("data-category") === filterValue ||
        filterValue === "all"
      ) {
        item.classList.remove("section-portfolio__card-hide");
        item.classList.add("section-portfolio__card-show");
      } else {
        item.classList.remove("section-portfolio__card-show");
        item.classList.add("section-portfolio__card-hide");
      }
    });
  });
}
