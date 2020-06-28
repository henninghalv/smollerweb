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
document.getElementById('openMobile').style.display = 'block';

function openMobileNav() {
  document.getElementById('openMobile').style.display = 'none';
  document.getElementById('closeMobile').style.display = 'block';
  document.getElementById('mobileNavBar').style.display = 'flex';
}

function closeMobileNav() {
  document.getElementById('openMobile').style.display = 'block';
  document.getElementById('closeMobile').style.display = 'none';
  document.getElementById('mobileNavBar').style.display = 'none';
}
