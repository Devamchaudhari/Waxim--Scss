var menu = document.getElementById(menuicon);
// side menu function
function sidemenu() {
  if (window.innerWidth < 632) {
    document.getElementById('sidemenu').style.width = '100%';
  } else {
    document.getElementById('sidemenu').style.width = '650px';
  }
  document.getElementById('scroll-up').classList.remove('arrow-scroll');
  document.getElementById('sidemenu').style.height = '100%';
  document.getElementById('menu-blur').style.filter = 'blur(3px)';
  document.getElementById('hero-container').style.filter = 'blur(3px)';
  document.getElementById('brand').style.filter = 'blur(3px)';
  document.getElementById('info-container').style.filter = 'blur(3px)';
  document.getElementById('digital-container').style.filter = 'blur(3px)';
  document.getElementById('teams').style.filter = 'blur(3px)';
  document.getElementById('portfolio').style.filter = 'blur(3px)';
  document.getElementById('pricing').style.filter = 'blur(3px)';
  document.getElementById('testimonal-container').style.filter = 'blur(3px)';
  document.getElementById('mobile').style.filter = 'blur(3px)';
  document.getElementById('design-container').style.filter = 'blur(3px)';
  document.getElementById('dream').style.filter = 'blur(3px)';
  document.getElementById('contact').style.filter = 'blur(3px)';
  document.getElementById('google-map-container').style.filter = 'blur(3px)';
  document.getElementById('footer-container').style.filter = 'blur(3px)';
}
// Background blur function
function closeNav() {
  document.getElementById('scroll-up').classList.add('arrow-scroll');
  document.getElementById('sidemenu').style.width = '0';
  document.getElementById('menu-blur').style.filter = 'blur(0px)';
  document.getElementById('hero-container').style.filter = 'blur(0px)';
  document.getElementById('brand').style.filter = 'blur(0px)';
  document.getElementById('info-container').style.filter = 'blur(0px)';
  document.getElementById('digital-container').style.filter = 'blur(0px)';
  document.getElementById('teams').style.filter = 'blur(0px)';
  document.getElementById('portfolio').style.filter = 'blur(0px)';
  document.getElementById('pricing').style.filter = 'blur(0px)';
  document.getElementById('testimonal-container').style.filter = 'blur(0px)';
  document.getElementById('mobile').style.filter = 'blur(0px)';
  document.getElementById('design-container').style.filter = 'blur(0px)';
  document.getElementById('dream').style.filter = 'blur(0px)';
  document.getElementById('contact').style.filter = 'blur(0px)';
  document.getElementById('google-map-container').style.filter = 'blur(0px)';
  document.getElementById('footer-container').style.filter = 'blur(0px)';
}

// Scroll function

window.addEventListener('scroll', function () {
  let nav = document.getElementById('nav');
  let scrollarrow = document.getElementById('scroll-up');
  let windowscroll = window.scrollY > 400;
  if (windowscroll) {
    nav.classList.toggle('navbar-scroll', windowscroll);
    scrollarrow.classList.toggle('arrow-scroll', windowscroll);
  } else {
    nav.classList.remove('navbar-scroll');
    scrollarrow.classList.remove('arrow-scroll', windowscroll);
  }
});

//arrow onclick function

document.addEventListener('click', function (event) {
  var target = event.target;
  if (target.classList.contains('scroll-top-arrow')) {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
});
