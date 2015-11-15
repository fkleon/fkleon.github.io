/* Replaces the contactMe place holder with the actual email */
addr = '&#102;&#114;&#101;&#100;&#101;&#114;&#105;&#107;&#064;&#108;&#101;&#111;&#110;&#104;&#097;&#114;&#100;&#116;&#046;&#099;&#111;&#046;&#110;&#122;'

$(document).ready(function(){
    $('.contactMe').each(function(i) {
        $(this).html(addr);
    });
});
