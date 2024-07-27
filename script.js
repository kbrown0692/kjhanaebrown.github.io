// script.js

$(document).ready(function() {
    // Smooth scroll for navigation links
    $('nav ul li a').on('click', function(event) {
        // Prevent the default action of the anchor tag
        event.preventDefault();
        
        // Get the target element's ID from the href attribute
        var target = $(this).attr('href');
        
        // Scroll to the target element smoothly
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Duration of the scroll animation in milliseconds
    });
});
