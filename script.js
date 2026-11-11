// Highlight the download that matches the visitor's computer and put it first.
(function suggestDownload() {
  const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent;
  const os = /win/i.test(platform) ? 'windows' : /mac/i.test(platform) ? 'mac' : null;
  if (!os) return;
  const match = document.querySelector(`.hero-actions [data-os="${os}"]`);
  if (!match) return;
  match.parentElement.querySelectorAll('.button').forEach((button) => {
    const suggested = button === match;
    button.classList.toggle('primary', suggested);
    button.classList.toggle('secondary', !suggested);
  });
  match.classList.add('suggested');
  match.parentElement.prepend(match);
})();

// Gentle reveal of sections as they scroll into view.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const elements = document.querySelectorAll('.feature-grid article, .new-grid li, .steps li, .shortcut-grid div');
  elements.forEach((el) => el.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  elements.forEach((el) => observer.observe(el));
}
