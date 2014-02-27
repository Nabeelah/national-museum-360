// $(document).on('setup',function(e) {
//     $(e.target).parent().next('.click2play').hide();
// });



var $arrowRight = $('<div class="arrow-right arrow"></div>');
var $arrowLeft = $('<div class="arrow-left arrow"></div>');




setTimeout(function() {
    $('.reel-overlay').prepend($arrowLeft);
    $('.reel-overlay').append($arrowRight);
}, 200);

var spinElms = $('.reel');
spinElms.on('mousedown touchstart', function() {
    $(this).trigger('click');
});


// Set parent iframe height
iframeMessenger.enableAutoResize();

