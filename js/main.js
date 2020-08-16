// Animation
let animation = bodymovin.loadAnimation({
  container: document.getElementById('animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/smollerAnimation.json',
});

// If JS is enabled, these become visible
document.getElementById('animation').style.display = 'flex';
document.getElementById('hamburger').style.display = 'block';

function toggleMobileNav(hamburger) {
  hamburger.classList.toggle('change');
  if (hamburger.classList.contains('change')) {
    document.getElementById('mobileNavBar').style.display = 'flex';
    document.querySelectorAll('.hamburger-bar').forEach((bar) => {
      bar.style.backgroundColor = '#291f3b';
    });
  } else {
    document.getElementById('mobileNavBar').style.display = 'none';
    document.querySelectorAll('.hamburger-bar').forEach((bar) => {
      bar.style.backgroundColor = '#f8f8f8';
    });
  }
}
