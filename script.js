// Hitung tinggi header secara dinamis untuk smooth scroll
function getHeaderHeight() {
    const header = document.querySelector('header');
    return header ? header.offsetHeight : 80;
  }
  
  // Smooth Scrolling dengan offset responsif
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = getHeaderHeight() + 10; // sedikit tambahan jarak
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Scroll-to-Top Button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Form Submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim.');
    this.reset();
  });