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
spinElms.on('mousedown touchstart', function() {
    $(this).trigger('click');
});


// Set parent iframe height
iframeMessenger.enableAutoResize();

