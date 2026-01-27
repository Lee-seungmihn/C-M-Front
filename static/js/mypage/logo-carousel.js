// Auto carousel for library logos
document.addEventListener("DOMContentLoaded", function () {
    const logos = document.querySelectorAll(".library-logo-base");
    if (logos.length === 0) return;

    let currentIndex = 2; // Start with middle logo (W logo)
    const totalLogos = logos.length;

    function updateCarousel() {
        logos.forEach((logo, index) => {
            // Calculate distance from center
            const distance = index - currentIndex;

            // Reset all classes
            logo.classList.remove("center", "side", "far");

            if (distance === 0) {
                // Center logo - full color, full size
                logo.classList.add("center");
            } else if (Math.abs(distance) === 1) {
                // Adjacent logos - slight gray, medium size
                logo.classList.add("side");
            } else {
                // Far logos - more gray, smaller
                logo.classList.add("far");
            }
        });

        // Move to next logo
        currentIndex = (currentIndex + 1) % totalLogos;
    }

    // Initial state
    updateCarousel();

    // Auto-rotate every 2 seconds
    setInterval(updateCarousel, 2000);
});
