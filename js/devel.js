document.getElementById('header-fixed').style.top = document.getElementById('navbar').clientHeight + 'px';

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
    var slides = document.getElementById("sw-container");
    if (window.scrollY >= h) {
        document.getElementById("header").classList.add("header-fixed");
        for (i = 0; i < slides.length; i++) {
            slides[i].childNodes[1].style.transition = "height 0s linear 0s";
            slides[i].childNodes[1].style.height = "0px";
        }
    } 
    if (window.scrollY < h) {
        document.getElementById("header").classList.remove("header-fixed");
        document.getElementById("blur").classList.remove("header-blur");
        for (i = 0; i < slides.length; i++) {
            slides[i].childNodes[1].style.transition = "height 0s linear 0s";
            slides[i].childNodes[1].style.height = "50px";
        }
    }
}