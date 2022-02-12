const balls = document.getElementsByClassName('ball');

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

document.onmousemove = (event) => {
  const x1 = clamp(((event.clientX * 100) / window.innerWidth)+13,15,85) + '%';
  const y1 = clamp((event.clientY * 100) / window.innerHeight,20,75) + '%';
  const x2 = clamp(((event.clientX * 100) / window.innerWidth)-13,15,85) + '%';
  const y2 = clamp((event.clientY * 100) / window.innerHeight,20,75) + '%';

  for (ball in balls) {
    
  }
  balls[0].style.left = x1;
  balls[0].style.top = y1;
  balls[0].transform = 'translate(-' + x1 + ',-' + y1 + ')';
  balls[1].style.left = x2;
  balls[1].style.top = y2;
  balls[1].transform = 'translate(-' + x2 + ',-' + y2 + ')';
};
