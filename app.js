// JavaScript to handle scroll and change background color
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const navSm = document.querySelector('#navBarSm')
    const navMd = document.querySelector('#navBarMd')
    const navLogoMd = document.querySelector('#nav-logoMd')
    const navLogoSm = document.querySelector('#navImgSm')
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
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon')
  const menu = document.getElementById('menu')
  const navContent = document.getElementById('navContent')
  const navLogo = document.getElementById('nav-logoSm')
  const navPhone = document.getElementById('nav-phone')

  menuIcon.addEventListener('click', function () {
    if (menu.classList.contains('-translate-y-[120%]')) {
      // Open the menu
      menu.classList.remove('-translate-y-[120%]')
      menu.classList.add('translate-y-0')
      navContent.classList.add('bg-[#A8A8AA]') // Add background color to navContent
      navLogo.classList.add('hidden') // Hide logo
      navPhone.classList.add('hidden') // Hide phone icon
      menuIcon.classList.remove('bx-menu')
      menuIcon.classList.add('bx-x')
    } else {
      // Close the menu
      menu.classList.add('-translate-y-[120%]')
      menu.classList.remove('translate-y-0')
      navContent.classList.remove('bg-[#A8A8AA]') // Remove background color from navContent
      navLogo.classList.remove('hidden') // Show logo
      navPhone.classList.remove('hidden') // Show phone icon
      menuIcon.classList.remove('bx-x')
      menuIcon.classList.add('bx-menu')
    }
  })

  // Close menu when any link is clicked
  document.querySelectorAll('#menu a').forEach((link) => {
    link.addEventListener('click', function () {
      if (!menu.classList.contains('-translate-y-[120%]')) {
        // Close the menu
        menu.classList.add('-translate-y-[120%]')
        menu.classList.remove('translate-y-0')
        navContent.classList.remove('bg-[#A8A8AA]') // Remove background color from navContent
        navLogo.classList.remove('hidden') // Show logo
        navPhone.classList.remove('hidden') // Show phone icon
        menuIcon.classList.remove('bx-x')
        menuIcon.classList.add('bx-menu')
      }
    })
  })
})




document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#navLinks li')

  // Function to remove the classes from all nav links
  function removeActiveClasses() {
    navLinks.forEach((link) =>
      link.classList.remove('border-b-2', 'border-white')
    )
  }

  // Add click event listener to each nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      // Stop the event from propagating to the document
      event.stopPropagation()

      // Remove the classes from all nav links
      removeActiveClasses()

      // Add the classes to the clicked nav link
      this.classList.add('border-b-2', 'border-white')
    })
  })

  // Add click event listener to the document
  document.addEventListener('click', function () {
    // Remove the classes from all nav links when clicking outside
    removeActiveClasses()
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