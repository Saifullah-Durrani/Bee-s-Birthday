/* -------------------------
   Background Slideshow
------------------------- */
const slides = document.querySelectorAll('.bg-slide');
let current = 0;
slides.forEach((s, i) => {
  s.style.backgroundImage = `url('${s.dataset.bg}')`;
  if (i === 0) s.classList.add('active');
});

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);

/* -------------------------
   Confetti Generator
------------------------- */
const confettiContainer = document.getElementById('confetti');
function spawnConfetti(count = 60) {
  const colors = ['#FDEBD0','#F8B9A8','#F9D7B0','#F7A8A8','#F4C7AB','#FFF1D6'];
  const vw = window.innerWidth;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'piece';
    const size = 8 + Math.random() * 12;
    el.style.width = `${size}px`;
    el.style.height = `${size * (0.7 + Math.random()*0.3)}px`;
    el.style.left = `${Math.random() * vw}px`;
    el.style.top = `${-10 - Math.random()*20}vh`;
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    const dur = 4 + Math.random() * 6;
    const delay = Math.random() * 3;
    el.style.animationDuration = `${dur}s`;
    el.style.animationDelay = `${delay}s`;
    el.style.transform = `rotate(${Math.random()*360}deg)`;
    confettiContainer.appendChild(el);

    setTimeout(() => el.remove(), (dur + delay) * 1000);
  }
}
spawnConfetti(70);
setInterval(() => spawnConfetti(40), 3500);

/* -------------------------
   Music Button
------------------------- */
const music = document.getElementById('birthdayMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '⏸ Pause Music';
    musicBtn.setAttribute('aria-pressed', 'true');
  } else {
    music.pause();
    musicBtn.textContent = '🎵 Play Music';
    musicBtn.setAttribute('aria-pressed', 'false');
  }
});

// When music ends, reset button state
music.addEventListener('ended', () => {
  musicBtn.textContent = '🎵 Play Music';
  musicBtn.setAttribute('aria-pressed', 'false');
});

// Allow ENTER or SPACE to toggle
musicBtn.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    musicBtn.click();
  }
});
