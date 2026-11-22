// Initializing the multilingual translation engine (130+ languages)
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
function translateSite(targetLang) {
  if (!targetLang || targetLang === 'fr') return;

  const baseSiteUrl = 'https://github.io';

  if (targetLang === 'original') {
    window.location.href = baseSiteUrl;
    return;
  }
  let sourceUrl = window.location.href;
  if (sourceUrl.includes('translate.goog')) {
    const urlParams = new URLSearchParams(window.location.search);
    sourceUrl = urlParams.get('_x_tr_url') || baseSiteUrl;
  }
  // Direct redirect to the official Google Translate engine (130+ languages)
  const googleTranslateUrl =
    'https://google.com' +
    encodeURIComponent(targetLang) +
    '&u=' +
    encodeURIComponent(sourceUrl);

  window.location.href = googleTranslateUrl;
}
