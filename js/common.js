const viewer = $('.viewer');
const viewerContent = $('.viewer-inner');
const nav = $('.header');
const layout = $('#layout');
const layoutScroller = $('.layout-scroller');
var viewportWidth = $(window).width();
var bodyWidth;
var bodyHeight;


function defineSize() {
    bodyWidth = $('body').width()/24;
    bodyHeight = $('body').height()/24;
}

$(document).ready(function () {
    defineSize();
    layoutScroller.css({
        'width' : bodyWidth+'%',
        'height' : bodyHeight+'%'
    });

    $('.popup').click(function(){
       $(this).fadeOut(250);
       consol.log('a');
    });
});

$(window).resize(function () {
    defineSize();
    layoutScroller.css({
        'width' : bodyWidth+'%',
        'height' : bodyHeight+'%'
    });
});

viewer.scroll(function () {
    var positionX = viewer.scrollLeft()/24;
    var positionY = viewer.scrollTop()/24;
    console.log(positionX, positionY);

    layoutScroller.css({
        'left' : positionX+'%',
        'top' : positionY+'%'
    });
});