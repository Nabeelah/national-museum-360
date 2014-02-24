


var width = $('.threesixty').width();
$('.threesixty').css('padding-bottom', width * 1.32142);
var height = $('.threesixty').outerHeight();
console.log(height);

$('.threesixty').threesixty({
    dragAxis: 'x',
    spriteDim: { x: width, y: height },
    spriteSheetDim: { x: width, y: 28860 },
    sensitivity: 3
});
