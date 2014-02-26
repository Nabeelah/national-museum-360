$(document).on('setup',function(e) {
    $(e.target).parent().next('.click2play').hide();
});

var $arrowRight = $('<div class="arrow-right"></div>');
var $arrowLeft = $('<div class="arrow-left"></div>');
// var $click2Play = $('<div class="click2play">Tap / click to load 360 rotation</div>');


$('.reel').before($arrowLeft);

$('.reel').after($arrowRight);