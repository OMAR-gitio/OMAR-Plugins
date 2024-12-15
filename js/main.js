// Particles.js Configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        }
    },
    retina_detect: true
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Animation
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(45, 45, 45, 0.95)';
    } else {
        navbar.style.background = 'var(--secondary-color)';
    }
});

// Card Click Handlers
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const pluginId = this.getAttribute('data-plugin');
        if (pluginId) {
            window.location.href = `plugins/${pluginId}.html`;
        }
    });
});

// Enhanced Card Hover Effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0) scale(1)';
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });

    // Parallax effect on hover
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 20;
        const yPercent = (y / rect.height - 0.5) * 20;
        
        this.style.transform = `translateY(-10px) scale(1.02) rotateX(${yPercent}deg) rotateY(${xPercent}deg)`;
    });
});

// Donation Modal
const donateBtn = document.querySelector('.donate-btn');
const modal = document.getElementById('donate-modal');
const closeModal = document.querySelector('.close-modal');

donateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// Contact Modal
const contactBtn = document.querySelector('.contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeContactModal = contactModal.querySelector('.close-modal');

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal.classList.add('active');
});

closeContactModal.addEventListener('click', () => {
    contactModal.classList.remove('active');
});

contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove('active');
    }
});

// Close contact modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.classList.contains('active')) {
        contactModal.classList.remove('active');
    }
});
