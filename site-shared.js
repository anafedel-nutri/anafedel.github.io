(function () {
  const WA_PHONE = '5519992591776';
  const WA_MSG = {
    general: 'Olá, Ana! Vim pelo site e gostaria de saber mais sobre o acompanhamento nutricional.',
    transformar: 'Olá, Ana! Tenho interesse no Plano Transformar de 3 meses. Pode me passar mais informações?',
  };

  document.querySelectorAll('[data-wa]').forEach((el) => {
    const key = el.getAttribute('data-wa') || 'general';
    const text = WA_MSG[key] || WA_MSG.general;
    el.href = 'https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(text);
    if (!el.getAttribute('target')) {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });

  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  const GCAL_SCHEDULE_URL =
    'https://calendar.google.com/calendar/appointments/AcZssZ0dGAXsBGvjWRiKiPCUCTKC4DncZaVeOFMWxT0=?gv=true';

  function initGoogleSchedulingButtons() {
    if (!window.calendar || !calendar.schedulingButton) return false;
    document.querySelectorAll('.gcal-schedule-host').forEach((host) => {
      if (host.dataset.gcalInitialized) return;
      host.dataset.gcalInitialized = '1';
      const marker = document.createElement('span');
      marker.className = 'gcal-schedule-marker';
      marker.setAttribute('aria-hidden', 'true');
      host.appendChild(marker);
      calendar.schedulingButton.load({
        url: GCAL_SCHEDULE_URL,
        color: '#6E3B46',
        label: host.getAttribute('data-gcal-label') || 'Agendar',
        target: marker,
      });
    });
    return true;
  }

  function ensureGoogleSchedulingButtons() {
    if (initGoogleSchedulingButtons()) return;
    let n = 0;
    const id = setInterval(() => {
      if (initGoogleSchedulingButtons() || ++n > 100) clearInterval(id);
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureGoogleSchedulingButtons);
  } else {
    ensureGoogleSchedulingButtons();
  }
})();
