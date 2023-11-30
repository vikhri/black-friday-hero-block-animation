import './style.css'


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

})