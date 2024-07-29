const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        }else {
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
 
 //Toggle menu code:
 document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const openMenuBtn = document.querySelector(".open-menu-btn");
    const closeMenuBtn = document.querySelector(".close-menu-btn");

    if (!menu || !openMenuBtn || !closeMenuBtn) {
        console.error("Menu or buttons not found in the DOM");
        return;
    }

    [openMenuBtn, closeMenuBtn].forEach((btn) => {
        btn.addEventListener("click", () => {
            menu.classList.toggle("open");
            menu.style.transition = "transform 0.5s ease";
        });
    });

    menu.addEventListener("transitionend", function() {
        this.removeAttribute("style");
    });

    menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
        arrow.addEventListener("click", function() {
            this.closest(".dropdown").classList.toggle("active");
        });
    });
});

// javascript code for counting animation

// Wait for the DOM content to fully load before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Function to start counting animation
    function startCountAnimation(element, endValue, duration) {
        let startValue = 0;
        let increment = endValue / duration;
        let current = 0;
        let interval = setInterval(function() {
            current += increment;
            element.textContent = Math.ceil(current); // Round up to nearest whole number
            if (current >= endValue) {
                clearInterval(interval);
                element.textContent = endValue; // Ensure final value is exact
            }
        }, 30); // Interval time in milliseconds (adjust for smoother or faster animation)
    }

    // Select all elements with class "num"
    let valueDisplays = document.querySelectorAll(".num");

    // Loop through each element with class "num"
    valueDisplays.forEach((valueDisplay) => {
        let endValue = parseInt(valueDisplay.getAttribute("data-val")); // Get the end value from data-val attribute
        let duration = 100; // Duration in milliseconds (2 seconds in this example)
        startCountAnimation(valueDisplay, endValue, duration);
    });
});


