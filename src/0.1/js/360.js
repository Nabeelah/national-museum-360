$(document).on('setup',function(e) {
    $(e.target).parent().next('.click2play').hide();
});





var spinElms = $('.reel');
spinElms.on('mousedown touchstart', function() {
    $(this).trigger('click');
});

var $arrowRight = $('<div class="arrow-right arrow"></div>');
var $arrowLeft = $('<div class="arrow-left arrow"></div>');
$('img.reel').before($arrowLeft);
$('img.reel').after($arrowRight);


// Set parent iframe height
iframeMessenger.enableAutoResize();

