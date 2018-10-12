document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

var h = document.getElementById('navbar').clientHeight;
window.onscroll = function () {
    Fix_on_scroll();
};

function Fix_on_scroll() {
    var slides = document.getElementsByClassName("swiper-slide");
    if (window.scrollY >= h) {
        document.getElementById("header").classList.add("header-fixed");
        document.getElementById("sw-container").classList.add("header-blur");
        for (i = 0; i < slides.length; i++) {
            slides[i].firstElementChild.style.transition = "height 0s linear 0s";
            slides[i].firstElementChild.style.height = "0px";
            slides[i].style.padding = "0";
        }
    } 
    if (window.scrollY < h) {
        document.getElementById("header").classList.remove("header-fixed");
        document.getElementById("sw-container").classList.remove("header-blur");
        for (i = 0; i < slides.length; i++) {
            slides[i].firstElementChild.style.transition = "height 0s linear 0s";
            slides[i].firstElementChild.style.height = "50px";
            slides[i].style.padding = ".5rem 0";
        }
    }
}