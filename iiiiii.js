const infiniteScroll = () => {
    const carousel1 = document.getElementById('carousel1'); // Replace 'carousel1' with your actual carousel element ID

    if (carousel1.scrollLeft === 0) {
        carousel1.scrollLeft = carousel1.scrollWidth - (2 * carousel1.offsetWidth);
    } else if (Math.ceil(carousel1.scrollLeft) >= carousel1.scrollWidth - carousel1.offsetWidth) {
        carousel1.scrollLeft = 0; // Reset back to the beginning
    }
};

// Example: Attach the infiniteScroll function to a scroll event on the carousel element
const carousel1 = document.getElementById('carousel1');
carousel1.addEventListener('scroll', infiniteScroll);
