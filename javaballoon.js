const balloonContainer = document.getElementById('balloon-container');
const colors = ['#ff4d6d', '#f15bb5', '#9b5de5', '#00f5d4', '#caffbf'];

const words = "Happy Birthday Saloni".split(" ");
let wordIndex = 0;

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 90 + 'vw';
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;

  balloon.addEventListener('click', (e) => {
    createBurst(e.clientX, e.clientY, balloon.style.backgroundColor);
    balloon.style.animation = 'pop 0.3s ease-out forwards';
    setTimeout(() => balloon.remove(), 300);
  });

  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    if (balloon.parentElement) balloon.remove();
  }, 6000);
}

setInterval(createBalloon, 800);
function createBurst(x, y, color) {
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'burst';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.position = 'fixed';
      particle.style.backgroundColor = color;
  
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 40 + 20;
      const dx = Math.cos(angle) * distance + 'px';
      const dy = Math.sin(angle) * distance + 'px';
  
      particle.style.setProperty('--dx', dx);
      particle.style.setProperty('--dy', dy);
  
      document.body.appendChild(particle);
  
      setTimeout(() => particle.remove(), 600);
    }
  }
  document.getElementById('nextBtn').addEventListener('click', () => {
    window.location.href = 'ajab.html'; // or any URL you want
  });
  
