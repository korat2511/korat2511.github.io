'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.remove("active");
        void pages[i].offsetWidth; // Trigger reflow to replay sleek entrance animations
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// calculate and display dynamic months for experience duration
const durationElements = document.querySelectorAll(".duration-months");

function calculateMonths(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate === "current" ? new Date() : new Date(endDate);
  
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  
  const totalMonths = years * 12 + months;
  
  return totalMonths;
}

// update all duration elements
durationElements.forEach(element => {
  const startDate = element.getAttribute("data-start-date");
  const endDate = element.getAttribute("data-end-date");
  const months = calculateMonths(startDate, endDate);
  
  element.textContent = `${months} Month${months !== 1 ? 's' : ''}`;
});



// project gallery modal variables
const projectGalleryLinks = document.querySelectorAll("[data-project-gallery]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const galleryContent = document.querySelector("[data-gallery-content]");
const galleryIndicators = document.querySelector("[data-gallery-indicators]");
const galleryPrevBtn = document.querySelector("[data-gallery-prev]");
const galleryNextBtn = document.querySelector("[data-gallery-next]");
const galleryTitle = document.querySelector(".gallery-title");

// Project images arrays
const projectImages = {
  "attendex": {
    title: "AttendEx",
    subtitle: "Staff Attendance & Business Management Application",
    description: "Developed AttendEx, a staff attendance and business management application designed for contractors, shop owners, and small businesses. The app streamlines attendance tracking, salary and advance management, and daily cashbook operations with features like bulk attendance marking, automated salary calculations, expense tracking, financial summaries, and PDF-ready labor reports for efficient workforce and business management.",
    androidUrl: "https://play.google.com/store/apps/details?id=com.originlab.attendex",
    images: [
      "./assets/images/attendex-logo.jpg"
    ]
  },
  "core-pmc": {
    title: "CORE PMC",
    subtitle: "Construction Management & Project Analytics Platform",
    description: "Developing and maintaining a mobile application along with an admin panel for CORE PROJECTS (Surat, India). Responsible for enhancing user experience, monitoring analytics, fixing bugs, and continuously improving features.",
    androidUrl: "https://play.google.com/store/apps/details?id=com.corepmc.core_pmc",
    iosUrl: "https://apps.apple.com/us/app/core-pmc/id6751482084",
    images: [
      "./assets/images/PMC_1.png",
      "./assets/images/PMC_2.png",
      "./assets/images/PMC_3.png",
      "./assets/images/PMC_4.png",
      "./assets/images/PMC_5.png",
      "./assets/images/PMC_6.png",
      "./assets/images/PMC_7.png",
      "./assets/images/PMC_8.png",
      "./assets/images/PMC_9.png",
      "./assets/images/PMC_10.png",
      "./assets/images/PMC_11.png"
    ]
  },
  "hotel-app": {
    title: "Hotel App",
    subtitle: "Hotel Booking & Guest Experience Management",
    description: "Feature-rich mobile hotel booking and guest experience management application designed for seamless customer check-ins, room reservations, and service tracking.",
    images: [
      "./assets/images/HM_1.jpeg",
      "./assets/images/HM_2.jpeg",
      "./assets/images/HM_3.jpeg",
      "./assets/images/HM_4.jpeg",
      "./assets/images/HM_5.jpeg",
      "./assets/images/HM_5.1.jpeg",
      "./assets/images/HM_6.jpeg",
      "./assets/images/HM_7.jpeg",
      "./assets/images/HM_8.jpeg",
      "./assets/images/HM_9.jpeg",
      "./assets/images/HM_10.jpeg",
      "./assets/images/HM_11.jpeg",
      "./assets/images/HM_12.jpeg",
      "./assets/images/HM_13.jpeg",
      "./assets/images/HM_14.jpeg"
    ]
  }
};

let currentImageIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let isModalOpening = false;

// function to show image at index
function showImage(index) {
  const images = galleryContent.querySelectorAll("img");
  const indicators = galleryIndicators.querySelectorAll(".gallery-indicator");
  
  if (images.length === 0) return;
  
  // Update current index
  currentImageIndex = index;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  
  // Update images
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === currentImageIndex) {
      img.classList.add("active");
    }
  });
  
  // Update indicators
  indicators.forEach((indicator, i) => {
    indicator.classList.remove("active");
    if (i === currentImageIndex) {
      indicator.classList.add("active");
    }
  });
}

// function to go to next image
function nextImage() {
  showImage(currentImageIndex + 1);
}

// function to go to previous image
function previousImage() {
  showImage(currentImageIndex - 1);
}

// function to open project gallery
function openProjectGallery(projectId) {
  isModalOpening = true;
  
  const project = projectImages[projectId];
  if (!project) return;
  
  // Update gallery title
  if (galleryTitle) {
    galleryTitle.textContent = project.title;
  }
  const gallerySubtitle = document.querySelector(".gallery-subtitle");
  if (gallerySubtitle) {
    gallerySubtitle.textContent = project.subtitle;
  }
  const galleryDesc = document.querySelector("[data-gallery-desc]");
  if (galleryDesc) {
    galleryDesc.textContent = project.description || "";
  }
  const galleryLinks = document.querySelector("[data-gallery-links]");
  if (galleryLinks) {
    galleryLinks.innerHTML = "";
    if (project.androidUrl) {
      const androidLink = document.createElement("a");
      androidLink.href = project.androidUrl;
      androidLink.target = "_blank";
      androidLink.rel = "noopener noreferrer";
      androidLink.className = "gallery-store-btn";
      androidLink.innerHTML = `<ion-icon name="logo-google-playstore"></ion-icon> <span>Google Play</span>`;
      galleryLinks.appendChild(androidLink);
    }
    if (project.iosUrl) {
      const iosLink = document.createElement("a");
      iosLink.href = project.iosUrl;
      iosLink.target = "_blank";
      iosLink.rel = "noopener noreferrer";
      iosLink.className = "gallery-store-btn";
      iosLink.innerHTML = `<ion-icon name="logo-apple"></ion-icon> <span>App Store</span>`;
      galleryLinks.appendChild(iosLink);
    }
  }
  
  // Clear previous content
  galleryContent.innerHTML = "";
  galleryIndicators.innerHTML = "";
  
  // Add all project images to gallery
  project.images.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `${project.title} Screenshot ${index + 1}`;
    img.loading = "lazy";
    if (index === 0) img.classList.add("active");
    galleryContent.appendChild(img);
    
    // Create indicator
    const indicator = document.createElement("button");
    indicator.className = "gallery-indicator";
    if (index === 0) indicator.classList.add("active");
    indicator.setAttribute("data-indicator-index", index);
    indicator.addEventListener("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
      showImage(index);
    });
    galleryIndicators.appendChild(indicator);
  });
  
  // Reset to first image
  currentImageIndex = 0;
  
  // Show modal
  projectModalContainer.classList.add("active");
  projectOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  
  // Setup swipe events after content is created
  setupSwipeEvents();
  
  // Setup navigation buttons
  setupNavigationButtons();
  
  // Prevent immediate closing
  setTimeout(() => {
    isModalOpening = false;
  }, 300);
}

// Setup navigation buttons function
function setupNavigationButtons() {
  const prevBtn = document.querySelector("[data-gallery-prev]");
  const nextBtn = document.querySelector("[data-gallery-next]");
  
  // Remove old listeners by cloning
  if (prevBtn && !prevBtn.hasAttribute("data-listener-attached")) {
    prevBtn.setAttribute("data-listener-attached", "true");
    prevBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
      previousImage();
    });
  }
  
  if (nextBtn && !nextBtn.hasAttribute("data-listener-attached")) {
    nextBtn.setAttribute("data-listener-attached", "true");
    nextBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      e.preventDefault();
      nextImage();
    });
  }
}

// Setup swipe events function
function setupSwipeEvents() {
  const content = document.querySelector("[data-gallery-content]");
  if (!content) return;
  
  // Remove any existing listeners by using once option or check if already attached
  let isDragging = false;
  let startX = 0;
  
  // Touch events for mobile swipe
  content.addEventListener("touchstart", function(e) {
    e.stopPropagation();
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  content.addEventListener("touchend", function(e) {
    e.stopPropagation();
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  // Mouse drag for desktop
  content.addEventListener("mousedown", function(e) {
    e.stopPropagation();
    isDragging = true;
    startX = e.pageX;
  });
  
  content.addEventListener("mousemove", function(e) {
    if (!isDragging) return;
    e.stopPropagation();
  });
  
  content.addEventListener("mouseup", function(e) {
    if (!isDragging) return;
    e.stopPropagation();
    isDragging = false;
    const endX = e.pageX;
    const swipeDistance = startX - endX;
    const minSwipeDistance = 50;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextImage();
      } else {
        previousImage();
      }
    }
  });
  
  content.addEventListener("mouseleave", function() {
    isDragging = false;
  });
}

// function to close project gallery
function closeProjectGallery() {
  if (isModalOpening) return;
  projectModalContainer.classList.remove("active");
  projectOverlay.classList.remove("active");
  document.body.style.overflow = "";
  currentImageIndex = 0;
}

// Swipe detection
function handleSwipe() {
  const swipeDistance = touchStartX - touchEndX;
  const minSwipeDistance = 50;
  
  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) {
      // Swipe left - next image
      nextImage();
    } else {
      // Swipe right - previous image
      previousImage();
    }
  }
}

// add click event to all project gallery links
projectGalleryLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    const projectId = this.getAttribute("data-project-gallery");
    // Use setTimeout to ensure the click event has fully processed
    setTimeout(() => {
      openProjectGallery(projectId);
    }, 10);
  });
});

// add click event to close button
if (projectModalCloseBtn) {
  projectModalCloseBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    closeProjectGallery();
  });
}

// add click event to overlay - close when clicking overlay
if (projectOverlay) {
  projectOverlay.addEventListener("click", function(e) {
    if (isModalOpening) return;
    e.stopPropagation();
    closeProjectGallery();
  });
}

// Prevent modal container from closing when clicking on modal content
if (projectModalContainer) {
  projectModalContainer.addEventListener("click", function(e) {
    if (isModalOpening) return;
    // If clicking on the container itself (not on any child), close
    if (e.target === projectModalContainer) {
      closeProjectGallery();
    }
  });
}

// Prevent ALL clicks inside modal from closing it (but allow touch events)
const projectGalleryModal = document.querySelector(".project-gallery-modal");
if (projectGalleryModal) {
  projectGalleryModal.addEventListener("click", function(e) {
    // Don't prevent default on touch events
    if (e.type !== "touchstart" && e.type !== "touchmove" && e.type !== "touchend") {
      e.stopPropagation();
    }
  });
}

// Navigation buttons - set up initially and when modal opens
if (galleryPrevBtn) {
  galleryPrevBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    previousImage();
  });
}

if (galleryNextBtn) {
  galleryNextBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    nextImage();
  });
}

// Initial setup - will be called when modal opens
// Swipe events are now set up in setupSwipeEvents() function

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!projectModalContainer || !projectModalContainer.classList.contains("active")) return;
  
  if (e.key === "ArrowLeft") {
    previousImage();
  } else if (e.key === "ArrowRight") {
    nextImage();
  } else if (e.key === "Escape") {
    closeProjectGallery();
  }
});


/*-----------------------------------*\
  #ANIMATION ENHANCEMENTS
\*-----------------------------------*/

// 1. Dynamic Typewriter Effect for Sidebar Role Title
const typedTextSpan = document.querySelector(".typed-text");
if (typedTextSpan) {
  const roles = [
    "Product Manager & Mobile App Specialist",
    "Flutter & Dart Specialist",
    "IT Consultant & Software Developer",
    "Firebase & Cloud Integrator"
  ];
  let roleIndex = 0;
  let charIndex = roles[0].length;
  let isDeleting = true;
  let typingSpeed = 90;

  function typeRole() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2200; // Pause when full text is typed
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next word
    }

    setTimeout(typeRole, typingSpeed);
  }

  // Start typewriter rotation after initial 2 second display
  setTimeout(typeRole, 2000);
}

// 2. Interactive 3D Card Tilt with Perspective
const tiltCards = document.querySelectorAll(".service-item, .content-card, .project-card, .project-item > a");

tiltCards.forEach(card => {
  card.addEventListener("mousemove", function (e) {
    if (window.innerWidth < 768) return;

    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    this.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "";
  });
});

// 3. Ripple Effect for Interactive Buttons
const rippleTargets = document.querySelectorAll(".form-btn, .navbar-link, .filter-item button, .info_more-btn, .modal-close-btn, .project-btn");

rippleTargets.forEach(button => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple-effect");

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;

    const existingRipple = this.querySelector(".ripple-effect");
    if (existingRipple) {
      existingRipple.remove();
    }

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});

// 4. Fixed Theme Accent: Green (Emerald Matrix)
document.documentElement.setAttribute("data-theme", "emerald");
try {
  localStorage.setItem("portfolio-theme", "emerald");
} catch (err) {}