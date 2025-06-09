// script.js

// Highlight center product in scrollable showcase
const productScroll = document.querySelector('.product-scroll');
const productItems = document.querySelectorAll('.product-item');

function highlightCenterProduct() {
  const scrollLeft = productScroll.scrollLeft;
  const scrollCenter = scrollLeft + productScroll.offsetWidth / 2;

  productItems.forEach(item => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const distance = Math.abs(scrollCenter - itemCenter);
    item.classList.toggle('active', distance < item.offsetWidth / 2);
  });
}

if (productScroll) {
  productScroll.addEventListener('scroll', highlightCenterProduct);
  window.addEventListener('load', highlightCenterProduct);
}
