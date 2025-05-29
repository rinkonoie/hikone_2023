
$(function(){
    $('.inview-slide-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
        $(this).stop().addClass('slide-up');
    }
    });
});

$(document).ready(function() {
    var topbtn = $('#topbtn');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            topbtn.fadeIn();
        } else {
            topbtn.fadeOut();
        }
    });
    topbtn.click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});