document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalTestimonials - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex === totalTestimonials - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    // Show the first testimonial initially
    showTestimonial(currentIndex);
});
