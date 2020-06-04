$(document).ready(function() { // JQuery block - waits for page to finish loading
    $('#nav-main li a').click(function(e) {
        e.preventDefault();

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top
        }, 1000);

    });
});