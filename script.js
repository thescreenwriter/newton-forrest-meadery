document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (navToggle && mainNavUl) {
        navToggle.addEventListener('click', () => {
            mainNavUl.classList.toggle('nav-active');
            navToggle.classList.toggle('active'); // For hamburger animation
        });
    }

    // --- Search Bar Toggle ---
    const searchIcon = document.querySelector('.search-icon');
    const searchBarContainer = document.querySelector('.search-bar-container');

    if (searchIcon && searchBarContainer) {
        searchIcon.addEventListener('click', () => {
            searchBarContainer.style.display = searchBarContainer.style.display === 'block' ? 'none' : 'block';
        });
    }

    // --- Simple Product Carousel (Basic Scroll) ---
    const carousel = document.querySelector('.product-carousel');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const productItems = document.querySelectorAll('.product-item');

    if (carousel && prevButton && nextButton && productItems.length > 0) {
        const itemWidth = productItems[0].offsetWidth + parseInt(getComputedStyle(productItems[0]).marginRight || 0) + parseInt(getComputedStyle(productItems[0]).marginLeft || 0); // Includes margin
        const scrollAmount = itemWidth * 2; // Scroll by two items

        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
    
    // --- Placeholder "Add to Basket" and "Favorite" ---
    const quickAddButtons = document.querySelectorAll('.btn-quick-add');
    quickAddButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.product-item').querySelector('h3').textContent;
            alert(`"${productName}" added to basket (Placeholder).`);
        });
    });

    const favoriteButtons = document.querySelectorAll('.btn-favorite');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.product-item').querySelector('h3').textContent;
            event.target.innerHTML = event.target.innerHTML === '♥' ? '♡' : '♥'; // Toggle heart
            alert(`"${productName}" toggled in favorites (Placeholder).`);
        });
    });

    // --- Newsletter Form Placeholder ---
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = event.target.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! (Placeholder)`);
            event.target.reset();
        });
    }

    // --- Copyright Year ---
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Hero Video Check (Optional: for browsers that might block autoplay) ---
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        heroVideo.play().catch(error => {
            console.warn("Hero video autoplay was prevented:", error);
            // You could display a play button or a static image as fallback here
        });
    }

});