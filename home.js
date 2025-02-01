/*<!-- navigation css start here -->*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on button click
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-container")) {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  }
});

// Close menu when window is resized above mobile breakpoint
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  }
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});
/*<!-- navigation js ends here -->*/







/*<!-- slider js start here -->*/

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".slider-dot");
  let currentSlide = 0;
  const slideInterval = 10000; // 7 seconds per slide

  function showSlide(index) {
    // Fade out current slide
    slides.forEach((slide) => {
      slide.style.transition = "opacity 0.8s ease-in-out";
      slide.classList.remove("active");
      // Pause videos that aren't being shown
      const video = slide.querySelector("video");
      if (video) video.pause();
    });

    // Fade in new slide
    slides[index].classList.add("active");
    // Play video of active slide
    const activeVideo = slides[index].querySelector("video");
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play();
    }

    // Update navigation dots
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");

    // Reset animation for content overlay
    const overlay = slides[index].querySelector(".content-overlay");
    if (overlay) {
      overlay.style.animation = "none";
      overlay.offsetHeight; // Trigger reflow
      overlay.style.animation = "slideIn 1s ease-out";
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (currentSlide !== index) {
        currentSlide = index;
        showSlide(currentSlide);
        resetInterval();
      }
    });
  });

  // Auto-advance slides
  let slideTimer = setInterval(nextSlide, slideInterval);

  // Reset interval when manually changing slides
  function resetInterval() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, slideInterval);
  }

  // Add keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      resetInterval();
    } else if (e.key === "ArrowRight") {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      resetInterval();
    }
  });
});
/*<!-- slider js ends here -->*/





/*<!-- our digital service js ends here -->*/
document.querySelectorAll('.service-box').forEach(box => {
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = '#f8f9fa';
  });
  
  box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'white';
  });
});

/*<!-- our digital service js ends here -->*/






/*<!-- Steps to Get Started js start  here -->*/
// Intersection Observer for fade-in animation
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});

// Add click interaction to cards
document.querySelectorAll(".step-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(1.02)";
    setTimeout(() => {
      card.style.transform = "";
    }, 200);
  });
});
/*<!-- Steps to Get Started js ends here -->*/







/*<!-- Services For Your Success js start here -->*/
const block = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add delay based on index for staggered animation
        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});

// Add hover effect for service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
  });
});
/*<!-- Services For Your Success js ends here -->*/






/*<!-- our creative journey  js start here -->*/
// Clone the initial set of images for seamless loop
const track = document.querySelector(".slider-track");

track.addEventListener("mouseleave", () => {
  track.style.animationPlayState = "running";
});

// Restart animation when it ends
track.addEventListener("animationend", () => {
  track.style.animation = "none";
  track.offsetHeight; // Trigger reflow
  track.style.animation = "scroll 50s linear infinite";
 
});
/*<!-- our creative journey  js ends here -->*/




