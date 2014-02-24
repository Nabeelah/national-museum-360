// 560 x 740


var width = $('.threesixty').width();
//$('.threesixty').css('padding-bottom', width * 1.32142);
var height = $('.threesixty').outerHeight();
console.log(height);

width = '560';
height = '740';

$(document).on('setup',function(e) {
    $(e.target).parent().next('.click2play').hide();
});

var $click2Play = $('<div class="click2play">Tap / click to load 360 rotation</div>');

$('.reel').after($click2Play);