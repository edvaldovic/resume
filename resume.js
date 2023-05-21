const images = document.querySelectorAll('.images');
const buttonLeft = document.querySelector('.btn__left');
const buttonRight = document.querySelector('.btn__right');

let position = 0;

function moveImagesLeft() {
  position += 400;
  if (position > 1) {
    position = -3200;
  }

  images.forEach((image) => {
    image.setAttribute('style', `transform: transLateX(${position}px)`);
  })
}

function moveImagesRight() {
  position -= 400;
  if (position < -3200) {
    position = 0;
  }

  images.forEach((image) => {
    image.setAttribute('style', `transform: transLateX(${position}px)`);
  })
}


buttonLeft.addEventListener('click', moveImagesLeft);
buttonRight.addEventListener('click', moveImagesRight);
