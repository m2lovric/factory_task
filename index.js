const sliders = document.querySelectorAll('.slider');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let direction;

const transitionEnd = (slider) => {
  slider.addEventListener('transitionend', () => {  
    slider.classList.remove('transition');

    if (direction === 1) {
      setTimeout(() => {
        slider.style.transform = 'translateX(0)';
        slider.prepend(slider.lastElementChild);
      });
    }
  })
}

const slide = (slider) => {
  if (direction === -1) {
    let slideWidth = slider.firstElementChild.getBoundingClientRect().width;
    slider.style.transform = `translateX(${slideWidth + 10}px)`;
    slider.append(slider.firstElementChild);

    setTimeout(() => {
      slider.classList.add('transition');
      setTimeout(() => {
        slider.style.transform = 'translateX(0)';
      });
    });

  } else {
    slider.classList.add('transition');

    let slideWidth = slider.lastElementChild.getBoundingClientRect().width;
    slider.style.transform = `translateX(${slideWidth + 10}px)`;
  }
}

prev.addEventListener('click', () => {
  direction = -1;
  sliders.forEach(slider => slide(slider));
});

next.addEventListener('click', () => {
  direction = 1;
  sliders.forEach(slider => slide(slider));
});

sliders.forEach(slider => transitionEnd(slider));
