// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Sticky nav shadow + scroll progress bar
const nav = document.getElementById('nav');
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.borderBottomColor = 'rgba(255,90,54,0.25)';
  } else {
    nav.style.borderBottomColor = '';
  }

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}, { passive: true });

// Contact form -> mailto (static hosting has no backend)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:Nyakponoah@gmail.com?subject=${subject}&body=${body}`;

  formNote.textContent = 'Opening your email app…';
});

// Reveal sections as they enter viewport
const revealTargets = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => sectionObserver.observe(el));

// Animate the timeline line + items as they scroll into view
const timeline = document.querySelector('.timeline');
if (timeline) {
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timeline.classList.add('in-view');
        timelineObserver.unobserve(timeline);
      }
    });
  }, { threshold: 0.15 });
  timelineObserver.observe(timeline);

  const items = document.querySelectorAll('.timeline__item');
  const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        itemObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  items.forEach(item => itemObserver.observe(item));
}

// Magnetic button effect
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// Projects carousel: arrow buttons + click-and-drag swipe
const scroller = document.getElementById('projectsScroll');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (scroller) {
  const scrollByCard = (dir) => {
    const card = scroller.querySelector('.project-card');
    const gap = 24;
    const distance = card ? card.offsetWidth + gap : 320;
    scroller.scrollBy({ left: dir * distance, behavior: 'smooth' });
  };

  prevBtn?.addEventListener('click', () => scrollByCard(-1));
  nextBtn?.addEventListener('click', () => scrollByCard(1));

  // Click-and-drag swipe for mouse/trackpad users
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;

  scroller.addEventListener('mousedown', (e) => {
    isDown = true;
    scroller.classList.add('dragging');
    startX = e.pageX;
    scrollStart = scroller.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    isDown = false;
    scroller.classList.remove('dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const delta = e.pageX - startX;
    scroller.scrollLeft = scrollStart - delta;
  });
}
