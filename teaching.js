// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing effect for Home section
const typingElement = document.querySelector(".typing");
const words = ["History Enthusiast", "Competitive Exam Learner", "Student of Knowledge"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if (wordIndex >= words.length) wordIndex = 0;
  currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
  }

  setTimeout(type, isDeleting ? 100 : 200);
}

type();

// Fade-in animation for course cards
const courseCards = document.querySelectorAll(".course-card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  courseCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 100) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
