// LANGUAGE DIRECTION HANDLING
function setDirectionByLang() {
  const lang = document.documentElement.lang || navigator.language || 'en';
  const rtlLangs = ['ar', 'he', 'fa', 'ur'];

  const shortLang = lang.toLowerCase().split('-')[0];
  const isRTL = rtlLangs.includes(shortLang);

  document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
}

setDirectionByLang();

const observer = new MutationObserver(setDirectionByLang);
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });


// FORM VALIDATION + AJAX SUBMISSION
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    if (!form.checkValidity()) return;

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      form.classList.remove('was-validated');
      alert('Thanks for subscribing! 🎉');
    } else {
      alert('Oops! Something went wrong. Try again later.');
    }
  });
}
