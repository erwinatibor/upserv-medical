/* ============================================================
   LUMINA DENTAL — Main JavaScript
   js/main.js
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initAccordion();
  initCounters();
  initSmoothScroll();
  initFormValidation();
  initServicesFilter();
});

function initNav() {
  const nav       = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const drawer    = document.querySelector('.nav__drawer');
  const links     = document.querySelectorAll('.nav__link');
  const sections  = document.querySelectorAll('[data-section]');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 30);
    let active = null;
    sections.forEach(s => {
      const r = s.getBoundingClientRect();
      if (r.top <= 90 && r.bottom > 90) active = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${active}`));
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      drawer.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
        hamburger.setAttribute('aria-expanded','false');
        document.body.style.overflow = '';
      });
    });
  }
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-right');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, {threshold:0.1, rootMargin:'0px 0px -36px 0px'});
  els.forEach(el => io.observe(el));
}

function initAccordion() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('active');
      document.querySelectorAll('.accordion-btn.active').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-expanded','false');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('active');
        btn.setAttribute('aria-expanded','true');
        btn.nextElementSibling.classList.add('open');
      }
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const end = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const isFloat = el.dataset.float === 'true';
      const dur = 1600; const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = end * ease;
        const disp = isFloat ? val.toFixed(1) : Math.round(val).toLocaleString();
        el.textContent = disp + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, {threshold:0.6});
  counters.forEach(el => io.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight || 72;
      window.scrollTo({top: target.getBoundingClientRect().top + window.scrollY - navH - 8, behavior:'smooth'});
    });
  });
}

function initFormValidation() {
  const form = document.querySelector('.js-booking-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(f => {
      const empty = !f.value.trim();
      f.style.borderColor = empty ? '#EF4444' : '';
      if (empty) valid = false;
    });
    if (!valid) return;
    const btn = form.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = '✓ Request Received';
    btn.style.background = 'linear-gradient(135deg,#2ABFAD,#22A596)';
    btn.style.borderColor = '#2ABFAD';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.borderColor = ''; btn.disabled = false; form.reset(); }, 3500);
  });
  form.querySelectorAll('[required]').forEach(f => f.addEventListener('input', () => { f.style.borderColor = ''; }));
}

function initServicesFilter() {
  const btns = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
        if (show) card.style.animation = 'revealUp .35s cubic-bezier(0.16,1,0.3,1) forwards';
      });
    });
  });
}
