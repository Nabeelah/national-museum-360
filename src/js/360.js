// Low bandwidth test
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/network/connection.js
var isLowbandwidth = function() {
    var connection = navigator.connection || { type: 0 };
    return connection.type == 3 || // connection.CELL_2G
      connection.type == 4 || // connection.CELL_3G
      /^[23]g$/.test(connection.type); // string value in new spec
};

console.log(isLowbandwidth());

if (!isLowbandwidth()) {
    var Images = $('img.reel');
    Images.each(function(img) {
        console.log($(this).attr('src'), $(this));
        $(this).attr('src', $(this).attr('src').replace('/low/', '/high/'));
        $(this).attr('data-images', $(this).attr('data-images').replace('/low/', '/high/'));
    });
}

// $(document).on('setup',function(e) {
//     $(e.target).parent().next('.click2play').hide();
// });

// var $click2Play = $('<div class="click2play">Tap / click to load 360 rotation</div>');

// $('.reel').after($click2Play);