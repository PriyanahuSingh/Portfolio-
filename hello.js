const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.getElementById("header");

menu.onclick = ()=> mobileMenu.classList.toggle("show");

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>30);
});

document.querySelectorAll("nav a").forEach(link=>{
  link.onclick=function(){
    document.querySelectorAll("nav a").forEach(l=>l.classList.remove("active"));
    this.classList.add("active");
  }
});
  





// 1. SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// 2. SKILL BAR ANIMATION
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.transition = 'width 1s ease';
    }
  });
});
document.querySelectorAll('.skill-fill').forEach(function(bar) {
  observer.observe(bar);
});

// 3. SECTION FADE-IN ANIMATION
var sections = document.querySelectorAll('section');
sections.forEach(function(sec) {
  sec.style.opacity = '0';
  sec.style.transform = 'translateY(30px)';
  sec.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});
var sectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
sections.forEach(function(sec) {
  sectionObserver.observe(sec);
});