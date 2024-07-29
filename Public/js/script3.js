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

document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown > a, .dropdown .dropdown > a');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            var parent = this.parentElement;
            
            // Toggle active class on the clicked dropdown
            parent.classList.toggle('active');

            // Close other open dropdowns
            closeOtherDropdowns(parent);
        });
    })
    function closeOtherDropdowns(currentDropdown) {
        var allDropdowns = document.querySelectorAll('.dropdown');
        allDropdowns.forEach(function(dropdown) {
            if (dropdown !== currentDropdown) {
                dropdown.classList.remove('active');
            }
        });
    }
});