/* Replaces the contactMe place holder with the actual email */
addr = '&#102;&#114;&#101;&#100;&#101;&#114;&#105;&#107;&#46;&#108;&#101;&#111;&#110;&#104;&#97;&#114;&#100;&#116;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'

$(document).ready(function(){
    aElem = $('#contactMe');
    aElem.html(addr);
});
