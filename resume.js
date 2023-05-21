const images = document.querySelectorAll('.images');
const buttonLeft = document.querySelector('.btn__left');
const buttonRight = document.querySelector('.btn__right');

let position = 0;

function moveImagesLeft() {
  position += 350;
  if (position > 1) {
    position = -2800;
  }

  images.forEach((image) => {
    image.setAttribute('style', `transform: transLateX(${position}px)`);
  })
}

function moveImagesRight() {
  position -= 350;
  if (position < -2800) {
    position = 0;
  }

  images.forEach((image) => {
    image.setAttribute('style', `transform: transLateX(${position}px)`);
  })
}


buttonLeft.addEventListener('click', moveImagesLeft);
buttonRight.addEventListener('click', moveImagesRight);

