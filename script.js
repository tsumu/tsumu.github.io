const languageButton = document.querySelector('.language-toggle');
const translatedElements = document.querySelectorAll('[data-ja][data-en]');

function setLanguage(language) {
  document.documentElement.lang = language;
  translatedElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageButton.textContent = language === 'ja' ? 'EN' : 'JA';
  languageButton.setAttribute('aria-label', language === 'ja' ? 'Switch to English' : '日本語に切り替える');
  localStorage.setItem('language', language);
}

languageButton.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'ja' ? 'en' : 'ja');
});

document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(localStorage.getItem('language') || 'ja');
