// Hero Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-advance slideshow every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Scroll Navigation
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animations - Intersection Observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const totalTestimonials = testimonialSlides.length;

function showTestimonial(index) {
    testimonialSlides.forEach(slide => slide.classList.remove('active'));
    currentTestimonial = (index + totalTestimonials) % totalTestimonials;
    testimonialSlides[currentTestimonial].classList.add('active');
}

// Testimonial navigation buttons
document.querySelector('.slider-arrow.prev').addEventListener('click', () => {
    showTestimonial(currentTestimonial - 1);
});

document.querySelector('.slider-arrow.next').addEventListener('click', () => {
    showTestimonial(currentTestimonial + 1);
});

// Auto-advance testimonials every 6 seconds
setInterval(() => {
    showTestimonial(currentTestimonial + 1);
}, 6000);

// Contact Form Handling
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Basic validation
    if (!name || !email || !phone) {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.className = 'form-message error';
        return;
    }

    if (!email.includes('@')) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'form-message error';
        return;
    }

    // Show success message
    formMessage.textContent = 'Thank you for contacting us! We will reach out to schedule your free consultation within 24 hours.';
    formMessage.className = 'form-message success';
    
    // Reset form
    form.reset();
    
    // Hide message after 7 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 7000);

    // TO INTEGRATE WITH YOUR BACKEND:
    // Uncomment and configure the following:
    /*
    const formData = new FormData(form);
    fetch('YOUR_BACKEND_URL', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            formMessage.textContent = 'Thank you for contacting us! We will reach out within 24 hours.';
            formMessage.className = 'form-message success';
            form.reset();
        } else {
            formMessage.textContent = 'Something went wrong. Please call us directly.';
            formMessage.className = 'form-message error';
        }
    }).catch(error => {
        formMessage.textContent = 'Network error. Please call us directly.';
        formMessage.className = 'form-message error';
    });
    */
});

// Initial visibility for hero section
document.querySelector('.hero').classList.add('visible');
