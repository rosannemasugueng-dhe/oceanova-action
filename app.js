// Initializing the multilingual translation engine (130+ languages)
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  // Synchronizes the displayed label with the active language from the Google Translate cookie
  const syncLanguageLabel = () => {
    const labelEl = document.getElementById('current-lang-label');
    if (!labelEl) return;
    const match = document.cookie.match(/googtrans=\/fr\/([^;]+)/);
    const activeCode = match ? match[1] : 'fr';
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      for (const opt of select.options) {
        if (opt.value === activeCode) {
          labelEl.textContent = opt.text.replace(/^Sélectionner une langue$/i, 'Français');
          return;
        }
      }
    }
    if (activeCode === 'fr') labelEl.textContent = 'Français';
  };

  setInterval(syncLanguageLabel, 800);
});
// Direct redirect to the official Google Translate engine (130+ languages)
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'fr',
      autoDisplay: false
    },
    'google_translate_element'
  );
}
