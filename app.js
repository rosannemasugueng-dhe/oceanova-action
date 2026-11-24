// Initializing the multilingual translation engine (130+ languages)
const LANGUAGES = [
  { code: 'fr', name: 'Français (Original)' },
  { code: 'en', name: 'English' },
  { code: 'rw', name: 'Ikinyarwanda' },
  { code: 'sw', name: 'Kiswahili' },
  { code: 'ar', name: 'العربية (Arabe)' },
  { code: 'ln', name: 'Lingála' },
  { code: 'ha', name: 'Hausa' },
  { code: 'yo', name: 'Yorùbá' },
  { code: 'ig', name: 'Igbo' },
  { code: 'am', name: 'አማርኛ (Amharique)' },
  { code: 'zu', name: 'isiZulu' },
  { code: 'xh', name: 'isiXhosa' },
  { code: 'so', name: 'Soomaali' },
  { code: 'om', name: 'Afaan Oromoo' },
  { code: 'ti', name: 'ትግርኛ (Tigrinya)' },
  { code: 'bm', name: 'Bamanankan (Bambara)' },
  { code: 'ee', name: 'Eʋegbe (Ewe)' },
  { code: 'ak', name: 'Twi (Akan)' },
  { code: 'lg', name: 'Luganda' },
  { code: 'ny', name: 'Chichewa' },
  { code: 'sn', name: 'ChiShona' },
  { code: 'st', name: 'Sesotho' },
  { code: 'ts', name: 'Xitsonga' },
  { code: 'mg', name: 'Malagasy' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
  { code: 'zh-CN', name: '中文 (简体 - Chinois)' },
  { code: 'zh-TW', name: '中文 (繁體)' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ru', name: 'Русский' },
  { code: 'ja', name: '日本語 (Japonais)' },
  { code: 'ko', name: '한국어 (Coréen)' },
  { code: 'it', name: 'Italiano' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'pl', name: 'Polski' },
  { code: 'uk', name: 'Українська' },
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'th', name: 'ไทย (Thaï)' },
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Bahasa Melayu' },
  { code: 'tl', name: 'Filipino' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'ur', name: 'اردو (Ourdou)' },
  { code: 'fa', name: 'فارسی (Persan)' },
  { code: 'iw', name: 'עברית (Hébreu)' },
  { code: 'el', name: 'Ελληνικά (Grec)' },
  { code: 'sv', name: 'Svenska' },
  { code: 'no', name: 'Norsk' },
  { code: 'da', name: 'Dansk' },
  { code: 'fi', name: 'Suomi' },
  { code: 'cs', name: 'Čeština' },
  { code: 'ro', name: 'Română' },
  { code: 'hu', name: 'Magyar' },
  { code: 'bg', name: 'Български' },
  { code: 'sr', name: 'Српски' },
  { code: 'hr', name: 'Hrvatski' },
  { code: 'sk', name: 'Slovenčina' },
  { code: 'sl', name: 'Slovenščina' },
  { code: 'lt', name: 'Lietuvių' },
  { code: 'lv', name: 'Latviešu' },
  { code: 'et', name: 'Eesti' },
  { code: 'ca', name: 'Català' },
  { code: 'af', name: 'Afrikaans' },
  { code: 'sq', name: 'Shqip' },
  { code: 'hy', name: 'Հայերեն' },
  { code: 'az', name: 'Azərbaycan' },
  { code: 'ka', name: 'ქართული' },
  { code: 'kk', name: 'Қазақ' },
  { code: 'uz', name: 'Oʻzbek' },
  { code: 'mn', name: 'Монгол' },
  { code: 'ne', name: 'नेपाली' },
  { code: 'si', name: 'සිංහල' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'km', name: 'ខ្មែរ' },
  { code: 'lo', name: 'ລາວ' },
  { code: 'my', name: 'မြန်မာ' },
  { code: 'ht', name: 'Kreyòl Ayisyen' },
  { code: 'ku', name: 'Kurdî' },
  { code: 'ps', name: 'پښتو' },
  { code: 'sd', name: 'سنڌي' },
  { code: 'tg', name: 'Тоҷикӣ' },
  { code: 'bs', name: 'Bosanski' },
  { code: 'mk', name: 'Македонски' },
  { code: 'yi', name: 'ייִדיש' }
];
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'fr', autoDisplay: false },
    'google_translate_element'
  );
}
function applyTranslation(langCode, langName) {
  const labelEl = document.getElementById('current-lang-label');
  if (labelEl) labelEl.textContent = langName.replace(' (Original)', '');

  const baseSiteUrl = 'https://github.io';
  if (langCode === 'fr') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname + ';';
    if (window.location.hostname.includes('translate.goog')) {
      window.location.href = baseSiteUrl;
    } else {
      window.location.reload();
    }
    return;
  }

  // 1. If the integrated Google Translate engine is loaded on the page, activate it immediately
  const combo = document.querySelector('.goog-te-combo');
  if (combo) {
    combo.value = langCode;
    combo.dispatchEvent(new Event('change'));
    return;
  }

  // 2. else, a guaranteed fallback to the official Google Translate translator
  const targetUrl =
    'https://google.com' +
    encodeURIComponent(langCode) +
    '&u=' +
    encodeURIComponent(baseSiteUrl);
  window.location.href = targetUrl;
}
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  const trigger = document.getElementById('lang-trigger');
  const menu = document.getElementById('lang-menu');
  const listEl = document.getElementById('lang-list');
  const searchInput = document.getElementById('lang-search');
  const labelEl = document.getElementById('current-lang-label');

  // Restores the name of the active language
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('_x_tr_tl');
  const cookieMatch = document.cookie.match(/googtrans=\/fr\/([^;]+)/);
  const activeCode = urlLang || (cookieMatch ? cookieMatch[1] : null);
  if (activeCode && labelEl) {
    const found = LANGUAGES.find((l) => l.code === activeCode);
    if (found) labelEl.textContent = found.name.replace(' (Original)', '');
  }
  const renderList = (filter = '') => {
    if (!listEl) return;
    const term = filter.trim().toLowerCase();
    const filtered = LANGUAGES.filter((l) => l.name.toLowerCase().includes(term));
    listEl.innerHTML = filtered
      .map(
        (l) =>
          `<li><button type="button" class="lang-option" data-code="${l.code}" data-name="${l.name}">${l.name}</button></li>`
      )
      .join('');
  };

  renderList();
  if (trigger && menu) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = menu.hasAttribute('hidden');
      if (isHidden) {
        menu.removeAttribute('hidden');
        trigger.setAttribute('aria-expanded', 'true');
        if (searchInput) {
          searchInput.value = '';
          renderList();
          searchInput.focus();
        }
      } else {
        menu.setAttribute('hidden', '');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
    menu.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-option');
      if (btn) {
        menu.setAttribute('hidden', '');
        trigger.setAttribute('aria-expanded', 'false');
        applyTranslation(btn.dataset.code, btn.dataset.name);
      }
    });
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !trigger.contains(e.target)) {
        menu.setAttribute('hidden', '');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderList(e.target.value);
    });
  }
});
