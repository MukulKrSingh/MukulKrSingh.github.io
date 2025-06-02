/**
 * Main JavaScript for Mukul Singh's Portfolio Website
 * 
 * This file handles all the dynamic functionality of the website
 * including theme switching, animations, and content rendering.
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the loader
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelector('.loader').classList.add('hide');
        }, 500);
    });

    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', particlesConfig);
    }

    // Initialize theme based on user preference
    initializeTheme();
    
    // Populate content from content.js
    populateContent();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize back to top button
    initializeBackToTop();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Set current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// Initialize Theme
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        
        if (isDark) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// Initialize Mobile Menu
function initializeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Initialize Back to Top Button
function initializeBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize Contact Form
function initializeContactForm() {
    // Contact form handling is now managed by FormSubmit service
    // No JavaScript interaction needed as the form uses action="https://formsubmit.co/email@example.com"
    // The form will be submitted directly to FormSubmit which will handle email delivery
    
    // We can add form validation if needed
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Add any additional client-side validation here if needed
        console.log("Contact form initialized with FormSubmit service");
    }
}

// Initialize Scroll Animations
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all sections
    document.querySelectorAll('.section:not(#hero)').forEach(section => {
        observer.observe(section);
    });
    
    // Add animate class for smooth appearance
    document.querySelectorAll('.section:not(#hero)').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Add animate class styling
    const style = document.createElement('style');
    style.textContent = `
        .section.animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Populate Content from content.js
function populateContent() {
    // Populate personal information
    document.getElementById('personName').textContent = personalInfo.name;
    document.getElementById('personTitle').textContent = personalInfo.title;
    document.getElementById('personTagline').textContent = personalInfo.tagline;
    document.getElementById('aboutDescription').textContent = personalInfo.about;
    document.getElementById('personEmail').textContent = personalInfo.email;
    document.getElementById('personPhone').textContent = personalInfo.phone;
    document.getElementById('personLocation').textContent = personalInfo.location;
    document.getElementById('personEducation').textContent = personalInfo.education;
    document.getElementById('contactEmail').textContent = personalInfo.email;
    document.getElementById('contactPhone').textContent = personalInfo.phone;
    document.getElementById('contactLocation').textContent = personalInfo.location;
    document.getElementById('footerName').textContent = personalInfo.name;
    document.getElementById('footerTagline').textContent = personalInfo.tagline;
    
    // Set logo text to initials
    const initials = personalInfo.name.split(' ').map(name => name[0]).join('');
    document.getElementById('logo-text').textContent = initials;
    
    // Populate experience section
    const experienceTimeline = document.getElementById('experienceTimeline');
    experience.forEach(job => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        let achievementsHTML = '';
        job.achievements.forEach(achievement => {
            achievementsHTML += `<li>${achievement}</li>`;
        });
        
        timelineItem.innerHTML = `
            <div class="timeline-header">
                <h3 class="timeline-title">${job.position}</h3>
                <span class="timeline-period">${job.period}</span>
            </div>
            <div class="timeline-company">${job.company} • ${job.location}</div>
            <p class="timeline-description">${job.description}</p>
            <ul class="timeline-achievements">
                ${achievementsHTML}
            </ul>
        `;
        
        experienceTimeline.appendChild(timelineItem);
    });
    
    // Populate projects section
    const projectsGrid = document.getElementById('projectsGrid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        let techHTML = '';
        project.technologies.forEach(tech => {
            techHTML += `<span class="tech-tag">${tech}</span>`;
        });
        
        projectCard.innerHTML = `
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-period">${project.period}</div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${techHTML}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Populate skills section
    populateSkills('mobileSkills', skills.mobile);
    populateSkills('backendSkills', skills.backend);
    populateSkills('devopsSkills', skills.devops);
    populateSkills('languageSkills', skills.languages);
}

// Helper function to populate skills
function populateSkills(containerId, skillsList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    skillsList.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        container.appendChild(skillTag);
    });
}
