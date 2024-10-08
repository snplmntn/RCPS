"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const header = document.querySelector(".header");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////////////
// PAGE NAVIGATION

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    if (id.startsWith("#")) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = id;
    }
  }
});

//tabbed component

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  //Active tab
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu Fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// Sticky navigation
const mobileNav = document.querySelector(".nav-links");
const navHeight = mobileNav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    mobileNav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
    mobileNav.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  rootMargin: `-${navHeight}px`,
  threshold: 0,
});
headerObserver.observe(header);

// Slider
const slider = function () {
  let firstLoad = true;
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length - 1;
  let autoSlideInterval;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // Functions
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  const startAutoSlide = function () {
    autoSlideInterval = setInterval(nextSlide, 5000);
  };

  const resetAutoSlide = function () {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  init();

  // Slide next to right
  btnRight.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  // Slide next to left
  btnLeft.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    else if (e.key === "ArrowRight") nextSlide();
    resetAutoSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
      resetAutoSlide();
    }
  });

  if (firstLoad) {
    firstLoad = false;
    startAutoSlide();
  } else {
    startAutoSlide();
  }
};

slider();

const bestProductSlider = (container) => {
  const wrappers = document.querySelectorAll(container);
  const bestProducts = document.querySelectorAll(".best-product");
  const products = document.querySelectorAll(".product");

  wrappers.forEach((wrapper) => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let scrolled = false;

    wrapper.addEventListener("mousedown", (e) => {
      isDown = true;
      wrapper.classList.add("active");
      startX = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
    });

    wrapper.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wrapper.offsetLeft;
      const walk = x - startX;
      wrapper.scrollLeft = scrollLeft - walk;
      scrolled = true;
    });

    wrapper.addEventListener("mouseleave", () => {
      isDown = false;
      wrapper.classList.remove("active");
    });

    wrapper.addEventListener("mouseup", () => {
      isDown = false;
      wrapper.classList.remove("active");
    });

    bestProducts.forEach((product) => {
      product.addEventListener("click", (e) => {
        const id = product.getAttribute("href");
        if (!scrolled) window.location.href = id;
      });
    });

    products.forEach((product) => {
      product.addEventListener("click", (e) => {
        const id = product.getAttribute("href");
        if (!scrolled) window.location.href = id;
      });
    });
  });
};

bestProductSlider(".product-container");

const navMobileToggle = () => {
  const button = document.querySelector(".icon");
  const navLinks = document.querySelector(".nav-links");

  button.addEventListener("click", () => {
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  });
};

navMobileToggle();
