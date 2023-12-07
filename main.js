import './style.css'

const openMenuButton = document.querySelector(".js-menu-open-button");
const closeMenuButton = document.querySelector(".js-menu-close-button");
const menu = document.querySelector(".js-menu");

const images = document.querySelectorAll(".js-anim-image");

images.forEach((img) => {
  img.addEventListener('mouseover', (event) => {

      const offsetX = (event.clientX - img.getBoundingClientRect().left - img.clientWidth / 2) / 2;
      const offsetY = (event.clientY - img.getBoundingClientRect().top - img.clientHeight / 2) / 2;

      img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'translate(0, 0)';
  });

});

function openMenu() {
  menu.classList.add("open");
  document.addEventListener("click", closeMenuOutside);
}

function closeMenu() {
  menu.classList.remove("open");
  document.removeEventListener("click", closeMenuOutside);
}

function closeMenuOutside(event) {
  if (!menu.contains(event.target) && event.target !== openMenuButton) {
    closeMenu();
  }
}


openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

