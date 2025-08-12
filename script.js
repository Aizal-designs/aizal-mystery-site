// 🌟 Generate floating stars
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.animationDuration = `${1 + Math.random() * 2}s`;

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);
}

// 🌌 Keep generating stars every 200ms
setInterval(createStar, 200);

// 🎵 Optional: Background music autoplay
const bgMusic = new Audio("cosmic.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;
bgMusic.autoplay = true;

// Start music only after user interaction (required on most browsers)
document.body.addEventListener("click", () => {
  bgMusic.play().catch(e => {
    console.log("Music play blocked until interaction.");
  });
}, { once: true });

// 🎯 Smooth scroll for buttons or links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
