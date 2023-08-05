(function ($) {
    "use strict"

//navbar on scrolling



    //typed initiate
    if ($('.typed-text-output').length == 1){
        var type_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings:typed_strings.split(', '),
            typeSpeed:100,
            backSpeed: 20,
            smartBackspace:false,
            loop: true
        });
    }
})(jQuery);