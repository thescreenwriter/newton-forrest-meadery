document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.main-nav .nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            // Optional: Lock body scroll when mobile menu is open
            // document.body.classList.toggle('no-scroll', !isExpanded);
        });
    }

    // --- Search Bar Toggle ---
    const searchToggleBtn = document.querySelector('.search-toggle-btn');
    const searchBarContainer = document.getElementById('search-bar'); // Using ID now

    if (searchToggleBtn && searchBarContainer) {
        searchToggleBtn.addEventListener('click', () => {
            searchBarContainer.classList.toggle('active');
            // Optional: Focus on search input when opened
            if (searchBarContainer.classList.contains('active')) {
                const searchInput = searchBarContainer.querySelector('input[type="search"]');
                if (searchInput) {
                    searchInput.focus();
                }
            }
        });
    }

    // --- Product Carousel ---
    const carousels = document.querySelectorAll('.product-carousel-wrapper');
    carousels.forEach(wrapper => {
        const carousel = wrapper.querySelector('.product-carousel');
        const prevButton = wrapper.querySelector('.carousel-control.prev');
        const nextButton = wrapper.querySelector('.carousel-control.next');
        const productItems = carousel.querySelectorAll('.product-item');

        if (!carousel || !prevButton || !nextButton || productItems.length === 0) {
            if(prevButton) prevButton.style.display = 'none';
            if(nextButton) nextButton.style.display = 'none';
            return;
        }
        
        let scrollAmount = 0;
        const itemWidth = productItems[0].offsetWidth + parseFloat(getComputedStyle(productItems[0]).marginLeft || 0) + parseFloat(getComputedStyle(productItems[0]).marginRight || 0) + parseFloat(getComputedStyle(carousel).gap || 0);


        prevButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
        });

        // Optional: Disable buttons at ends (basic version)
        // This would need more robust logic to handle dynamic item widths or resize
        // carousel.addEventListener('scroll', () => {
        //     prevButton.disabled = carousel.scrollLeft === 0;
        //     nextButton.disabled = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 5; // -5 for tolerance
        // });
    });


    // --- Favorite Button Toggle (Example) ---
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            // Here you would typically update backend/localStorage
            // For visual feedback, you can change the heart icon or color via CSS .active state
            console.log('Favorite toggled');
        });
    });

    // --- Add to Cart (Placeholder) ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Example: Get product name
            const productItem = button.closest('.product-item');
            const productName = productItem ? productItem.querySelector('h3').textContent : 'Product';
            alert(`${productName} added to basket (placeholder).`);
            // Update cart count example
            const cartCountEl = document.querySelector('.cart-link .cart-count');
            if (cartCountEl) {
                let currentCount = parseInt(cartCountEl.textContent, 10);
                cartCountEl.textContent = currentCount + 1;
            }
        });
    });
    
    // --- Newsletter Form Submission (Placeholder) ---
    const newsletterForms = document.querySelectorAll('.newsletter-form'); // Could be multiple
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`Thank you for subscribing with ${emailInput.value}! (Placeholder)`);
                emailInput.value = ''; // Clear input
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });


    // --- Copyright Year ---
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Smooth Scroll for Anchor Links (Optional) ---
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         const href = this.getAttribute('href');
    //         // Ensure it's a local anchor and not just "#" or "#!"
    //         if (href.length > 1 && document.querySelector(href)) {
    //             e.preventDefault();
    //             document.querySelector(href).scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // --- Fallback for missing images (optional, can also be done in HTML with onerror) ---
    // document.querySelectorAll('img').forEach(img => {
    //     img.addEventListener('error', function() {
    //         // Example: Replace with a placeholder or hide
    //         this.src = 'https://placehold.co/400x300/eee/ccc?text=Image+Not+Found';
    //         this.alt = 'Image not available';
    //         console.warn(`Image failed to load: ${this.dataset.src || this.src}`);
    //     });
    // });

});
