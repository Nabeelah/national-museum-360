
function setupPage() {
    // Build arrow DOM
    var $arrowRight = $('<div class="arrow-right arrow"></div>');
    var $arrowLeft = $('<div class="arrow-left arrow"></div>');


    // Add arrows after load
    setTimeout(function() {
        $('.reel-overlay').prepend($arrowLeft);
        $('.reel-overlay').append($arrowRight);
    }, 200);

    // Trigger click to start loading on touch/mousedown
    var spinElms = $('.reel');
    spinElms.on('mousedown touchstart', function() {
        $(this).trigger('click');
    });
}

 setupPage();


// Set parent iframe height
iframeMessenger.enableAutoResize();
