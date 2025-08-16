document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    // Dynamic Car Models based on Make
    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');

    if (makeSelect && modelSelect) {
        const carModels = {
            'audi': ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7', 'e-tron GT'],
            'bmw': ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'M3', 'M4'],
            'mercedes': ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'AMG GT'],
            'toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Land Cruiser'],
            'honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'HR-V'],
            'lexus': ['ES', 'LS', 'RX', 'NX', 'LX']
        };

        makeSelect.addEventListener('change', function() {
            const selectedMake = this.value;
            
            // Clear the current options
            modelSelect.innerHTML = '<option value="">Any Model</option>';
            
            // If a make is selected, populate models
            if (selectedMake && carModels[selectedMake]) {
                carModels[selectedMake].forEach(model => {
                    const option = document.createElement('option');
                    option.value = model.toLowerCase().replace(' ', '-');
                    option.textContent = model;
                    modelSelect.appendChild(option);
                });
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // Simulate form submission
            console.log('Form submitted with values:', formValues);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            
            // Clear form
            this.reset();
            
            // Add success message to form
            this.appendChild(successMessage);
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }

    // Simple image slider for testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = 'block';
            } else {
                testimonial.style.display = 'none';
            }
        });
    }

    // Only initialize if there are multiple testimonials and we're on mobile
    function initTestimonialSlider() {
        if (testimonials.length > 1 && window.innerWidth < 768) {
            showTestimonial(currentTestimonial);
            
            // Auto-rotate testimonials
            setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 5000);
        } else {
            // Reset display for desktop
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'block';
            });
        }
    }

    // Initialize on load and resize
    if (testimonials.length) {
        initTestimonialSlider();
        window.addEventListener('resize', initTestimonialSlider);
    }

    // Add CSS class for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 768px) {
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: white;
                flex-direction: column;
                padding: 20px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                transform: translateY(-10px);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav-links.show {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-links li {
                margin: 15px 0;
            }
            
            .form-success {
                background-color: #4CAF50;
                color: white;
                padding: 15px;
                border-radius: 5px;
                margin-top: 20px;
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);
});