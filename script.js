/* 
  E-BIKE SHOWROOM - CUSTOM INTERACTIVE SCRIPT
  Designed by Antigravity (DeepMind Team)
*/

document.addEventListener('DOMContentLoaded', () => {
  // Global Data
  const BIKES_DATA = {
    'sports': {
      id: 'sports',
      name: 'Vortex Model S',
      category: 'Sports',
      price: 12999,
      motor: '8.5 kW Mid-Drive',
      battery: '4.8 kWh Li-ion',
      topSpeed: 120,
      range: 180,
      chargingTime: 1.5,
      acceleration: '2.9s (0-60 km/h)',
      torque: '90 Nm',
      description: 'Engineered for track-level acceleration and raw speed. The Vortex Model S represents the absolute peak of electric motorcycle performance.',
      image: 'assets/hero_bike.jpg',
      colors: ['red', 'black', 'silver']
    },
    'city': {
      id: 'city',
      name: 'Vortex Model C',
      category: 'City',
      price: 4999,
      motor: '3.2 kW Hub Motor',
      battery: '2.9 kWh Li-ion',
      topSpeed: 75,
      range: 120,
      chargingTime: 2.5,
      acceleration: '5.2s (0-60 km/h)',
      torque: '45 Nm',
      description: 'Sleek, lightweight, and agile. The Vortex Model C is optimized for urban maneuvering and stress-free daily commutes with high visibility lights.',
      image: 'assets/city_bike.jpg',
      colors: ['black', 'silver']
    },
    'adventure': {
      id: 'adventure',
      name: 'Vortex Model A',
      category: 'Adventure',
      price: 7499,
      motor: '6.0 kW Mid-Drive',
      battery: '4.2 kWh Li-ion',
      topSpeed: 95,
      range: 150,
      chargingTime: 2.0,
      acceleration: '3.8s (0-60 km/h)',
      torque: '75 Nm',
      description: 'Built to dominate. Dual suspension, high ground clearance, and massive off-road tires let you take on trails, dirt, and rough terrain with confidence.',
      image: 'assets/adventure_bike.jpg',
      colors: ['red', 'black']
    },
    'scooter': {
      id: 'scooter',
      name: 'Vortex Scooter V',
      category: 'Scooter',
      price: 3899,
      motor: '2.8 kW Hub Motor',
      battery: '2.5 kWh Li-ion',
      topSpeed: 60,
      range: 100,
      chargingTime: 3.0,
      acceleration: '6.5s (0-60 km/h)',
      torque: '35 Nm',
      description: 'Step-through convenience meets cutting-edge aerodynamics. Features ample cargo space, custom smart HUD, and anti-theft sensors.',
      image: 'assets/electric_scooter.jpg',
      colors: ['silver', 'black']
    },
    'commuter': {
      id: 'commuter',
      name: 'Vortex Model T',
      category: 'Commuter',
      price: 4299,
      motor: '3.0 kW Mid-Drive',
      battery: '2.8 kWh Li-ion',
      topSpeed: 70,
      range: 110,
      chargingTime: 2.2,
      acceleration: '5.8s (0-60 km/h)',
      torque: '40 Nm',
      description: 'Designed for daily durability and long battery lifecycle. Perfect ergonomics ensure a comfortable upright riding posture for long commutes.',
      image: 'assets/city_bike.jpg',
      colors: ['black', 'silver']
    }
  };

  const RIDING_MODES = {
    'eco': { name: 'Eco Mode', speed: 45, range: 180, regen: 'High (80%)', acceleration: 'Smooth' },
    'ride': { name: 'Ride Mode', speed: 75, range: 130, regen: 'Medium (50%)', acceleration: 'Balanced' },
    'sport': { name: 'Sport Mode', speed: 100, range: 95, regen: 'Low (20%)', acceleration: 'Aggressive' },
    'warp': { name: 'Warp Mode', speed: 120, range: 70, regen: 'Disabled (0%)', acceleration: 'Instantaneous' }
  };

  // Initialize Web App Components
  initLoadingScreen();
  initCursor();
  initTheme();
  initPageNavigation();
  initTypingEffect();
  initStickyHeader();
  initMobileMenu();
  initObserverAnimations();
  initProductCatalog();
  init360Preview();
  initRidingModes();
  initEmiCalculator();
  initTestimonialSlider();
  initFaqAccordion();
  initForms();
  initComparison();
  initGalleryLightbox();

  // 1. Loading Screen
  function initLoadingScreen() {
    const loader = document.getElementById('loading-screen');
    const bar = document.querySelector('.loader-bar');
    const status = document.querySelector('.loader-status');
    const statusMessages = [
      'Initializing Core...',
      'Optimizing Power Cells...',
      'Calibrating AI Gyros...',
      'Syncing HUD Interface...',
      'Showroom Ready'
    ];
    
    let progress = 0;
    let messageIndex = 0;
    
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        setTimeout(() => {
          loader.style.opacity = 0;
          loader.style.visibility = 'hidden';
          // Trigger home stats counter after loading
          setTimeout(runHomeStatsCounter, 500);
        }, 600);
      }
      
      bar.style.width = `${progress}%`;
      
      // Cycle through tech status messages
      if (progress > (messageIndex + 1) * 20 && messageIndex < statusMessages.length - 1) {
        messageIndex++;
        status.textContent = statusMessages[messageIndex];
      }
    }, 100);
  }

  // 2. Custom Cursor
  function initCursor() {
    const dot = document.querySelector('.custom-cursor-dot');
    const outline = document.querySelector('.custom-cursor-outline');
    
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instant dot tracking
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    // Smooth outline tracking using lerp
    function animateOutline() {
      const lerpFactor = 0.15;
      outlineX += (mouseX - outlineX) * lerpFactor;
      outlineY += (mouseY - outlineY) * lerpFactor;
      
      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Hover effect classes
    const clickables = document.querySelectorAll('a, button, input, select, textarea, .faq-header, .filter-tab, .color-dot, .riding-mode-btn, .gallery-item');
    clickables.forEach(item => {
      item.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering-clickable');
      });
      item.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering-clickable');
      });
    });
  }

  // 3. Dark/Light Theme Switching
  function initTheme() {
    const themeBtn = document.querySelector('.theme-toggle-btn');
    const themeIcon = themeBtn.querySelector('i');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Apply saved theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeBtn.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
      
      // Quick flash animation on theme change to enhance experience
      themeBtn.style.transform = 'scale(0.8) rotate(360deg)';
      setTimeout(() => {
        themeBtn.style.transform = '';
      }, 300);
    });

    function updateThemeIcon(theme) {
      if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
      } else {
        themeIcon.className = 'fa-solid fa-moon';
      }
    }
  }

  // 4. Page Navigation / SPA Router
  function initPageNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a, .logo');
    const sections = document.querySelectorAll('.page-section');
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger');

    // Handle initial route from URL hash or default to Home
    let initialSection = window.location.hash || '#home';
    showSection(initialSection);

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        let target = link.getAttribute('href');
        if (target.startsWith('#')) {
          showSection(target);
          window.location.hash = target;
          
          // Close mobile menu if open
          if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
          }
        }
      });
    });

    function showSection(targetId) {
      const targetSec = document.querySelector(targetId);
      if (!targetSec) return;

      // Update Active Navigation Item State
      navLinks.forEach(lnk => {
        if (lnk.getAttribute('href') === targetId) {
          lnk.classList.add('active');
        } else {
          lnk.classList.remove('active');
        }
      });

      // Hide all sections with a slide transition, then show active
      sections.forEach(sec => {
        sec.classList.remove('active');
      });

      targetSec.classList.add('active');
      window.scrollTo(0, 0);

      // Trigger section-specific triggers
      if (targetId === '#home') {
        setTimeout(runHomeStatsCounter, 300);
      } else if (targetId === '#about') {
        setTimeout(runAboutStatsCounter, 300);
      }
    }

    // Back to top scrolling
    const bttBtn = document.querySelector('.back-to-top-btn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        bttBtn.classList.add('visible');
      } else {
        bttBtn.classList.remove('visible');
      }
    });

    bttBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Typing Effect for Hero Title
  function initTypingEffect() {
    const textSpan = document.querySelector('.typed-text');
    if (!textSpan) return;
    
    const words = ['Velocity Redefined', 'Power Unleashed', 'Future of Riding'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      textSpan.textContent = currentWord.substring(0, charIndex);

      let typingSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentWord.length) {
        // Pause at completion
        typingSpeed = 2500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // brief pause before next word
      }

      setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
  }

  // 6. Sticky Navbar Animation
  function initStickyHeader() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 7. Responsive Mobile Menu
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }

  // 8. Count-Up Stats Helper
  function runCounter(element, target, prefix = '', suffix = '', duration = 1500) {
    if (!element) return;
    
    let startTime = null;
    const startValue = 0;

    function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const val = Math.min(Math.floor((progress / duration) * (target - startValue) + startValue), target);
      
      element.innerHTML = `${prefix}${val.toLocaleString()}${suffix}`;
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        element.innerHTML = `${prefix}${target.toLocaleString()}${suffix}`;
      }
    }
    
    requestAnimationFrame(animate);
  }

  function runHomeStatsCounter() {
    const stat1 = document.getElementById('home-stat-speed');
    const stat2 = document.getElementById('home-stat-range');
    const stat3 = document.getElementById('home-stat-time');

    if (stat1 && stat1.getAttribute('data-counted') !== 'true') {
      runCounter(stat1, 120, '', ' <span>km/h</span>');
      runCounter(stat2, 180, '', ' <span>km</span>');
      runCounter(stat3, 90, '', ' <span>min</span>');
      stat1.setAttribute('data-counted', 'true');
    }
  }

  function runAboutStatsCounter() {
    const stat1 = document.getElementById('about-stat-bikes');
    const stat2 = document.getElementById('about-stat-dealers');
    const stat3 = document.getElementById('about-stat-speed');
    const stat4 = document.getElementById('about-stat-torque');

    if (stat1 && stat1.getAttribute('data-counted') !== 'true') {
      runCounter(stat1, 50, '', 'k+');
      runCounter(stat2, 120, '', '+');
      runCounter(stat3, 120, '', ' km/h');
      runCounter(stat4, 90, '', ' Nm');
      stat1.setAttribute('data-counted', 'true');
    }
  }

  // 9. Intersection Observer Animations (Fade-in on scroll)
  function initObserverAnimations() {
    const elementsToReveal = document.querySelectorAll('.mv-card, .stat-card, .tech-card, .perf-spec-card, .gallery-item, .info-card, .faq-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementsToReveal.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  }

  // 10. Product Catalog: Filters & Search
  function initProductCatalog() {
    const grid = document.querySelector('.bikes-grid');
    const searchInput = document.querySelector('.search-input');
    const filterTabs = document.querySelectorAll('.filter-tab');

    if (!grid) return;

    let activeCategory = 'all';
    let searchQuery = '';

    renderBikes();

    // Filters
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeCategory = tab.getAttribute('data-filter');
        renderBikes();
      });
    });

    // Search input change (debounced)
    let debounceTimer;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          searchQuery = e.target.value.toLowerCase().trim();
          renderBikes();
        }, 200);
      });
    }

    function renderBikes() {
      grid.innerHTML = '';
      
      const bikesArray = Object.values(BIKES_DATA);
      const filtered = bikesArray.filter(bike => {
        const matchesCategory = activeCategory === 'all' || bike.category.toLowerCase() === activeCategory;
        const matchesSearch = bike.name.toLowerCase().includes(searchQuery) || bike.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 4rem;">No electric bikes match your search parameters.</div>`;
        return;
      }

      filtered.forEach(bike => {
        const card = document.createElement('div');
        card.className = 'bike-card';
        card.setAttribute('data-id', bike.id);
        
        card.innerHTML = `
          <span class="bike-card-badge">Top Spec</span>
          <div class="bike-card-img-wrapper">
            <img src="${bike.image}" alt="${bike.name}" class="bike-card-img">
          </div>
          <div class="bike-card-content">
            <h3 class="bike-card-title">${bike.name}</h3>
            <span class="bike-card-category">${bike.category} Edition</span>
            
            <div class="bike-card-specs">
              <div class="bike-card-spec-item">
                <div class="bike-card-spec-val">${bike.topSpeed} km/h</div>
                <div class="bike-card-spec-lbl">Speed</div>
              </div>
              <div class="bike-card-spec-item">
                <div class="bike-card-spec-val">${bike.range} km</div>
                <div class="bike-card-spec-lbl">Range</div>
              </div>
              <div class="bike-card-spec-item">
                <div class="bike-card-spec-val">${bike.chargingTime} hr</div>
                <div class="bike-card-spec-lbl">Charge</div>
              </div>
            </div>
            
            <div class="bike-card-footer">
              <div class="bike-card-price">
                <span class="bike-card-price-label">Showroom Price</span>
                <span class="bike-card-price-val">$${bike.price.toLocaleString()}</span>
              </div>
              <button class="btn btn-primary btn-nav-cta view-details-btn">View Spec</button>
            </div>
          </div>
        `;
        
        // Tilt card effect (3D tilt on mousemove)
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left; // x position within card
          const y = e.clientY - rect.top;  // y position within card
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = -(y - centerY) / 15; // pitch
          const rotateY = (x - centerX) / 15;  // yaw
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0deg)';
        });

        // Click handler to open Details modal
        card.querySelector('.view-details-btn').addEventListener('click', () => {
          openDetailsModal(bike.id);
        });

        grid.appendChild(card);
      });
    }
  }

  // 11. Modal Logic: Details, Color Selection, EMI calculation
  const modal = document.querySelector('.details-modal');
  const closeBtn = document.querySelector('.close-modal-btn');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  function openDetailsModal(bikeId) {
    const bike = BIKES_DATA[bikeId];
    if (!bike || !modal) return;

    const modalTitle = modal.querySelector('.modal-info-pane h2');
    const modalCategory = modal.querySelector('.modal-info-pane .category');
    const modalDesc = modal.querySelector('.modal-desc');
    const modalImg = modal.querySelector('.modal-main-img');
    const priceVal = modal.querySelector('.pricing-val');
    
    // Details spec boxes
    const specSpeed = document.getElementById('modal-spec-speed');
    const specRange = document.getElementById('modal-spec-range');
    const specMotor = document.getElementById('modal-spec-motor');
    const specBattery = document.getElementById('modal-spec-battery');

    // Load data into modal elements
    modalTitle.textContent = bike.name;
    modalCategory.textContent = `${bike.category} Class`;
    modalDesc.textContent = bike.description;
    modalImg.src = bike.image;
    modalImg.style.filter = ''; // Reset filters
    priceVal.textContent = `$${bike.price.toLocaleString()}`;
    
    specSpeed.textContent = `${bike.topSpeed} km/h`;
    specRange.textContent = `${bike.range} km`;
    specMotor.textContent = bike.motor;
    specBattery.textContent = bike.battery;

    // Load Colors Variant selector
    const dotsContainer = modal.querySelector('.color-dots');
    dotsContainer.innerHTML = '';
    
    bike.colors.forEach((color, index) => {
      const dot = document.createElement('div');
      dot.className = `color-dot ${color} ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        dotsContainer.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        
        // Dynamic visual update on model variant selected (holographic/gradient filter shift)
        if (color === 'red') {
          modalImg.style.filter = 'hue-rotate(0deg)';
        } else if (color === 'black') {
          modalImg.style.filter = 'brightness(0.35) contrast(1.2)';
        } else if (color === 'silver') {
          modalImg.style.filter = 'grayscale(1) brightness(1.2) contrast(1.1)';
        }
      });
      dotsContainer.appendChild(dot);
    });

    // Preset EMI Calculator inputs with current bike price
    const loanSlider = document.getElementById('downpayment-slider');
    const tenureSlider = document.getElementById('tenure-slider');
    const dpLabelVal = document.getElementById('dp-val');
    
    loanSlider.max = bike.price * 0.8; // Max 80% downpayment
    loanSlider.min = bike.price * 0.1; // Min 10%
    loanSlider.value = bike.price * 0.2; // Default 20%
    
    dpLabelVal.textContent = `$${parseInt(loanSlider.value).toLocaleString()}`;
    
    // Calculate initial EMI
    calculateEmi(bike.price, loanSlider.value, tenureSlider.value);

    // Event listeners for EMI calculation inside modal
    loanSlider.oninput = (e) => {
      dpLabelVal.textContent = `$${parseInt(e.target.value).toLocaleString()}`;
      calculateEmi(bike.price, e.target.value, tenureSlider.value);
    };

    tenureSlider.oninput = (e) => {
      document.getElementById('tenure-val').textContent = `${e.target.value} Months`;
      calculateEmi(bike.price, loanSlider.value, e.target.value);
    };

    // Open Modal
    modal.classList.add('active');
  }

  function calculateEmi(totalPrice, downPayment, months) {
    const loanAmount = totalPrice - downPayment;
    const annualInterestRate = 0.085; // 8.5% interest rate
    const monthlyInterestRate = annualInterestRate / 12;
    
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / (Math.pow(1 + monthlyInterestRate, months) - 1);
    
    const emiElement = document.getElementById('calculated-emi-value');
    if (emiElement) {
      emiElement.textContent = `$${Math.round(emi)}/mo`;
    }
  }

  // 12. E-Bike 360° Interactive Canvas/Drag Simulator
  function init360Preview() {
    const previewContainer = document.getElementById('hologram-preview-frame');
    const overlayDial = document.querySelector('.holo-yaw-dial');
    const overlayPitch = document.querySelector('.holo-pitch-dial');
    
    if (!previewContainer) return;

    let isDragging = false;
    let startX = 0;
    let rotationY = 0;
    let rotationX = 0;

    previewContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      previewContainer.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      previewContainer.style.cursor = 'grab';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - startX;
      startX = e.clientX;
      
      // Update horizontal rotation (Yaw)
      rotationY += deltaX * 0.5;
      
      // Slight pitch based on vertical mouse movement (locked limits)
      const bikeImage = previewContainer.querySelector('.featured-bike-img');
      if (bikeImage) {
        bikeImage.style.transform = `perspective(1000px) rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
      }

      // Update HUD interface stats
      if (overlayDial) {
        overlayDial.textContent = `${Math.round((rotationY % 360 + 360) % 360)}° YAW`;
      }
    });

    // Touch support for mobiles
    previewContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - startX;
      startX = e.touches[0].clientX;
      rotationY += deltaX * 0.8;
      
      const bikeImage = previewContainer.querySelector('.featured-bike-img');
      if (bikeImage) {
        bikeImage.style.transform = `perspective(1000px) rotateY(${rotationY}deg)`;
      }
      
      if (overlayDial) {
        overlayDial.textContent = `${Math.round((rotationY % 360 + 360) % 360)}° YAW`;
      }
    });
  }

  // 13. Performance Section: Interactive Riding Modes Dashboard Simulator
  function initRidingModes() {
    const btns = document.querySelectorAll('.riding-mode-btn');
    const dashboard = document.querySelector('.sim-dashboard-display');
    const speedDialNum = document.querySelector('.dash-speed-num');
    const speedRange = document.getElementById('dash-mode-range');
    const speedRegen = document.getElementById('dash-mode-regen');
    
    if (btns.length === 0 || !dashboard) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const modeId = btn.getAttribute('data-mode');
        const modeData = RIDING_MODES[modeId];
        
        if (!modeData) return;

        // Custom Warp danger lighting warning
        if (modeId === 'warp') {
          dashboard.classList.add('warp-active');
        } else {
          dashboard.classList.remove('warp-active');
        }

        // Animate simulated speed dial with count-up to top speed
        runCounter(speedDialNum, modeData.speed, '', '', 1000);
        
        // Update stats
        if (speedRange) speedRange.textContent = `${modeData.range} km`;
        if (speedRegen) speedRegen.textContent = modeData.regen;
      });
    });
  }

  // 14. Emi Calculator (Alternative standalone calculator on page if present)
  function initEmiCalculator() {
    // Shared calculator function used. Added in openDetailsModal
  }

  // 15. Customer Testimonials Slider
  function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-nav-btn.prev');
    const nextBtn = document.querySelector('.testimonial-nav-btn.next');

    if (!track || slides.length === 0) return;

    let index = 0;

    function updateSlider() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateSlider();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
      });
    }

    // Auto-scroll slides
    let autoInterval = setInterval(() => {
      index = (index + 1) % slides.length;
      updateSlider();
    }, 8000);

    // Stop auto scroll on manual interaction
    const controls = [prevBtn, nextBtn];
    controls.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          clearInterval(autoInterval);
        });
      }
    });
  }

  // 16. FAQ Accordion Animation
  function initFaqAccordion() {
    const headers = document.querySelectorAll('.faq-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = header.nextElementSibling;
        
        const isActive = item.classList.contains('active');
        
        // Collapse other open FAQs
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq-content').style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          content.style.maxHeight = `${content.scrollHeight}px`;
        }
      });
    });
  }

  // 17. Form Validation (Contact and Booking forms)
  function initForms() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.querySelector('.success-modal');
    const successClose = document.querySelector('.success-modal .btn');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const inputs = contactForm.querySelectorAll('.form-input, .form-select, .form-textarea');

      inputs.forEach(input => {
        const group = input.parentElement;
        const value = input.value.trim();
        
        // Simple validations
        if (!value) {
          group.classList.add('error');
          isValid = false;
        } else {
          group.classList.remove('error');
        }

        // Email regex validation
        if (input.type === 'email' && value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            group.classList.add('error');
            isValid = false;
          }
        }

        // Phone validation
        if (input.type === 'tel' && value) {
          const phoneRegex = /^[0-9+() -]{7,15}$/;
          if (!phoneRegex.test(value)) {
            group.classList.add('error');
            isValid = false;
          }
        }
      });

      if (isValid) {
        // Trigger success feedback modal
        successModal.classList.add('active');
        contactForm.reset();
      }
    });

    if (successClose) {
      successClose.addEventListener('click', () => {
        successModal.classList.remove('active');
      });
    }
  }

  // 18. E-Bike Side-by-Side Comparison Feature
  function initComparison() {
    const bike1Select = document.getElementById('compare-bike-1');
    const compareBtn = document.getElementById('trigger-compare-btn');
    const compareGrid = document.querySelector('.compare-results-matrix');

    if (!bike1Select || !compareGrid) return;

    const bike2Select = document.getElementById('compare-bike-2');

    // Populates Select elements with options
    const bikeOptions = Object.values(BIKES_DATA);
    bikeOptions.forEach((bike, index) => {
      const opt1 = document.createElement('option');
      opt1.value = bike.id;
      opt1.textContent = bike.name;
      if (index === 0) opt1.selected = true;
      bike1Select.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = bike.id;
      opt2.textContent = bike.name;
      if (index === 1) opt2.selected = true;
      bike2Select.appendChild(opt2);
    });

    compareBtn.addEventListener('click', () => {
      const bike1 = BIKES_DATA[bike1Select.value];
      const bike2 = BIKES_DATA[bike2Select.value];

      if (!bike1 || !bike2) return;

      compareGrid.innerHTML = `
        <div class="compare-row header-row" style="display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 2px solid rgba(255,255,255,0.08); padding-bottom: 1.5rem; text-align: center;">
          <div style="font-family: var(--font-heading); font-weight: 800; text-align: left;">Specifications</div>
          <div style="font-family: var(--font-heading); font-weight: 800; color: var(--accent-primary);">${bike1.name}</div>
          <div style="font-family: var(--font-heading); font-weight: 800; color: var(--accent-primary);">${bike2.name}</div>
        </div>
        ${createCompareRow('Base Price', `$${bike1.price.toLocaleString()}`, `$${bike2.price.toLocaleString()}`)}
        ${createCompareRow('Class Category', bike1.category, bike2.category)}
        ${createCompareRow('Top Velocity', `${bike1.topSpeed} km/h`, `${bike2.topSpeed} km/h`)}
        ${createCompareRow('Riding Range', `${bike1.range} km`, `${bike2.range} km`)}
        ${createCompareRow('Charge Duration', `${bike1.chargingTime} hrs`, `${bike2.chargingTime} hrs`)}
        ${createCompareRow('Electric Motor', bike1.motor, bike2.motor)}
        ${createCompareRow('Battery pack', bike1.battery, bike2.battery)}
        ${createCompareRow('Peak Torque', bike1.torque, bike2.torque)}
        ${createCompareRow('Acceleration', bike1.acceleration, bike2.acceleration)}
      `;
    });

    function createCompareRow(label, val1, val2) {
      return `
        <div class="compare-row" style="display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 1.2rem 0; font-size: 0.9rem; text-align: center;">
          <div style="font-weight: 600; text-align: left; color: var(--text-secondary);">${label}</div>
          <div>${val1}</div>
          <div>${val2}</div>
        </div>
      `;
    }

    // Trigger initial comparison
    compareBtn.click();
  }

  // 19. Lightbox for Photo Gallery
  function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox-btn');

    if (galleryItems.length === 0 || !lightbox || !lightboxImg) return;

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-img');
        if (img) {
          lightboxImg.src = img.src;
          lightbox.classList.add('active');
        }
      });
    });

    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
});
