/*const slide = document.querySelectorAll('.slide');



for (const i = 0; i < slide.length; i++) {
  slide[i].onclick = toggleAnimation;
  slide[i].style.webkitAnimationPlayState = 'running';
}

function toggleAnimation() {
  let style;
  for (let i = 0; i < slide.length; i++) {
    style = slide[i].style;
    if (style.webkitAnimationPlayState === 'running') {
      style.webkitAnimationPlayState = 'paused';
      document.body.className = 'paused';
    } else {
      style.webkitAnimationPlayState = 'running';
      document.body.className = '';
    }
  }
}*/