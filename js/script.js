// Confetti + Nav Script //
  const confettiSettings = {
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    zIndex: 10000,
  };

  function fireConfetti() {
    // Repeat burst for a more noticeable effect
    confetti(confettiSettings);
    setTimeout(() => confetti(confettiSettings), 150);
  }

  function goHome() {
    fireConfetti();

    setTimeout(() => {
      window.location.href = "index.html#hero";
    }, 600);
  }
 

  // Fade in effect on load
  window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  });


  // Apply fade-out effect before navigating
  document.querySelectorAll("a.transition-link").forEach(link => {
    link.addEventListener("click", function(e) {
      const url = this.href;
      if (url && !url.includes("#")) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.location.href = url;
        }, 300);
      }
    });
  });

  // Fade in effect on load
  window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  });


  // FAQ // 
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});


  document.querySelectorAll('.faq-item details').forEach(details => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('.faq-answer');

    summary.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = details.hasAttribute('open');

        if (!isOpen) {
            // Opening
            details.setAttribute('open', '');
            content.style.height = '0px'; // reset first
            const fullHeight = content.scrollHeight + 'px';
            requestAnimationFrame(() => {
                content.style.height = fullHeight;
            });

            // After animation, reset height to auto
            setTimeout(() => {
                content.style.height = 'auto';
            }, 400);
        } else {
            // Closing
            const fullHeight = content.scrollHeight + 'px';
            content.style.height = fullHeight; // set current height
            requestAnimationFrame(() => {
                content.style.height = '0px';
            });

            // After animation ends, actually close it
            setTimeout(() => {
                details.removeAttribute('open');
                content.style.height = '';
            }, 400);
        }
    });
});