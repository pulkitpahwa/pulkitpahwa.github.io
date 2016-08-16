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

$(document).ready(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
        $(".intro-text").css({"margin-top":"50px"});
        $(".intro-heading").css({"font-size":"30px", "font-weight":"400", "margin-top":"30px"});
        $(".btn-xl").css({"margin-top": "70px"});
        $("section#skills").css({"padding": "80px 0"});
    }
    else{
        $(".intro-text").css({"margin-top":"-70px"});
        $(".intro-heading").css({"font-size":"43px", "font-weight":"400", "margin-bottom":"0px"});
        $(".btn-xl").css({"margin-top": "100px"});
        $("section#skills").css({"padding": "30px 0"});
    }
})
