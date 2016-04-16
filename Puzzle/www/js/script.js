
var free;
var open = 9;

$(document).keydown(function(event){
    var key = event.which;
    switch(key) {
        case 37:
            slidePuzzleLeft(open);
            break;
        case 38:
            // Key up.
            break;
        case 39:
            slidePuzzleRight(open);
            break;
        case 40:
            // Key down.
            break;
    }
});




function getFreeLeft(open){
    if(open == 1){
        free = '';
    } else if(open == 2){
        free = 1;
    } else if(open == 3){
        free = 2;
    } else if(open == 4){
        free = '';
    } else if(open == 5){
        free = 4;
    } else if(open == 6){
        free = 5;
    } else if(open == 7){
        free = '';
    } else if(open == 8){
        free = 7;
    } else if(open == 9){
        free = 8;
    } else{
        free = '';
    }
    return free;
}


function slidePuzzleLeft(open){
    var remove = getFreeLeft(open);
    var add = parseFloat(getFreeLeft(open))+1;
    var nowPosition = $('.puzzle').find('.position'+free).removeClass('position'+remove).addClass('position'+add);
    free = remove;
}
function slidePuzzleRight(open){
    var remove = getFreeLeft(open);
    var add = parseFloat(getFreeLeft(open))+1;
    var nowPosition = $('.puzzle').find('.position'+free).removeClass('position'+remove).addClass('position'+add);
    free = remove;
}