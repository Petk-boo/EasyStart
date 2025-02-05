document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");
    
    features.forEach(feature => {
        feature.addEventListener("mouseover", () => {
            feature.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        });
        feature.addEventListener("mouseout", () => {
            feature.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
    });

    window.addEventListener("scroll", () => {
        document.querySelectorAll("section").forEach(section => {
            let position = section.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;
            if (position < screenHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });
});
