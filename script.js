let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px';  // Hide header
    } else {
        // Scrolling up
        header.style.top = '0';  // Show header
    }
    lastScrollTop = scrollTop;
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]'); // Select all links that start with #
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            
            const targetId = this.getAttribute('href'); // Get the href attribute
            const targetSection = document.querySelector(targetId); // Find the target section
            
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth' // Smooth scroll
            });
        });
    });
});

// script.js

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
