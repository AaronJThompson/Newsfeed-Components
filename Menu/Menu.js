
const toggleMenu = () => {
  if (menu.classList.contains("menu--open")){
    TweenMax.to(menu, .3, {width: "0px"});
  } else {
    TweenMax.to(menu, .3, {width: "350px"});
  }
  menu.classList.toggle("menu--open");
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener("click", toggleMenu);

document.querySelector(".articles").addEventListener("click", e => {
  if (menu.classList.contains("menu--open")){
    toggleMenu();
  }
})