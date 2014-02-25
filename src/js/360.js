// 560 x 740




$(document).on('setup',function(e) {
    $(e.target).parent().next('.click2play').hide();
});

var $click2Play = $('<div class="click2play">Tap / click to load 360 rotation</div>');

$('.reel').after($click2Play);