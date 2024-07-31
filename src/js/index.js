// header + footer logo links 
export function setupLogoLinks() {
  const headerLogoLink = document.querySelector('.header__logo-section');
  const footerLogoLink = document.querySelector('.footer__logo-section');

  if (headerLogoLink) {
      headerLogoLink.addEventListener('click', () => {
          window.location.href = 'index.html';
      });
  }

  if (footerLogoLink) {
      footerLogoLink.addEventListener('click', () => {
          window.location.href = 'index.html';
      });
  }
}

setupLogoLinks();
//mobile header 

export function hamburgerMenu() {
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.header__hamburger');
    const hamburger = document.querySelector('.header__hamburger-line');
    const nav = document.querySelector('.header__nav');
    const navItems = document.querySelectorAll('.header__nav-item');
    const noScroll = document.querySelector('body')
  
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('header__nav--open');
      hamburger.classList.toggle('header__hamburger-line--open');
      noScroll.classList.toggle('body--noscroll')
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.toggle('header__nav-item--open');
        }, index * 200);
      });
    });
  });
};
  

hamburgerMenu();


//header scroll 

function setupHeaderScroll() {
  document.addEventListener('scroll', () => {
      const header = document.querySelector('.header--fixed');

      if (header) {
          if (window.scrollY > 0) {
              header.classList.add('scrolled');
          } else {
              header.classList.remove('scrolled');
          }
      }
  });
}

setupHeaderScroll();


//quote change 

function initQuoteSlider() {
  const quotes = document.querySelectorAll('.quote__text')
  let currentIndex = 0;

  function showQuote(index) {
    quotes.forEach((quote, i) => {
      quote.classList.toggle('active', i === index);
    });
  }

  function nextQuote() {
    currentIndex = currentIndex + 1
    if (currentIndex > quotes.length-1) {
      currentIndex = 0;
    }
    showQuote(currentIndex);
  }

  showQuote(currentIndex);
  setInterval(nextQuote, 3000)
}

initQuoteSlider();
