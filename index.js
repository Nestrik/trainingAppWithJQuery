var hightRange = $('#hight');
var pyramid = $('#pyramid');
var currentValueElement = $('#currentValue');

var prevValue = 5;

drawPyramid(prevValue);


function drawPyramid(size) {
    for(i = 1; i <= size; i++) {
        var newLine = $('<div>').addClass('block-line');
        newLine.appendTo(pyramid);
        for(j = 0; j < size - i; j++) {
            var block = $('<div>').addClass('empty-block');
            block.appendTo(newLine);
        }
        for(k = 0; k < i; k++) {
            var block = $('<div>').addClass('block');
            block.appendTo(newLine);
        }
    }
    currentValueElement.text(size);
}

function clearPyramid() {
    pyramid.children().remove();
}

var reDrawTimer;

hightRange.mousedown(() => {
    reDrawTimer = setInterval(() => {
        var currValue = hightRange.val();
        if(prevValue != currValue) {
            clearPyramid();
            drawPyramid(currValue);
            prevValue = currValue;
        }
    }, 100)
});

hightRange.mouseout(() => {
    clearInterval(reDrawTimer);
});

$('document').mouseup(() => {
    clearInterval(reDrawTimer);
});