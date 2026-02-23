/* =========================================================================
   1. DATA DEFINITIONS
   ========================================================================= */

// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Building responsive, modern websites with clean code and optimal performance.',
        image: 'images/data-nexus.jpg',
        tech: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
        id: 2,
        title: 'Backend Systems',
        description: 'Creating robust server-side applications and RESTful APIs with Python.',
        image: 'images/quantum-cloud.jpg',
        tech: ['Python', 'MySQL', 'API']
    },
    {
        id: 3,
        title: 'Database Design',
        description: 'Designing and optimizing database schemas for efficient data management.',
        image: 'images/blockchain-vault.jpg',
        tech: ['MySQL', 'SQL', 'Data Modeling']
    },
    {
        id: 4,
        title: 'Linux Systems',
        description: 'System administration and shell scripting on Ubuntu Linux platforms.',
        image: 'images/cyber-defense.jpg',
        tech: ['Ubuntu', 'Bash', 'Server Admin']
    },
    {
        id: 5,
        title: 'C/C++ Development',
        description: 'Low-level programming for performance-critical applications and algorithms.',
        image: 'images/iot-matrix.jpg',
        tech: ['C', 'C++', 'Algorithms']
    },
    {
        id: 6,
        title: 'Problem Solving',
        description: 'Analytical thinking and algorithmic solutions to complex programming challenges.',
        image: 'images/neural-network.jpg',
        tech: ['Logic', 'Algorithms', 'Optimization']
    }
];

// Skills Data
const skillsData = [
    // Frontend
    { name: 'HTML5', icon: '🌐', level: 95, category: 'frontend' },
    { name: 'CSS3', icon: '🎨', level: 90, category: 'frontend' },
    // Backend
    { name: 'Python', icon: '🐍', level: 93, category: 'backend' },
    { name: 'JavaScript', icon: '⚡', level: 88, category: 'backend' },
    // Database
    { name: 'MySQL', icon: '🗄️', level: 85, category: 'database' },
    // Linux
    { name: 'Ubuntu', icon: '🐧', level: 82, category: 'linux' },
    // Programming
    { name: 'C', icon: '©️', level: 87, category: 'programming' },
    { name: 'C++', icon: '⚙️', level: 85, category: 'programming' }
];


/* =========================================================================
   2. MATRIX RAIN ENGINE (The "Cyber" Background)
   ========================================================================= */
function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    const resizeCanvas = () => {
        const parent = canvas.parentElement;
        width = canvas.width = parent.offsetWidth;
        height = canvas.height = parent.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');
    const fontSize = 16;
    const columns = width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    const draw = () => {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#00ff88'; // Neon Green Text
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    };
    setInterval(draw, 33);
}


/* =========================================================================
   3. MAIN INITIALIZATION (DOMContentLoaded)
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {

    // A. Start Matrix Rain
    initMatrixRain();

    // B. Initialize Components
    initCarousel();
    initSkillsGrid();
    initParticles();

    // C. Setup Mobile Menu
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // D. Hire Me Button Logic
    const hireMeBtn = document.getElementById('hireMeBtn');
    const hireMeOptions = document.getElementById('hireMeOptions');
    if (hireMeBtn && hireMeOptions) {
        hireMeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hireMeOptions.classList.toggle('active');
        });
        hireMeOptions.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        document.addEventListener('click', () => {
            hireMeOptions.classList.remove('active');
        });
    }

    // --- ULTIMATE ANIMATION ENGINE START ---

    // 1. QUANTUM SCROLL REVEAL
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll(
        '.section-title, .section-subtitle, .stat-card, .pillar, .skill-hexagon, .info-item, .form-group, .philosophy-subheading, .carousel-container'
    );

    revealElements.forEach((el, index) => {
        el.classList.add('reveal-hidden');
        if (el.classList.contains('stat-card') || el.classList.contains('skill-hexagon')) {
            el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        }
        revealObserver.observe(el);
    });

    // 2. HOLO-TILT EFFECT
    const tiltCards = document.querySelectorAll('.stat-card, .pillar, .carousel-item .card, .info-item');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%), linear-gradient(135deg, rgba(42, 42, 42, 0.5), rgba(26, 26, 26, 0.8))`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            card.style.background = '';
        });
    });

    // 3. CYBER CURSOR
    // Only create on non-touch devices to save performance
    if (window.matchMedia("(min-width: 992px)").matches) {
        const cursor = document.createElement('div');
        cursor.classList.add('cyber-cursor');
        document.body.appendChild(cursor);

        const cursorRing = document.createElement('div');
        cursorRing.classList.add('cyber-cursor-ring');
        document.body.appendChild(cursorRing);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorRing.style.left = e.clientX + 'px';
            cursorRing.style.top = e.clientY + 'px';
        });

        const interactiveElements = document.querySelectorAll('a, button, .card, input, textarea, .skill-hexagon');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.classList.add('active');
                cursor.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.classList.remove('active');
                cursor.classList.remove('active');
            });
        });
    }
    // --- ULTIMATE ANIMATION ENGINE END ---
});


/* =========================================================================
   4. COMPONENT LOGIC (Carousel, Skills, Particles)
   ========================================================================= */

// --- CAROUSEL LOGIC ---
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');

function createCarouselItem(data, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.dataset.index = index;

    const techBadges = data.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('');

    item.innerHTML = `
        <div class="card">
            <div class="card-number">0${data.id}</div>
            <div class="card-image">
                <img src="${data.image}" alt="${data.title}" onerror="this.src='https://via.placeholder.com/400x200/1a1a1a/9945ff?text=${encodeURIComponent(data.title)}'">
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="card-tech">${techBadges}</div>
            <button class="card-cta" onclick="scrollToSection('contact')">Get Started</button>
        </div>
    `;
    return item;
}

function initCarousel() {
    if (!carousel) return;
    portfolioData.forEach((data, index) => {
        const item = createCarouselItem(data, index);
        carousel.appendChild(item);

        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    updateCarousel();

    // Auto-rotate
    setInterval(nextSlide, 5000);

    // Controls
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalItems = items.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;

    items.forEach((item, index) => {
        let offset = index - currentIndex;
        if (offset > totalItems / 2) offset -= totalItems;
        else if (offset < -totalItems / 2) offset += totalItems;

        const absOffset = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;

        // Reset styles
        item.style.transform = '';
        item.style.opacity = '';
        item.style.zIndex = '';

        let spacing = isMobile ? 280 : (isTablet ? 340 : 400);

        if (absOffset === 0) {
            item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '10';
        } else if (absOffset === 1) {
            const translateX = sign * spacing;
            const rotateY = -sign * (isMobile ? 25 : 30);
            const scale = isMobile ? 0.88 : 0.85;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${rotateY}deg) scale(${scale})`;
            item.style.opacity = '0.8';
            item.style.zIndex = '5';
        } else {
            // Hide others or push far back
            item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
            item.style.opacity = '0';
            item.style.zIndex = '1';
        }
    });

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % portfolioData.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// --- SKILLS GRID LOGIC ---
function initSkillsGrid() {
    const skillsGrid = document.getElementById('skillsGrid');
    const categoryTabs = document.querySelectorAll('.category-tab');
    if (!skillsGrid) return;

    function displaySkills(category = 'all') {
        skillsGrid.innerHTML = '';
        const filteredSkills = category === 'all'
            ? skillsData
            : skillsData.filter(skill => skill.category === category);

        filteredSkills.forEach((skill, index) => {
            const hexagon = document.createElement('div');
            hexagon.className = 'skill-hexagon reveal-hidden'; // Add reveal class
            hexagon.style.animationDelay = `${index * 0.1}s`;
            hexagon.innerHTML = `
                <div class="hexagon-inner">
                    <div class="hexagon-content">
                        <div class="skill-icon-hex">${skill.icon}</div>
                        <div class="skill-name-hex">${skill.name}</div>
                        <div class="skill-level">
                            <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                        </div>
                        <div class="skill-percentage-hex">${skill.level}%</div>
                    </div>
                </div>
            `;
            skillsGrid.appendChild(hexagon);

            // Re-observe new elements for animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            });
            observer.observe(hexagon);
        });
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            displaySkills(tab.dataset.category);
        });
    });

    displaySkills();
}

// --- PARTICLES LOGIC ---
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (18 + Math.random() * 8) + 's';
        particlesContainer.appendChild(particle);
    }
}


/* =========================================================================
   5. UTILITIES & EVENT HANDLERS
   ========================================================================= */

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.getElementById('header');
    if (section) {
        const headerHeight = header.offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// Resize Handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateCarousel, 250);
});

// Header Scroll Effect & Active Nav
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    // 1. Header Background
    if (window.scrollY > 100) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    // 2. Active Nav Link
    const scrollPosition = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });

    // 3. Simple Parallax
    const parallax = document.querySelector('.hero');
    if (parallax) {
        parallax.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

// Stats Counter Animation
const statsObserverOptions = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(number => {
                if (!number.classList.contains('animated')) {
                    number.classList.add('animated');
                    animateCounter(number);
                }
            });
            // Stop observing once triggered
            statsObserver.unobserve(entry.target);
        }
    });
}, statsObserverOptions);

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        alert(`Thank you ${data.name}! Your message has been received.`);
        contactForm.reset();
    });
}

// Loader Logic (Consolidated)
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        // Fade out
        loader.classList.add('hidden');
        // Remove from DOM after fade to prevent clicks blocking
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});