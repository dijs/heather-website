/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function() {
    $('.portfolio-link').click(function() {
        console.log('link clicked');
        var masonryOptions = {
            //columnWidth: 100,
            itemSelector: '.photo'
        };
        var masonryContainer = $('#photography');
        masonryContainer.masonry(masonryOptions);
        masonryContainer.imagesLoaded(function() {
            setTimeout(function() {
              masonryContainer.masonry('reloadItems');   
              masonryContainer.masonry('layout');
                masonryContainer.animate({
                    opacity: 1
                })
            }, 500);
        });
    });
});