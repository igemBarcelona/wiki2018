$(document).ready(function () {
    $('div').bind('scroll', check_scroll)
})

function check_scroll(e) {
    var elem = $(e.currentTarget);
    if (elem[0].scrollHeight() - elem.scrollTop() == elem.outerHeight()) {
        console.log("bottom")
    }
}