/* 
  AV MOTORS - PREMIUM EV SHOWROOM WEBSITE SCRIPT
  Designed by Antigravity (DeepMind Team)
*/

document.addEventListener('DOMContentLoaded', () => {
  // 21 Models Lineup Database (Real Business Content)
  const BIKES_DATA = {
    'AV': {
      id: 'AV',
      name: 'AV Scooter',
      category: 'Scooter',
      price: 69999,
      motor: '1.8 kW BLDC Hub Motor',
      battery: '1.9 kWh Lithium-Ion',
      topSpeed: 55,
      range: 85,
      chargingTime: 4.0,
      acceleration: '6.2s (0-40 km/h)',
      torque: '38 Nm',
      description: 'Sleek, efficient, and built for smooth neighborhood commutes. The signature AV scooter represents premium comfort at an accessible price.',
      image: 'assets/Oscar-Partner-Pro-1.png',
      colors: ['red', 'black', 'silver']
    },
    'magizh-40-lite': {
      id: 'magizh-40-lite',
      name: 'Magizh 40 Lite',
      category: 'Commuter',
      price: 54999,
      motor: '250W BLDC Hub Motor',
      battery: '1.2 kWh Lithium-Ion',
      topSpeed: 25,
      range: 65,
      chargingTime: 3.5,
      acceleration: 'N/A (LSEV Class)',
      torque: '18 Nm',
      description: 'Lightweight urban electric scooter designed for school students and senior citizens. No license, no registration required.',
      image: 'assets/Oscar-Partner-Pro-1.png',
      colors: ['black', 'blue']
    },
    'AV-storm': {
      id: 'AV-storm',
      name: 'AV Storm',
      category: 'Sports',
      price: 124999,
      motor: '4.5 kW Mid-Drive Motor',
      battery: '3.2 kWh LFP Battery',
      topSpeed: 95,
      range: 130,
      chargingTime: 3.0,
      acceleration: '3.8s (0-60 km/h)',
      torque: '72 Nm',
      description: 'Unleash track speeds with the AV Storm. Engineered with dual-channel ABS, liquid cooling features, and instantaneous throttle responses.',
      image: 'assets/Jeet-X-red.png',
      colors: ['red', 'black']
    },
    'AV-fleek': {
      id: 'AV-fleek',
      name: 'AV Fleek',
      category: 'City',
      price: 79999,
      motor: '2.2 kW BLDC Hub Motor',
      battery: '2.0 kWh Lithium-Ion',
      topSpeed: 65,
      range: 90,
      chargingTime: 4.0,
      acceleration: '5.5s (0-45 km/h)',
      torque: '40 Nm',
      description: 'The ultimate city runabout. Agile chassis, bright front halogen headlamps, and optimized under-seat cargo dimensions for busy market runs.',
      image: 'assets/Oscar-Partner-Pro-Plus.png',
      colors: ['red', 'black', 'white']
    },
    'battre-storie': {
      id: 'battre-storie',
      name: 'Battre Storie',
      category: 'Scooter',
      price: 94999,
      motor: '3.0 kW BLDC Hub Motor',
      battery: '2.4 kWh Lithium-Ion',
      topSpeed: 80,
      range: 110,
      chargingTime: 4.5,
      acceleration: '4.9s (0-50 km/h)',
      torque: '48 Nm',
      description: 'Classic luxury styling meets NEO Sync digital connectivity. Feature-rich, highly durable, and optimized for long-distance family rides.',
      image: 'assets/Storie.png',
      colors: ['red', 'blue', 'grey']
    },
    'lo-ev': {
      id: 'lo-ev',
      name: 'LO:EV Commuter',
      category: 'Commuter',
      price: 64999,
      motor: '250W BLDC Hub Motor',
      battery: '1.5 kWh Lithium-Ion',
      topSpeed: 25,
      range: 75,
      chargingTime: 4.0,
      acceleration: 'N/A (LSEV Class)',
      torque: '20 Nm',
      description: 'Practical electric moped built to slash travel costs. Ideal for local delivery executives and shop operators in Madurai.',
      image: 'assets/Oscar-Partner-Pro-1.png',
      colors: ['black', 'grey']
    },
    'dynamo': {
      id: 'dynamo',
      name: 'Dynamo Adventure',
      category: 'Adventure',
      price: 89999,
      motor: '3.2 kW BLDC Hub Motor',
      battery: '2.6 kWh Lithium-Ion',
      topSpeed: 70,
      range: 100,
      chargingTime: 4.5,
      acceleration: '5.2s (0-50 km/h)',
      torque: '45 Nm',
      description: 'High ground clearance, sturdy crash bars, and robust shock absorber suspensions make the Dynamo perfect for rough terrains and village tracks.',
      image: 'assets/Jeet-X-red.png',
      colors: ['black', 'green']
    },
    'dynamo-lima': {
      id: 'dynamo-lima',
      name: 'Dynamo Lima',
      category: 'Adventure',
      price: 99999,
      motor: '3.8 kW BLDC Hub Motor',
      battery: '2.9 kWh Lithium-Ion',
      topSpeed: 75,
      range: 115,
      chargingTime: 5.0,
      acceleration: '4.8s (0-50 km/h)',
      torque: '52 Nm',
      description: 'Upgraded version of the adventure series. Enhanced payload index, dual-disc brakes, and a state-of-the-art GPS tracker built right in.',
      image: 'assets/Jeet-X-red.png',
      colors: ['black', 'orange']
    },
    'gemopai-astrid-lite': {
      id: 'gemopai-astrid-lite',
      name: 'Gemopai Astrid Lite',
      category: 'City',
      price: 84999,
      motor: '2.4 kW BLDC Hub Motor',
      battery: '2.1 kWh Lithium-Ion',
      topSpeed: 65,
      range: 90,
      chargingTime: 4.0,
      acceleration: '5.6s (0-45 km/h)',
      torque: '42 Nm',
      description: 'Stylish, premium paint finishes and futuristic digital displays. Optimized power curves for daily urban maneuvers in traffic.',
      image: 'assets/Oscar-Partner-Pro-Plus.png',
      colors: ['red', 'black', 'blue']
    },
    'ivoomi-s1': {
      id: 'ivoomi-s1',
      name: 'iVOOMi S1',
      category: 'Scooter',
      price: 89999,
      motor: '2.5 kW BLDC Hub Motor',
      battery: '2.0 kWh Lithium-Ion',
      topSpeed: 65,
      range: 100,
      chargingTime: 4.0,
      acceleration: '5.8s (0-45 km/h)',
      torque: '40 Nm',
      description: 'India\'s highly popular family scooter. Offering swappable batteries, quick pick-up, and highly reliable brake systems.',
      image: 'assets/Storie.png',
      colors: ['red', 'black', 'white']
    },
    'ivoomi-s1-2.0': {
      id: 'ivoomi-s1-2.0',
      name: 'iVOOMi S1 2.0',
      category: 'Scooter',
      price: 99999,
      motor: '3.0 kW BLDC Hub Motor',
      battery: '2.5 kWh Lithium-Ion',
      topSpeed: 70,
      range: 120,
      chargingTime: 4.0,
      acceleration: '5.1s (0-50 km/h)',
      torque: '45 Nm',
      description: 'The upgraded 2.0 version. Better gradeability, longer riding range, and premium leather seats for maximum comfort.',
      image: 'assets/Storie.png',
      colors: ['black', 'grey', 'blue']
    },
    'jeet-x': {
      id: 'jeet-x',
      name: 'iVOOMi Jeet X',
      category: 'Sports',
      price: 114999,
      motor: '3.5 kW BLDC Hub Motor',
      battery: '2.8 kWh Lithium-Ion',
      topSpeed: 80,
      range: 115,
      chargingTime: 4.5,
      acceleration: '4.2s (0-50 km/h)',
      torque: '55 Nm',
      description: 'Sporty profile, aggressive lines, and responsive mid-section load balancing. Made for riders seeking throttle thrill in city paths.',
      image: 'assets/Jeet-X-red.png',
      colors: ['red', 'black']
    },
    'onzo-spark': {
      id: 'onzo-spark',
      name: 'ONZO Spark',
      category: 'City',
      price: 74999,
      motor: '2.0 kW BLDC Hub Motor',
      battery: '1.8 kWh Lithium-Ion',
      topSpeed: 60,
      range: 80,
      chargingTime: 3.5,
      acceleration: '6.0s (0-45 km/h)',
      torque: '36 Nm',
      description: 'Youthful design with vibrant decals and lightweight frame. Highly maneuverable through Madurai\'s narrow streets.',
      image: 'assets/Oscar-Partner-Pro-Plus.png',
      colors: ['red', 'black', 'yellow']
    },
    'sumo-loader': {
      id: 'sumo-loader',
      name: 'Sumo Loader',
      category: 'Loader',
      price: 104999,
      motor: '2.5 kW Heavy Duty Motor',
      battery: '2.8 kWh Lithium-Ion',
      topSpeed: 50,
      range: 100,
      chargingTime: 5.0,
      acceleration: 'Heavy Load Ratio',
      torque: '60 Nm',
      description: 'Electric commercial loader with flat rearbed. Reinforced steel chassis capable of carrying payloads up to 250kg easily.',
      image: 'assets/Oscar-Partner-Pro-1.png',
      colors: ['black', 'grey']
    },
    'bmr-hl-200': {
      id: 'bmr-hl-200',
      name: 'BMR HL 200',
      category: 'Loader',
      price: 109999,
      motor: '2.8 kW High Torque Motor',
      battery: '3.0 kWh LFP Cell Pack',
      topSpeed: 55,
      range: 110,
      chargingTime: 4.5,
      acceleration: 'High Payload Ratio',
      torque: '65 Nm',
      description: 'Heavy duty loader partner for commercial businesses. Employs thermal safe LFP batteries that excel under heavy payload runs.',
      image: 'assets/Oscar-Partner-Pro-1.png',
      colors: ['black', 'green']
    },
    'bliss': {
      id: 'bliss',
      name: 'AV Bliss',
      category: 'Scooter',
      price: 72999,
      motor: '1.5 kW BLDC Hub Motor',
      battery: '1.6 kWh Lithium-Ion',
      topSpeed: 50,
      range: 80,
      chargingTime: 3.5,
      acceleration: '6.8s (0-40 km/h)',
      torque: '32 Nm',
      description: 'Perfect companion for female commuters. Low seat height, front pockets for mobile charging, and lightweight design curves.',
      image: 'assets/Storie.png',
      colors: ['pink', 'blue', 'white']
    },
    'partner': {
      id: 'partner',
      name: 'AV Partner',
      category: 'Commuter',
      price: 82999,
      motor: '2.0 kW BLDC Hub Motor',
      battery: '2.0 kWh Lithium-Ion',
      topSpeed: 60,
      range: 95,
      chargingTime: 4.0,
      acceleration: '5.9s (0-45 km/h)',
      torque: '38 Nm',
      description: 'Ergonomically designed for long hours of comfortable riding. A highly dependable commuter choice for Madurai workers.',
      image: 'assets/Oscar-Partner-Pro-1.png',
      colors: ['black', 'grey']
    },
    'partner-pro': {
      id: 'partner-pro',
      name: 'Partner Pro',
      category: 'Commuter',
      price: 92999,
      motor: '2.5 kW BLDC Hub Motor',
      battery: '2.4 kWh Lithium-Ion',
      topSpeed: 70,
      range: 110,
      chargingTime: 4.5,
      acceleration: '5.2s (0-50 km/h)',
      torque: '45 Nm',
      description: 'Upgraded power delivery and dual-tone colors. Reliable commuter with superior shock-absorption frameworks.',
      image: 'assets/Oscar-Partner-Pro-1.png',
      colors: ['red', 'black']
    },
    'partner-pro-plus': {
      id: 'partner-pro-plus',
      name: 'Partner Pro Plus',
      category: 'Commuter',
      price: 104999,
      motor: '3.0 kW BLDC Hub Motor',
      battery: '3.0 kWh Lithium-Ion',
      topSpeed: 75,
      range: 130,
      chargingTime: 5.0,
      acceleration: '4.8s (0-50 km/h)',
      torque: '50 Nm',
      description: 'Flagship commuter model of AV series. Exceptional range, metallic highlights, and premium seating configuration.',
      image: 'assets/Oscar-Partner-Pro-Plus.png',
      colors: ['red', 'black', 'silver']
    },
    'three-wheeler-loader': {
      id: 'three-wheeler-loader',
      name: 'Three Wheeler Loader',
      category: 'Loader',
      price: 145999,
      motor: '3.5 kW High Torque Rear Axle',
      battery: '3.6 kWh LFP Battery Pack',
      topSpeed: 40,
      range: 90,
      chargingTime: 6.0,
      acceleration: 'Extreme Load Ratio',
      torque: '80 Nm',
      description: 'High capacity three-wheeled commercial loader. Perfect for heavy cargo transportation, agricultural supplies, and bulk logistics.',
      image: 'assets/Oscar-Partner-Pro-1.png',
      colors: ['blue', 'yellow']
    },
    'battery-charger': {
      id: 'battery-charger',
      name: 'Battery & Charger Kit',
      category: 'Commuter',
      price: 14999,
      motor: 'Smart Microchip Controller',
      battery: 'Universal swap modules',
      topSpeed: 0,
      range: 0,
      chargingTime: 1.0,
      acceleration: 'Fast Charge Tech',
      torque: 'N/A',
      description: 'High efficiency swap-ready lithium battery pack and dual-channel intelligent fast charger accessory bundle.',
      image: 'assets/Oscar-Partner-Pro-1.png',
      colors: ['black']
    }
  };

  // Branch addresses database
  const BRANCHES_DATA = {
    'madurai-main': {
      name: 'Ramanathapuram (Main Branch)',
      address: '3/20A, Madurai main road, Malligai Nagar, Periyar Nagar, Ramanathapuram, Tamil Nadu 623502',
      mapUrl: 'https://maps.google.com/maps?q=3/20A,+Madurai+Main+Road,+Malligai+Nagar,+Periyar+Nagar,+Ramanathapuram,+Tamil+Nadu+623502&t=&z=16&ie=UTF8&iwloc=&output=embed'
    },
  };

  const RIDING_MODES = {
    'eco': { name: 'Eco Mode', speed: 25, range: 130, regen: 'High (90%)', acceleration: 'Gradual / Smart' },
    'ride': { name: 'Ride Mode', speed: 45, range: 110, regen: 'Medium (60%)', acceleration: 'Smooth / City' },
    'sport': { name: 'Sport Mode', speed: 70, range: 90, regen: 'Low (20%)', acceleration: 'Aggressive / Punchy' },
    'warp': { name: 'Warp Mode', speed: 95, range: 70, regen: 'Disabled (0%)', acceleration: 'Instantaneous (Peak)' }
  };

  // Initialize Web App Components
  initLoadingScreen();
  initCursor();
  initTheme();
  initPageNavigation();
  initTypingEffect();
  initHeroSlider();
  initStickyHeader();
  initMobileMenu();
  initObserverAnimations();
  initProductCatalog();
  init360Preview();
  initRidingModes();
  initTestimonialSlider();
  initFaqAccordion();
  initForms();
  initComparison();
  initGalleryLightbox();
  initDealerLocator();
  initScrollProgressBar();
  initVideoModal();
  initLiveChat();
  initLoginModal();

  // 1. Loading Screen
  function initLoadingScreen() {
    const loader = document.getElementById('loading-screen');
    const bar = document.querySelector('.loader-bar');
    const status = document.querySelector('.loader-status');
    const statusMessages = [
      'Initializing Core...',
      'Syncing AV NEO Sync...',
      'Calibrating LFP Energy Cells...',
      'Mapping Ramanathapuram Coordinates...',
      'Showroom Live'
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
      
      // Cycle through status messages
      if (progress > (messageIndex + 1) * 20 && messageIndex < statusMessages.length - 1) {
        messageIndex++;
        status.textContent = statusMessages[messageIndex];
      }
    }, 80);
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

    // Smooth outline tracking using linear interpolation (lerp)
    function animateOutline() {
      const lerpFactor = 0.15;
      outlineX += (mouseX - outlineX) * lerpFactor;
      outlineY += (mouseY - outlineY) * lerpFactor;
      
      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Hover effect classes on clickable targets
    function refreshClickables() {
      const clickables = document.querySelectorAll('a, button, input, select, textarea, .faq-header, .filter-tab, .color-dot, .riding-mode-btn, .gallery-item, .branch-loc-btn');
      clickables.forEach(item => {
        // Clean up duplicates
        item.removeEventListener('mouseenter', addHoverClass);
        item.removeEventListener('mouseleave', removeHoverClass);
        
        item.addEventListener('mouseenter', addHoverClass);
        item.addEventListener('mouseleave', removeHoverClass);
      });
    }

    function addHoverClass() {
      document.body.classList.add('hovering-clickable');
    }

    function removeHoverClass() {
      document.body.classList.remove('hovering-clickable');
    }

    refreshClickables();
    // Expose refresh functionality globally for dynamically rendered components
    window.refreshCursorListeners = refreshClickables;
  }

  // 3. Dark/Light Theme Switching (localStorage)
  function initTheme() {
    const themeBtn = document.querySelector('.theme-toggle-btn');
    if (!themeBtn) return;
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
      
      // Scale-spin micro animation on click
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
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a, .logo, .footer-links a, .locator-trigger');
    const sections = document.querySelectorAll('.page-section');
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger');

    // Handle initial route from URL hash or default to Home
    let initialSection = window.location.hash || '#home';
    showSection(initialSection);

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        let target = link.getAttribute('href');
        if (target && target.startsWith('#')) {
          e.preventDefault();
          showSection(target);
          window.location.hash = target;
          
          // Close mobile menu if open
          if (mobileNav && mobileNav.classList.contains('active')) {
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
      document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(lnk => {
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

    // Back to top scrolling widget
    const bttBtn = document.querySelector('.back-to-top-btn');
    if (bttBtn) {
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
  }

  // 5. Typing Effect for Hero Title
  function initTypingEffect() {
    const textSpan = document.querySelector('.typed-text');
    if (!textSpan) return;
    
    const words = ['Velocity Redefined', 'Eco commuting', 'Style and comfort', 'Smart Sync features'];
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
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400; // short pause before typing next word
      }

      setTimeout(type, typingSpeed);
    }

    setTimeout(type, 800);
  }

  // 6. Sticky Navbar Animation
  function initStickyHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    
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

  // 8. Scroll Progress Indicator Bar
  function initScrollProgressBar() {
    const bar = document.getElementById('scroll-indicator-bar');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = `${scrollPercent}%`;
    });
  }

  // 9. Count-Up Stats Helper
  function runCounter(element, target, prefix = '', suffix = '', duration = 1200) {
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
      runCounter(stat1, 95, '', ' <span>km/h</span>');
      runCounter(stat2, 130, '', ' <span>km</span>');
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
      runCounter(stat1, 1200, '', '+');
      runCounter(stat2, 6, '', ' Branches');
      runCounter(stat3, 95, '', ' km/h');
      runCounter(stat4, 80, '', ' Nm');
      stat1.setAttribute('data-counted', 'true');
    }
  }

  // 10. Intersection Observer Scroll Reveals
  function initObserverAnimations() {
    const elementsToReveal = document.querySelectorAll('.why-card, .stat-card, .tech-card, .perf-spec-card, .gallery-item, .info-card, .faq-item, .full-review-card, .branch-preview-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementsToReveal.forEach(el => {
      el.classList.add('reveal-prep');
      observer.observe(el);
    });
  }

  // 11. Product Catalog: Search & Filter Tabs
  function initProductCatalog() {
    const grid = document.querySelector('.bikes-grid');
    const searchInput = document.querySelector('.search-input');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const formModelSelect = document.getElementById('form-model');

    if (!grid) return;

    let activeCategory = 'all';
    let searchQuery = '';

    // Populate contact form option list with EV model options
    if (formModelSelect) {
      formModelSelect.innerHTML = '<option value="" disabled selected>Select Bike...</option>';
      Object.values(BIKES_DATA).forEach(bike => {
        const option = document.createElement('option');
        option.value = bike.id;
        option.textContent = bike.name;
        formModelSelect.appendChild(option);
      });
    }

    renderBikes();

    // Event listener for Category filters
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeCategory = tab.getAttribute('data-filter');
        renderBikes();
      });
    });

    // Event listener for Search inputs (debounced)
    let debounceTimer;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          searchQuery = e.target.value.toLowerCase().trim();
          renderBikes();
        }, 150);
      });
    }

    function renderBikes() {
      grid.innerHTML = '';
      
      const bikesArray = Object.values(BIKES_DATA);
      const filtered = bikesArray.filter(bike => {
        const matchesCategory = activeCategory === 'all' || bike.category.toLowerCase() === activeCategory;
        const matchesSearch = bike.name.toLowerCase().includes(searchQuery) || bike.description.toLowerCase().includes(searchQuery) || bike.category.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 4rem; font-family: var(--font-body);">No electric models correspond to your criteria. Try adjusting the search.</div>`;
        return;
      }

      filtered.forEach(bike => {
        const card = document.createElement('div');
        card.className = 'bike-card';
        card.setAttribute('data-id', bike.id);
        
        card.innerHTML = `
          <span class="bike-card-badge">${bike.category === 'Loader' ? 'Commercial' : 'Authorised'}</span>
          <div class="bike-card-img-wrapper">
            <img src="${bike.image}" alt="${bike.name}" class="bike-card-img" onerror="this.src='https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=400'">
          </div>
          <div class="bike-card-content">
            <h3 class="bike-card-title">${bike.name}</h3>
            <span class="bike-card-category">${bike.category} Edition</span>
            
            <div class="bike-card-specs">
              <div class="bike-card-spec-item">
                <div class="bike-card-spec-val">${bike.topSpeed > 0 ? bike.topSpeed + ' km/h' : 'N/A'}</div>
                <div class="bike-card-spec-lbl">Speed</div>
              </div>
              <div class="bike-card-spec-item">
                <div class="bike-card-spec-val">${bike.range > 0 ? bike.range + ' km' : 'N/A'}</div>
                <div class="bike-card-spec-lbl">Range</div>
              </div>
              <div class="bike-card-spec-item">
                <div class="bike-card-spec-val">${bike.chargingTime > 0 ? bike.chargingTime + ' hr' : 'Swap'}</div>
                <div class="bike-card-spec-lbl">Charge</div>
              </div>
            </div>
            
            <div class="bike-card-footer">
              <div class="bike-card-price">
                <span class="bike-card-price-label">Ex-Showroom Price</span>
                <span class="bike-card-price-val">₹${bike.price.toLocaleString()}</span>
              </div>
              <button class="btn btn-primary btn-nav-cta view-details-btn">View Details</button>
            </div>
          </div>
        `;
        
        // 3D Card Tilt Effect on mouse interaction
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = -(y - centerY) / 20; 
          const rotateY = (x - centerX) / 20;  
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
          card.style.boxShadow = `0 15px 35px rgba(255, 30, 30, 0.15)`;
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0deg)';
          card.style.boxShadow = '';
        });

        // Click event to trigger Modal details window
        card.querySelector('.view-details-btn').addEventListener('click', () => {
          openDetailsModal(bike.id);
        });

        grid.appendChild(card);
      });

      // Refresh custom cursor hover triggers
      if (window.refreshCursorListeners) window.refreshCursorListeners();
    }

    // Connect any details modal trigger buttons (including mega menu, mobile nav, and top selling cards)
    document.querySelectorAll('[data-bike-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Only prevent default and open modal if it is in the product menu or catalog
        // Some elements might just use it as metadata
        const bikeId = btn.getAttribute('data-bike-id');
        if (bikeId && BIKES_DATA[bikeId]) {
          e.preventDefault();
          openDetailsModal(bikeId);
          // Smooth scroll to bikes section to let user see details modal open
          const bikesSection = document.getElementById('bikes');
          if (bikesSection) {
            bikesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  // 12. Modal Spec Details Panel, Colors & EMI calculators
  const modal = document.querySelector('.details-modal');
  const modalCloseBtns = [
    document.querySelector('.close-modal-btn'),
    document.getElementById('close-modal-btn-action'),
    document.getElementById('modal-book-ride-btn')
  ];
  
  modalCloseBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }
  });

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
    
    const specSpeed = document.getElementById('modal-spec-speed');
    const specRange = document.getElementById('modal-spec-range');
    const specMotor = document.getElementById('modal-spec-motor');
    const specBattery = document.getElementById('modal-spec-battery');

    // Pre-fill model select input in booking form
    const bookingModelSelect = document.getElementById('form-model');
    if (bookingModelSelect) {
      bookingModelSelect.value = bike.id;
      // Trigger update on step status
      updateTimelineSteps();
    }

    // Populate data fields
    modalTitle.textContent = bike.name;
    modalCategory.textContent = `${bike.category} Class`;
    modalDesc.textContent = bike.description;
    modalImg.src = bike.image;
    modalImg.style.filter = ''; // Reset image filters
    priceVal.textContent = `₹${bike.price.toLocaleString()}`;
    
    specSpeed.textContent = bike.topSpeed > 0 ? `${bike.topSpeed} km/h` : 'N/A';
    specRange.textContent = bike.range > 0 ? `${bike.range} km` : 'N/A';
    specMotor.textContent = bike.motor;
    specBattery.textContent = bike.battery;

    // Render Color Variants Selection Dots
    const dotsContainer = modal.querySelector('.color-dots');
    dotsContainer.innerHTML = '';
    
    bike.colors.forEach((color, idx) => {
      const dot = document.createElement('div');
      dot.className = `color-dot ${color} ${idx === 0 ? 'active' : ''}`;
      
      dot.addEventListener('click', () => {
        dotsContainer.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        
        // Dynamically adjust color tones on bike image using grayscale/hue-rotate filters
        if (color === 'red') {
          modalImg.style.filter = 'hue-rotate(0deg)';
        } else if (color === 'black') {
          modalImg.style.filter = 'brightness(0.35) contrast(1.25)';
        } else if (color === 'silver' || color === 'grey') {
          modalImg.style.filter = 'grayscale(1) brightness(1.2)';
        } else if (color === 'blue') {
          modalImg.style.filter = 'hue-rotate(240deg) saturate(1.5)';
        } else if (color === 'green') {
          modalImg.style.filter = 'hue-rotate(120deg) saturate(1.5)';
        } else if (color === 'pink') {
          modalImg.style.filter = 'hue-rotate(320deg) saturate(1.8)';
        } else if (color === 'orange') {
          modalImg.style.filter = 'hue-rotate(35deg) saturate(2.0)';
        } else if (color === 'yellow') {
          modalImg.style.filter = 'hue-rotate(60deg) saturate(2.0) brightness(1.1)';
        }
      });
      dotsContainer.appendChild(dot);
    });

    // Populate standalone EMI Calculator Inputs
    const loanSlider = document.getElementById('downpayment-slider');
    const tenureSlider = document.getElementById('tenure-slider');
    const dpLabelVal = document.getElementById('dp-val');
    
    loanSlider.max = Math.round(bike.price * 0.85); // Max 85% down payment
    loanSlider.min = Math.round(bike.price * 0.1);  // Min 10% down payment
    loanSlider.step = 1000;
    loanSlider.value = Math.round(bike.price * 0.2); // Default 20% downpayment
    
    dpLabelVal.textContent = `₹${parseInt(loanSlider.value).toLocaleString()}`;
    calculateEmi(bike.price, loanSlider.value, tenureSlider.value);

    // Dynamic slider updating bindings
    loanSlider.oninput = (e) => {
      dpLabelVal.textContent = `₹${parseInt(e.target.value).toLocaleString()}`;
      calculateEmi(bike.price, e.target.value, tenureSlider.value);
    };

    tenureSlider.oninput = (e) => {
      document.getElementById('tenure-val').textContent = `${e.target.value} Months`;
      calculateEmi(bike.price, loanSlider.value, e.target.value);
    };

    // Trigger details modal open
    modal.classList.add('active');
    
    // Setup temporary 360 preview drag interaction inside modal
    setupTeaserDrag(modalImg);
  }

  function calculateEmi(totalPrice, downPayment, months) {
    const loanAmount = totalPrice - downPayment;
    if (loanAmount <= 0) {
      document.getElementById('calculated-emi-value').textContent = '₹0/mo';
      return;
    }
    const annualInterestRate = 0.085; // 8.5% interest rate per annum
    const monthlyInterest = annualInterestRate / 12;
    
    const emi = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) / (Math.pow(1 + monthlyInterest, months) - 1);
    
    const emiLabel = document.getElementById('calculated-emi-value');
    if (emiLabel) {
      emiLabel.textContent = `₹${Math.round(emi).toLocaleString()}/mo`;
    }
  }

  // 13. Draggable 360 preview HUD interaction simulator
  function setupTeaserDrag(imgElement) {
    const teaser = document.getElementById('details-360-teaser');
    const angleText = teaser.querySelector('.yaw-angle-display');
    
    if (!teaser || !imgElement) return;

    let isDragging = false;
    let startX = 0;
    let currentRotate = 0;

    teaser.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      teaser.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      teaser.style.cursor = 'grab';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      startX = e.clientX;
      
      currentRotate += dx * 0.8;
      imgElement.style.transform = `perspective(800px) rotateY(${currentRotate}deg)`;
      angleText.textContent = `${Math.round((currentRotate % 360 + 360) % 360)}° ROTATING TELEMETRY`;
    });

    // Touch support for mobiles
    teaser.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - startX;
      startX = e.touches[0].clientX;
      
      currentRotate += dx * 1.0;
      imgElement.style.transform = `perspective(800px) rotateY(${currentRotate}deg)`;
      angleText.textContent = `${Math.round((currentRotate % 360 + 360) % 360)}° ROTATING TELEMETRY`;
    });
  }

  // 14. 360° preview Stub on Home (Featured section preview canvas)
  function init360Preview() {
    // Holographic drag preview configured on home banner visual
    const homeBikeVisual = document.querySelector('.hero-visual');
    if (!homeBikeVisual) return;
    const img = homeBikeVisual.querySelector('.hero-bike-img');
    const glow = homeBikeVisual.querySelector('.hero-bike-glow');
    
    if (!img) return;

    homeBikeVisual.addEventListener('mousemove', (e) => {
      const rect = homeBikeVisual.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotY = (x - centerX) / 10;
      const rotX = -(y - centerY) / 10;
      
      img.style.transform = `perspective(1000px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(-8px)`;
      if (glow) {
        glow.style.transform = `translate3d(${(x - centerX) * 0.1}px, ${(y - centerY) * 0.1}px, 0)`;
      }
    });

    homeBikeVisual.addEventListener('mouseleave', () => {
      img.style.transform = '';
      if (glow) glow.style.transform = '';
    });
  }

  // 15. Performance Modes Console Dashboard Simulator
  function initRidingModes() {
    const btns = document.querySelectorAll('.riding-mode-btn');
    const dashboard = document.querySelector('.sim-dashboard-display');
    const speedDialText = document.querySelector('.dash-speed-num');
    const modeRangeText = document.getElementById('dash-mode-range');
    const modeRegenText = document.getElementById('dash-mode-regen');
    
    if (btns.length === 0 || !dashboard) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const modeKey = btn.getAttribute('data-mode');
        const modeInfo = RIDING_MODES[modeKey];
        
        if (!modeInfo) return;

        // Danger light indicators for peak WARP performance settings
        if (modeKey === 'warp') {
          dashboard.classList.add('warp-active');
        } else {
          dashboard.classList.remove('warp-active');
        }

        // Animate speed dial count-up
        runCounter(speedDialText, modeInfo.speed, '', '', 800);
        
        if (modeRangeText) modeRangeText.textContent = `${modeInfo.range} km`;
        if (modeRegenText) modeRegenText.textContent = modeInfo.regen;
      });
    });
  }

  // 16. Testimonial Carousel slider on Home
  function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-nav-btn.prev');
    const nextBtn = document.querySelector('.testimonial-nav-btn.next');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    function moveSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveSlider();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveSlider();
      });
    }

    // Auto rotate review slides
    let autoTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      moveSlider();
    }, 7000);

    const pauseEvents = [prevBtn, nextBtn];
    pauseEvents.forEach(el => {
      if (el) {
        el.addEventListener('click', () => {
          clearInterval(autoTimer);
        });
      }
    });
  }

  // 17. FAQ Accordion panel
  function initFaqAccordion() {
    const headers = document.querySelectorAll('.faq-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const body = header.nextElementSibling;
        const isActive = item.classList.contains('active');
        
        // Collapse all other panels
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active');
          const content = i.querySelector('.faq-content');
          if (content) content.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          body.style.maxHeight = `${body.scrollHeight}px`;
        }
      });
    });
  }

  // 18. Booking timelines & Contact Validations
  function initForms() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const successModal = document.querySelector('.success-modal');
    const successClose = document.getElementById('close-success-modal-btn');
    const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');

    // Input listeners to update the booking process timeline steps
    inputs.forEach(input => {
      input.addEventListener('input', updateTimelineSteps);
      input.addEventListener('change', updateTimelineSteps);
    });

    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const formFields = contactForm.querySelectorAll('[required]');

        formFields.forEach(field => {
          const formGroup = field.parentElement;
          const inputVal = field.value.trim();
          
          if (!inputVal) {
            formGroup.classList.add('error');
            isValid = false;
          } else {
            formGroup.classList.remove('error');
          }

          // Validate Email formats
          if (field.type === 'email' && inputVal) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(inputVal)) {
              formGroup.classList.add('error');
              isValid = false;
            }
          }

          // Validate Phone numbers
          if (field.type === 'tel' && inputVal) {
            const phoneRegex = /^[0-9+() -]{10,15}$/;
            if (!phoneRegex.test(inputVal)) {
              formGroup.classList.add('error');
              isValid = false;
            }
          }
        });

        if (isValid) {
          // Pre-fill modal text description
          const name = document.getElementById('form-name').value;
          const phone = document.getElementById('form-phone').value;
          const selectBikeVal = document.getElementById('form-model').value;
          const selectedBikeObj = BIKES_DATA[selectBikeVal] || { name: 'E-Bike' };
          
          const successDesc = successModal.querySelector('.success-desc');
          successDesc.innerHTML = `Congratulations <strong>${name}</strong>! Your test ride request for the <strong>${selectedBikeObj.name}</strong> is locked. Coordinates transmitted. Our branch will contact you on <strong>${phone}</strong> within 2 hours to confirm your ride schedule.`;
          
          successModal.classList.add('active');
          contactForm.reset();
          resetTimeline();
        }
      });
    }

    if (successClose) {
      successClose.addEventListener('click', () => {
        successModal.classList.remove('active');
      });
    }

    // Newsletter validation
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('.newsletter-input');
        if (input && input.value.trim()) {
          const successDesc = successModal.querySelector('.success-desc');
          successDesc.textContent = `Excellent! You have successfully subscribed to the AV MOTORS engineering newsletter. You will receive promotional updates and sale highlights soon.`;
          successModal.classList.add('active');
          newsletterForm.reset();
        }
      });
    }
  }

  // Timeline steps updater
  function updateTimelineSteps() {
    const name = document.getElementById('form-name')?.value.trim();
    const lname = document.getElementById('form-lname')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const model = document.getElementById('form-model')?.value;
    const branch = document.getElementById('form-branch')?.value;
    const date = document.getElementById('form-date')?.value;

    const steps = document.querySelectorAll('.booking-timeline .timeline-step');
    if (steps.length === 0) return;

    // Reset step styles
    steps.forEach(s => s.classList.remove('active'));

    steps[0].classList.add('active'); // Step 1 chosen ride active by default

    // Step 2 active if bike model is selected
    if (model) {
      steps[1].classList.add('active');
    }
    // Step 3 active if date and showroom branch are selected
    if (model && branch && date) {
      steps[2].classList.add('active');
    }
    // Step 4 active if contact details (name, email, phone) are provided
    if (model && branch && date && name && lname && email && phone) {
      steps[3].classList.add('active');
    }
  }

  function resetTimeline() {
    const steps = document.querySelectorAll('.booking-timeline .timeline-step');
    steps.forEach((s, idx) => {
      if (idx === 0) s.classList.add('active');
      else s.classList.remove('active');
    });
  }

  // 19. Bike telemetry matrix comparisons
  function initComparison() {
    const select1 = document.getElementById('compare-bike-1');
    const select2 = document.getElementById('compare-bike-2');
    const compareBtn = document.getElementById('trigger-compare-btn');
    const resultsTable = document.querySelector('.compare-results-matrix');

    if (!select1 || !select2 || !resultsTable) return;

    // Populate comparison dropdown selectors with 21 models
    const list = Object.values(BIKES_DATA);
    list.forEach((bike, index) => {
      const opt1 = document.createElement('option');
      opt1.value = bike.id;
      opt1.textContent = bike.name;
      if (index === 4) opt1.selected = true; // Default to Battre Storie
      select1.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = bike.id;
      opt2.textContent = bike.name;
      if (index === 11) opt2.selected = true; // Default to Jeet X
      select2.appendChild(opt2);
    });

    compareBtn.addEventListener('click', runComparisonAnalysis);

    function runComparisonAnalysis() {
      const b1 = BIKES_DATA[select1.value];
      const b2 = BIKES_DATA[select2.value];

      if (!b1 || !b2) return;

      resultsTable.innerHTML = `
        <div class="compare-row header-row" style="display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 2px solid rgba(255,255,255,0.08); padding-bottom: 1.5rem; text-align: center;">
          <div style="font-family: var(--font-heading); font-weight: 800; text-align: left;">EV Metrics</div>
          <div style="font-family: var(--font-heading); font-weight: 800; color: var(--accent-primary);">${b1.name}</div>
          <div style="font-family: var(--font-heading); font-weight: 800; color: var(--accent-primary);">${b2.name}</div>
        </div>
        ${createMatrixRow('Ex-Showroom Price', `₹${b1.price.toLocaleString()}`, `₹${b2.price.toLocaleString()}`)}
        ${createMatrixRow('Class Category', b1.category, b2.category)}
        ${createMatrixRow('Top Speed limit', b1.topSpeed > 0 ? `${b1.topSpeed} km/h` : 'N/A', b2.topSpeed > 0 ? `${b2.topSpeed} km/h` : 'N/A')}
        ${createMatrixRow('Riding Range', b1.range > 0 ? `${b1.range} km` : 'N/A', b2.range > 0 ? `${b2.range} km` : 'N/A')}
        ${createMatrixRow('Charging Time', b1.chargingTime > 0 ? `${b1.chargingTime} hrs` : 'Swap Pack', b2.chargingTime > 0 ? `${b2.chargingTime} hrs` : 'Swap Pack')}
        ${createMatrixRow('Motor Spec Type', b1.motor, b2.motor)}
        ${createMatrixRow('Battery Pack Chem', b1.battery, b2.battery)}
        ${createMatrixRow('Engine Peak Torque', b1.torque, b2.torque)}
        ${createMatrixRow('Acceleration Ratio', b1.acceleration, b2.acceleration)}
      `;
    }

    function createMatrixRow(title, cell1, cell2) {
      return `
        <div class="compare-row" style="display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 1.2rem 0; font-size: 0.9rem; text-align: center; font-family: var(--font-body);">
          <div style="font-weight: 600; text-align: left; color: var(--text-secondary);">${title}</div>
          <div>${cell1}</div>
          <div>${cell2}</div>
        </div>
      `;
    }

    // Run comparison once at initialize
    runComparisonAnalysis();
  }

  // 20. Gallery lightbox popups
  function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox-btn');

    if (galleryItems.length === 0 || !lightbox || !lightboxImg || !closeBtn) return;

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const imageSrc = item.querySelector('.gallery-img');
        if (imageSrc) {
          lightboxImg.src = imageSrc.src;
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

  // 21. Showroom Video Modal Popup
  function initVideoModal() {
    const playBtn = document.querySelector('.video-play-btn');
    const modal = document.querySelector('.video-modal');
    const closeBtn = document.querySelector('.close-video-btn');
    const video = document.getElementById('modal-video-element');

    if (!playBtn || !modal || !closeBtn || !video) return;

    playBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
      video.play();
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  // 22. Dealer locator address & Google Maps console switcher
  function initDealerLocator() {
    const branchButtons = document.querySelectorAll('.branch-loc-btn');
    const locBranchName = document.getElementById('locator-branch-name');
    const locBranchAddr = document.getElementById('locator-branch-address');
    const mapsContainer = document.getElementById('locator-map-iframe-container');
    const directionsBtn = document.getElementById('directions-btn');

    if (branchButtons.length === 0 || !locBranchName || !locBranchAddr || !mapsContainer) return;

    branchButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        branchButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const branchKey = btn.getAttribute('data-branch');
        const branch = BRANCHES_DATA[branchKey];
        
        if (!branch) return;

        // Update titles
        locBranchName.textContent = branch.name;
        locBranchAddr.textContent = branch.address;

        // Render dynamic google map iframe inside the dashboard placeholder container
        mapsContainer.innerHTML = `
          <iframe 
            src="${branch.mapUrl}" 
            width="100%" 
            height="100%" 
            style="border:0; border-radius:12px;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        `;
        
        if (directionsBtn) {
          directionsBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`;
        }
      });
    });

    // Handle home screen locator preview clicks
    document.querySelectorAll('.branch-preview-card .locator-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const branchKey = trigger.getAttribute('data-branch');
        const targetBtn = document.querySelector(`.branch-loc-btn[data-branch="${branchKey}"]`);
        if (targetBtn) {
          setTimeout(() => {
            targetBtn.click();
          }, 400);
        }
      });
    });

    // Trigger main branch display on initialization
    branchButtons[0].click();
  }

  // 23. Interactive AI Live Chat Widget
  function initLiveChat() {
    const chatBtn = document.querySelector('.live-chat-btn');
    const overlay = document.querySelector('.live-chat-overlay');
    const closeBtn = document.querySelector('.chat-close-btn');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatMessageInput');
    const chatMessages = document.querySelector('.chat-messages');

    if (!chatBtn || !overlay || !closeBtn || !chatForm || !chatInput || !chatMessages) return;

    chatBtn.addEventListener('click', () => {
      overlay.style.display = overlay.style.display === 'none' ? 'flex' : 'none';
      if (overlay.style.display === 'flex') {
        chatInput.focus();
      }
    });

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const messageText = chatInput.value.trim();
      
      if (!messageText) return;

      // Add user message bubble
      appendMessageBubble(messageText, 'user');
      chatInput.value = '';
      
      // Simulate typing indicator response
      setTimeout(() => {
        const replyText = getSimulatedAgentResponse(messageText);
        appendMessageBubble(replyText, 'agent');
      }, 1000);
    });

    function appendMessageBubble(text, sender) {
      const bubble = document.createElement('div');
      
      if (sender === 'user') {
        bubble.style.alignSelf = 'flex-end';
        bubble.style.background = 'var(--accent-primary)';
        bubble.style.color = 'white';
        bubble.style.padding = '0.8rem 1.2rem';
        bubble.style.borderRadius = '15px';
        bubble.style.borderBottomRightRadius = '3px';
        bubble.style.maxWidth = '80%';
        bubble.style.boxShadow = '0 3px 10px rgba(255, 30, 30, 0.15)';
      } else {
        bubble.style.alignSelf = 'flex-start';
        bubble.style.background = 'rgba(255,255,255,0.05)';
        bubble.style.color = 'var(--text-primary)';
        bubble.style.padding = '0.8rem 1.2rem';
        bubble.style.borderRadius = '15px';
        bubble.style.borderBottomLeftRadius = '3px';
        bubble.style.maxWidth = '80%';
        bubble.style.border = '1px solid rgba(255,255,255,0.05)';
      }

      bubble.textContent = text;
      chatMessages.appendChild(bubble);
      
      // Scroll to bottom of messages container
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getSimulatedAgentResponse(query) {
      const q = query.toLowerCase();
      
      if (q.includes('aadi') || q.includes('sale') || q.includes('offer') || q.includes('discount')) {
        return "Our AV AADI SALE is live! Get ₹10,000 off on all electric bikes, Zero Down Payment options, 1 year of free servicing, and get a draw entry to win a LED TV or Gold Coin! 📺🥇";
      }
      if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('rate')) {
        return "Our models start from just ₹54,999 (Magizh 40 Lite) up to ₹1,45,999 (Three Wheeler Loader). You can estimate EMIs using the calculator inside our Bikes showroom! 💸";
      }
      if (q.includes('storie') || q.includes('battre')) {
        return "The Battre Storie is our top-selling smart scooter (₹94,999 Ex-Showroom). It offers 110km of range, 80 km/h top speed, and comes with smart GPS NEO Sync dashboard integration. Would you like to schedule a test ride?";
      }
      if (q.includes('jeet') || q.includes('ivoomi')) {
        return "We have the iVOOMi S1 (₹89,999), S1 2.0 (₹99,999), and the sporty Jeet X (₹1,14,999). iVOOMi offers incredible speed-to-range optimization. Shall I lock a ride request for you?";
      }
      if (q.includes('loader') || q.includes('three wheeler') || q.includes('sumo')) {
        return "We have heavy duty loaders: Sumo Loader, BMR HL 200, and the Three Wheeler Loader (rear axle torque: 80Nm). Best choice for commercial freight in Madurai!";
      }
      if (q.includes('location') || q.includes('where') || q.includes('branch') || q.includes('address')) {
        return "We have 6 experience branches: Madurai (Moondrumavadi & Alagar Kovil Rd), Sellur, Melur, Othakadai, and Pudukkottai. All branch locations are mapped in our Contacts section! 📍";
      }
      if (q.includes('phone') || q.includes('contact') || q.includes('call') || q.includes('number')) {
        return "You can reach our help desk on +91 90805 55234 or email avmotors@gmail.com. We are open Mon-Sat 9am-9pm! 📞";
      }
      
      return "Got it! To get custom specs, booking confirmations, or direct assistance, please call our Madurai coordinator at +91 90805 55234. Let us know how we can power your ride! ⚡";
    }
  }

  // 24. Premium Hero Banner Slider Logic
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.slider-control.prev');
    const nextBtn = document.querySelector('.slider-control.next');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let slideInterval;
    
    // Track stats counter targets for each slide
    // Let's set speed, range, charge times for countup to match slide ebike type
    const slideTelemetries = [
      { speed: 80, range: 110, time: 4.5 }, // Storie (Slide 1)
      { speed: 70, range: 110, time: 4.5 }, // Service (Slide 2)
      { speed: 75, range: 130, time: 5.0 }, // Zero down (Slide 3)
      { speed: 80, range: 115, time: 4.5 }, // Discount (Slide 4)
      { speed: 65, range: 100, time: 4.0 }, // Assist 1 (Slide 5)
      { speed: 70, range: 95, time: 4.0 }  // Assist 2 (Slide 6)
    ];

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      
      const activeDot = document.querySelector(`.slider-dots .dot[data-index="${currentSlide}"]`);
      if (activeDot) activeDot.classList.add('active');
      
      // Update statistics panel on slider change
      updateStatsPanel(slideTelemetries[currentSlide]);
    }
    
    function updateStatsPanel(tel) {
      const speedEl = document.getElementById('home-stat-speed');
      const rangeEl = document.getElementById('home-stat-range');
      const timeEl = document.getElementById('home-stat-time');
      
      if (speedEl && rangeEl && timeEl) {
        animateValue(speedEl, parseInt(speedEl.textContent, 10) || 0, tel.speed, 800, ' km/h');
        animateValue(rangeEl, parseInt(rangeEl.textContent, 10) || 0, tel.range, 800, ' km');
        animateValue(timeEl, parseFloat(timeEl.textContent) || 0, tel.time, 800, ' hrs', true);
      }
    }

    function animateValue(obj, start, end, duration, suffix = '', isFloat = false) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let val = progress * (end - start) + start;
        if (isFloat) {
          obj.innerHTML = val.toFixed(1) + suffix;
        } else {
          obj.innerHTML = Math.floor(val) + suffix;
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
    
    function startAutoSlide() {
      stopAutoSlide();
      slideInterval = setInterval(nextSlide, 6000);
    }
    
    function stopAutoSlide() {
      if (slideInterval) clearInterval(slideInterval);
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
      });
    }
    
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        showSlide(index);
        startAutoSlide();
      });
    });
    
    startAutoSlide();
  }

  // 25. Futuristic Login Modal Controller
  function initLoginModal() {
    const loginModal = document.getElementById('loginModal');
    const loginTrigger = document.querySelector('.login-nav-btn');
    const mobileLoginTrigger = document.querySelector('.mobile-nav-links a[href="#login"]');
    const closeBtn = document.querySelector('.close-login-btn');
    const loginForm = document.getElementById('loginForm');
    
    if (!loginModal) return;
    
    function openLogin() {
      loginModal.classList.add('active');
    }
    
    function closeLogin() {
      loginModal.classList.remove('active');
    }
    
    if (loginTrigger) {
      loginTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openLogin();
      });
    }
    
    if (mobileLoginTrigger) {
      mobileLoginTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        const mobileNav = document.querySelector('.mobile-nav');
        const hamburger = document.querySelector('.hamburger');
        if (mobileNav && mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
          if (hamburger) hamburger.classList.remove('active');
        }
        openLogin();
      });
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', closeLogin);
    }
    
    window.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        closeLogin();
      }
    });
    
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        console.log(`[AUTHENTICATION CONSOLE] Rider login attempt with: ${email}`);
        alert(`Console Authentication Successful!\nWelcome back Rider: ${email}`);
        closeLogin();
        loginForm.reset();
      });
    }
  }

  // 26. Hot Selling Carousel slider touch logic (Home slider)
  (function initHotSellingTouch() {
    const track = document.querySelector('.top-selling-track');
    const slides = document.querySelectorAll('.top-selling-slide');
    const next = document.querySelector('.next-arrow');
    const prev = document.querySelector('.prev-arrow');
    
    if (!track || slides.length === 0 || !next || !prev) return;

    let index = 0;
    
    function updateSlide() {
      // Calculate responsive spacing
      const width = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${index * (width + 30)}px)`;
      
      // Toggle arrow disabled class limits
      if (index === 0) prev.style.opacity = '0.3';
      else prev.style.opacity = '1';
      
      const maxIndex = slides.length - Math.floor(window.innerWidth / 450);
      if (index >= Math.max(0, maxIndex)) next.style.opacity = '0.3';
      else next.style.opacity = '1';
    }

    next.addEventListener('click', () => {
      const maxIndex = slides.length - Math.floor(window.innerWidth / 450);
      if (index < Math.max(0, maxIndex)) {
        index++;
        updateSlide();
      }
    });

    prev.addEventListener('click', () => {
      if (index > 0) {
        index--;
        updateSlide();
      }
    });

    window.addEventListener('resize', updateSlide);
    // Trigger initial positioning
    updateSlide();
  })();
});
