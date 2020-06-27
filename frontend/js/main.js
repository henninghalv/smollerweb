// Animation
let animation = bodymovin.loadAnimation({
  container: document.getElementById('animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/smollerAnimation.json',
});

document.getElementById('animation').style.display = 'flex';
