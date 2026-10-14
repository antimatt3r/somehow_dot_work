(function () {
  const dialog = document.getElementById('lightbox-modal');
  if (!dialog) return;

  const titleEl = document.getElementById('lightbox-title');
  const counterEl = document.getElementById('lightbox-counter');
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const closeBtn = document.getElementById('lightbox-close');

  let activeScreenshots = [];
  let currentIndex = 0;

  function renderCurrent() {
    if (!activeScreenshots.length) return;
    const item = activeScreenshots[currentIndex];

    const src = typeof item === 'string' ? item : (item.src || '');
    const caption = typeof item === 'string' ? '' : (item.caption || '');

    imgEl.src = src;
    imgEl.alt = caption || (titleEl.textContent ? `${titleEl.textContent} screenshot ${currentIndex + 1}` : `Screenshot ${currentIndex + 1}`);

    if (caption) {
      captionEl.textContent = caption;
      captionEl.hidden = false;
    } else {
      captionEl.textContent = '';
      captionEl.hidden = true;
    }

    if (activeScreenshots.length > 1) {
      counterEl.textContent = `${currentIndex + 1} / ${activeScreenshots.length}`;
      counterEl.hidden = false;
      prevBtn.hidden = false;
      nextBtn.hidden = false;
    } else {
      counterEl.textContent = '';
      counterEl.hidden = true;
      prevBtn.hidden = true;
      nextBtn.hidden = true;
    }
  }

  function showNext() {
    if (activeScreenshots.length <= 1) return;
    currentIndex = (currentIndex + 1) % activeScreenshots.length;
    renderCurrent();
  }

  function showPrev() {
    if (activeScreenshots.length <= 1) return;
    currentIndex = (currentIndex - 1 + activeScreenshots.length) % activeScreenshots.length;
    renderCurrent();
  }

  document.querySelectorAll('.screenshot-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      try {
        const raw = btn.getAttribute('data-screenshots');
        activeScreenshots = JSON.parse(raw);
      } catch (err) {
        console.error('Failed to parse screenshots data', err);
        return;
      }

      if (!Array.isArray(activeScreenshots) || activeScreenshots.length === 0) return;

      const title = btn.getAttribute('data-title') || 'Screenshots';
      titleEl.textContent = title;
      currentIndex = 0;
      renderCurrent();

      dialog.showModal();
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());

  // Close on backdrop click (clicking outside the container)
  dialog.addEventListener('click', (e) => {
    const container = dialog.querySelector('.lightbox-container');
    if (container && !container.contains(e.target)) {
      dialog.close();
    }
  });

  // Keyboard navigation
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      showNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      showPrev();
    }
  });
})();
