const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
  
      // Burger Animation
      burger.classList.toggle('toggle');
    });
  
    // Add event listener to nav links
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach((l) => l.firstChild.classList.remove('active'));
        // Add active class to the clicked link
        link.firstChild.classList.add('active');
      });
    });
  };
  
  navSlide();
  