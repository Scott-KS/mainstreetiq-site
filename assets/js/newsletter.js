(function () {
  var form = document.getElementById('footerNewsletterForm');
  if (!form) return;
  var msg = document.getElementById('footerNewsletterMsg');
  var input = document.getElementById('footerNewsletterEmail');
  var btn = form.querySelector('button[type="submit"]');
  var endpoint = 'https://msiq-stripe-webhook.vercel.app/api/newsletter_signup';

  function setMsg(text, kind) {
    msg.textContent = text;
    msg.className = 'footer-newsletter-msg' + (kind ? ' ' + kind : '');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    setMsg('');
    var email = (input.value || '').trim();
    if (!email || email.indexOf('@') < 1) {
      setMsg('Please enter a valid email.', 'err');
      return;
    }
    btn.disabled = true;
    btn.textContent = 'Subscribing…';
    var honeypotInput = form.elements && form.elements['honeypot'];
    var payload = {
      email: email,
      honeypot: honeypotInput ? honeypotInput.value : '',
      source: 'footer:' + (window.location && window.location.pathname ? window.location.pathname : '/')
    };
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      if (r.ok) {
        setMsg('You’re in. We’ll be in touch when there’s something worth saying.', 'ok');
        input.value = '';
      } else {
        setMsg('That didn’t go through. Email scott@mainstreetiq.com if it persists.', 'err');
      }
    }).catch(function () {
      setMsg('That didn’t go through. Email scott@mainstreetiq.com if it persists.', 'err');
    }).then(function () {
      btn.disabled = false;
      btn.textContent = 'Subscribe';
    });
  });
})();
