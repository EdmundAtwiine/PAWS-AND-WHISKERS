document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking a link
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      }
    })
  })

  // Scroll Animation
  const fadeElements = document.querySelectorAll(".fade-in")

  function checkFade() {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.classList.add("active")
      }
    })
  }

  // Initial check on page load
  checkFade()

  // Check on scroll
  window.addEventListener("scroll", checkFade)

  // Form Handling
  const adoptForm = document.getElementById("adoptForm")
  const formSuccess = document.getElementById("formSuccess")

  if (adoptForm) {
    adoptForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // In a real application, you would send the form data to a server here
      adoptForm.style.display = "none"
      formSuccess.style.display = "block"

      // Scroll to success message
      formSuccess.scrollIntoView({ behavior: "smooth" })
    })
  }

  // Donation Form
  const donateForm = document.getElementById("donateForm")
  const donationSuccess = document.getElementById("donationSuccess")
  const customAmountRadio = document.querySelector('input[value="custom"]')
  const customAmountDiv = document.getElementById("customAmount")

  if (customAmountRadio && customAmountDiv) {
    const amountOptions = document.querySelectorAll('input[name="amount"]')

    amountOptions.forEach((option) => {
      option.addEventListener("change", function () {
        if (this.value === "custom") {
          customAmountDiv.style.display = "block"
        } else {
          customAmountDiv.style.display = "none"
        }
      })
    })
  }

  if (donateForm) {
    donateForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // In a real application, you would process the payment here
      donateForm.style.display = "none"
      donationSuccess.style.display = "block"

      // Scroll to success message
      donationSuccess.scrollIntoView({ behavior: "smooth" })
    })
  }

  // Contact Form
  const contactForm = document.getElementById("contactForm")
  const contactSuccess = document.getElementById("contactSuccess")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // In a real application, you would send the message to a server here
      contactForm.style.display = "none"
      contactSuccess.style.display = "block"

      // Scroll to success message
      contactSuccess.scrollIntoView({ behavior: "smooth" })
    })
  }
})
