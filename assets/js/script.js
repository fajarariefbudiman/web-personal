// Loader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-container");
    setTimeout(function () {
      loader.style.opacity = "0";
      setTimeout(function () {
        loader.style.display = "none";
      }, 500);
    }, 1500);
  });
  
  // Navbar Scroll Effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const backToTop = document.querySelector(".back-to-top");
  
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });
  
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarLinks = document.querySelector(".navbar-links");
  
  menuToggle.addEventListener("click", function () {
    navbarLinks.classList.toggle("show");
  });
  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
  
      // Close mobile menu if open
      if (navbarLinks.classList.contains("show")) {
        navbarLinks.classList.remove("show");
      }
    });
  });
  
  // Back to Top Button
  document.querySelector(".back-to-top").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  
  // Gallery Filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");
  
      const filter = this.dataset.filter;
  
      galleryItems.forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  
  // Testimonial Slider
  const dots = document.querySelectorAll(".dot");
  const track = document.querySelector(".testimonial-track");
  const slides = document.querySelectorAll(".testimonial-slide");
  
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      // Remove active class from all dots
      dots.forEach((d) => d.classList.remove("active"));
      // Add active class to clicked dot
      this.classList.add("active");
  
      // Move the track to show the correct slide
      track.style.transform = `translateX(-${index * 100}%)`;
    });
  });
  
  // Form Submission
  const contactForm = document.getElementById("contactForm");
  
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Here you would typically send the form data to a server
  
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
  