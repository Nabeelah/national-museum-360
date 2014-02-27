$(document).on('setup',function(e) {
    $(e.target).parent().next('.click2play').hide();
});


var $arrowRight = $('<div class="arrow-right arrow"></div>');
var $arrowLeft = $('<div class="arrow-left arrow"></div>');
$('.reel').before($arrowLeft);
$('.reel').after($arrowRight);
// var $click2Play = $('<div class="click2play">Tap / click to load 360 rotation</div>');
// $('.reel').after($click2Play);

var spinElms = $('.reel');


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function checkInView() {
    if (spinElms) {
        spinElms.each(function(index) {
            if (isScrolledIntoView(this)) {
                $(this).trigger('click');
            }
        });
    }
}

// Listen to scrolling
$(window).scroll(checkInView);
checkInView();

// Set parent iframe height
iframeMessenger.enableAutoResize();

