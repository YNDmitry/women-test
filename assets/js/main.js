const burgerItem = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");

burgerItem.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.opacity = "0";
    setTimeout(() => {
      menu.style.display = "none";
    }, 250);
    document.body.style.overflow = "visible";
  } else {
    menu.style.display = "flex";
    setTimeout(() => {
      menu.style.opacity = "1";
    }, 0);
    document.body.style.overflow = "hidden";
  }
});

document.querySelectorAll(".header-link").forEach(($el) => {
  if (window.innerWidth < 1000) {
    $el.addEventListener("click", () => {
      menu.style.opacity = "0";
      setTimeout(() => {
        menu.style.display = "none";
      }, 250);
      document.body.style.overflow = "visible";
    });
  }
});

document.querySelectorAll(".header__nav_close").forEach(($el) => {
  $el.addEventListener("click", () => {
    menu.style.opacity = "0";
    setTimeout(() => {
      menu.style.display = "none";
    }, 250);
    document.body.style.overflow = "visible";
  });
});
