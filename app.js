// JavaScript to handle scroll and change background color
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const navSm = document.querySelector('#navBarSm')
    const navMd = document.querySelector('#navBarMd')
    const navLogoMd = document.querySelector('#nav-logoMd')
    const navLogoSm = document.querySelector('#nav-logoSm')
    const stickyLogoSrc = './assets/mainLogoSticky.png' 
     navSm.style.transition = 'background-color 0.3s ease'
     navMd.style.transition = 'background-color 0.3s ease'

    if (window.scrollY > 0) {
      navSm.style.backgroundColor = '#A8A8AA'
      navMd.style.backgroundColor = '#A8A8AA'
      navLogoMd.src = stickyLogoSrc
      navLogoSm.src = stickyLogoSrc
    } else {
      navSm.style.backgroundColor = 'transparent'
      navMd.style.backgroundColor = 'transparent'
      navLogoMd.src = './assets/mainLogo.png' 
      navLogoSm.src = './assets/mainLogo.png' 
    }
  })
})

// JavaScript to toggle the menu

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-icon').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        const closeIcon = document.getElementById('close-icon');
        const menuIcon = document.getElementById('menu-icon');

        if (menu.classList.contains('-translate-y-[120%]')) {
            // Open the menu
            menu.classList.remove('-translate-y-[120%]');
            menu.classList.add('translate-y-0');
            menuIcon.classList.add('hidden'); // Hide menu icon
            closeIcon.classList.remove('hidden'); // Show close icon
        }
    });

    document.getElementById('close-icon').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        const closeIcon = document.getElementById('close-icon');
        const menuIcon = document.getElementById('menu-icon');

        // Close the menu
        menu.classList.add('-translate-y-[120%]');
        menu.classList.remove('translate-y-0');
        closeIcon.classList.add('hidden'); // Hide close icon
        menuIcon.classList.remove('hidden'); // Show menu icon
    });

    // Close menu when any link is clicked
    document.querySelectorAll('#menu a').forEach(link => {
        link.addEventListener('click', function() {
            const menu = document.getElementById('menu');
            const closeIcon = document.getElementById('close-icon');
            const menuIcon = document.getElementById('menu-icon');
            
            // Close the menu
            menu.classList.add('-translate-y-[120%]');
            menu.classList.remove('translate-y-0');
            closeIcon.classList.add('hidden'); // Hide close icon
            menuIcon.classList.remove('hidden'); // Show menu icon
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#navLinks li ')

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navLinks.forEach((link) =>
        link.classList.remove('border-b-2', 'border-white')
      )
      this.classList.add('border-b-2', 'border-white')
    })
  })
})



document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTopBtn')

  const toggleBackToTopBtn = () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const threshold = documentHeight - 100 // Adjust this value as needed

    if (window.innerWidth < 768) {
      // Show on smaller screens if near bottom
      if (scrollPosition >= threshold) {
        backToTopBtn.classList.remove('hidden')
      } else {
        backToTopBtn.classList.add('hidden')
      }
    } else {
      // Hide on larger screens by default
      backToTopBtn.classList.add('hidden')
    }
  }

  const scrollToTop = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', toggleBackToTopBtn)
  window.addEventListener('resize', toggleBackToTopBtn)
  backToTopBtn.addEventListener('click', scrollToTop)

  // Initial check in case the page is loaded near the bottom
  toggleBackToTopBtn()
})