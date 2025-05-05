 const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate each section on scroll
gsap.utils.toArray('section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// Animate images with zoom-in effect
gsap.utils.toArray('section img').forEach(img => {
  gsap.from(img, {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: img,
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  });
});


