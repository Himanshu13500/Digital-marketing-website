// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar shadow effect on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Enhanced Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Add floating animation to specific elements
            if (entry.target.classList.contains('team-card') || 
                entry.target.classList.contains('project-card') ||
                entry.target.classList.contains('learning-card')) {
                entry.target.classList.add('float-animation');
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .team-card, .project-card, .learning-card').forEach(element => {
    observer.observe(element);
});

// Add enhanced hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        
        // Show project info with animation
        const info = this.querySelector('.project-info');
        if (info) {
            info.style.transform = 'translateY(0)';
            info.style.opacity = '1';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        
        // Hide project info with animation
        const info = this.querySelector('.project-info');
        if (info) {
            info.style.transform = 'translateY(100%)';
            info.style.opacity = '0';
        }
    });
});

// Team member card hover effect
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        
        // Animate social links
        const socialLinks = this.querySelectorAll('.social-links a');
        socialLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.transform = 'translateY(0)';
                link.style.opacity = '1';
            }, index * 100);
        });
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        
        // Reset social links
        const socialLinks = this.querySelectorAll('.social-links a');
        socialLinks.forEach(link => {
            link.style.transform = 'translateY(20px)';
            link.style.opacity = '0';
        });
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    }
});

// Add typing effect to hero content
const heroContent = document.querySelector('.hero-content p.intro');
if (heroContent) {
    const text = heroContent.textContent;
    heroContent.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroContent.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add style for progress bar
const progressStyle = document.createElement('style');
progressStyle.textContent = `
    .progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
        width: 0%;
        z-index: 1000;
        transition: width 0.1s ease;
    }
`;
document.head.appendChild(progressStyle); 