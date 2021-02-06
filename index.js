const slider_top = document.querySelector('.carousel_top__slider');
const slider_bottom = document.querySelector('.carousel_bottom__slider');

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let direction;

prev.addEventListener('click', () => {
  direction = -1;
  let width_top = slider_top.firstElementChild.getBoundingClientRect().width;
  slider_top.style.transform = `translateX(-${width_top - 10}px)`;

  let width_bottom = slider_bottom.firstElementChild.getBoundingClientRect().width;
  slider_bottom.style.transform = `translateX(-${width_bottom - 10}px)`;
})

next.addEventListener('click', () => {
  direction = 1;
  let width_top = slider_top.lastElementChild.getBoundingClientRect().width;
  slider_top.style.transform = `translateX(${width_top + 10}px)`;

  let width_bottom = slider_bottom.lastElementChild.getBoundingClientRect().width;
  slider_bottom.style.transform = `translateX(${width_bottom + 10}px)`;
})

slider_top.addEventListener('transitionend', () => {
  if (direction === -1) {
    slider_top.append(slider_top.firstElementChild);
    slider_bottom.append(slider_bottom.firstElementChild);
  } else {
    slider_top.prepend(slider_top.lastElementChild);
    slider_bottom.prepend(slider_bottom.lastElementChild);
  }

  slider_top.style.transitionDuration = '0s';
  slider_bottom.style.transitionDuration = '0s';

  slider_top.style.transform = 'translateX(0)';
  slider_bottom.style.transform = 'translateX(0)';

  setTimeout(() => {
    slider_top.style.transition = 'all 0.5s ease-in-out'
    slider_bottom.style.transition = 'all 0.5s ease-in-out'
  })
})