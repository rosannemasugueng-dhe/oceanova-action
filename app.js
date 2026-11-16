// Initializing the multilingual translation engine (130+ languages)
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'fr',
      autoDisplay: false
    },
    'google_translate_element'
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  const langSwitcher = document.getElementById('language-switcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('change', (e) => {
      const targetLang = e.target.value;
      if (targetLang === 'more') {
        const currentUrl = encodeURIComponent(window.location.href);
        window.open(`https://google.com{currentUrl}`, '_blank');
        langSwitcher.value = 'fr';
        return;
      }
      const googleCombo = document.querySelector('.goog-te-combo');
      if (googleCombo) {
        googleCombo.value = targetLang;
        googleCombo.dispatchEvent(new Event('change'));
      } else {
        document.cookie = `googtrans=/fr/${targetLang}; path=/`;
        window.location.reload();
      }
    });
  }
});
