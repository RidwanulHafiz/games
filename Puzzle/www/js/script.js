
var free;
var room;
var currentPosition;
var newPosition;

$(document).keydown(function(event){
    var key = event.which;
    switch(key) {
        case 37:
            slidePuzzleLeft();
            break;
        case 38:
            slidePuzzleTop();
            break;
        case 39:
            slidePuzzleRight();
            break;
        case 40:
            slidePuzzleBottom();
            break;
    }
});

$('.solve').click(function(){
    var solve = $(this).attr('data-content');
    var room = $('.roomPuzzle').attr('data-content');

    if(solve == 1){
        if(room == 2){
            slidePuzzleRight();
        }
        if(room == 4){
            slidePuzzleBottom();
        }
    }
    if(solve == 2){
        if(room == 1){
            slidePuzzleRight();
        }
        if(room == 3){
            slidePuzzleLeft();
        }
        if(room == 5){
            slidePuzzleTop();
        }
    }
    if(solve == 2){
        if(room == 1){
            slidePuzzleRight();
        }
        if(room == 3){
            slidePuzzleLeft();
        }
        if(room == 5){
            slidePuzzleTop();
        }
    }
});




function getFreeLeft(room){
    if(room == 1){
        free = 2;
    } else if(room == 2){
        free = 3;
    } else if(room == 3){
        free = '';
    } else if(room == 4){
        free = 5;
    } else if(room == 5){
        free = 6;
    } else if(room == 6){
        free = '';
    } else if(room == 7){
        free = 8;
    } else if(room == 8){
        free = 9;
    } else if(room == 9){
        free = '';
    } else{
        free = '';
    }
    return free;
}
function getFreeRight(room){
    if(room == 1){
        free = '';
    } else if(room == 2){
        free = 1;
    } else if(room == 3){
        free = 2;
    } else if(room == 4){
        free = '';
    } else if(room == 5){
        free = 4;
    } else if(room == 6){
        free = 5;
    } else if(room == 7){
        free = '';
    } else if(room == 8){
        free = 7;
    } else if(room == 9){
        free = 8;
    } else{
        free = '';
    }
    return free;
}
function getFreeBottom(room){
    if(room == 1){
        free = '';
    } else if(room == 2){
        free = '';
    } else if(room == 3){
        free = '';
    } else if(room == 4){
        free = 1;
    } else if(room == 5){
        free = 2;
    } else if(room == 6){
        free = 3;
    } else if(room == 7){
        free = 4;
    } else if(room == 8){
        free = 5;
    } else if(room == 9){
        free = 6;
    } else{
        free = '';
    }
    return free;
}
function getFreeTop(room){
    if(room == 1){
        free = 4;
    } else if(room == 2){
        free = 5;
    } else if(room == 3){
        free = 6;
    } else if(room == 4){
        free = 7;
    } else if(room == 5){
        free = 8;
    } else if(room == 6){
        free = 9;
    } else if(room == 7){
        free = '';
    } else if(room == 8){
        free = '';
    } else if(room == 9){
        free = '';
    } else{
        free = '';
    }
    return free;
}


function slidePuzzleLeft(){
    room = $('.roomPuzzle').attr('data-content');
    if(room != 3 && room != 6 && room != 9 ){
        currentPosition = getFreeLeft(room);
        newPosition = parseFloat(currentPosition)-1;
        $('.puzzle').find('.position'+currentPosition).removeClass('position'+currentPosition).addClass('position'+newPosition).attr('data-content',newPosition);
        $('.puzzle').find('.roomPuzzle').removeClass('position'+newPosition).addClass('position'+currentPosition).attr('data-content',currentPosition);
        room = currentPosition;
        if(result() == 0){
            alert('You Win');
        }
    }
}
function slidePuzzleRight(){
    room = $('.roomPuzzle').attr('data-content');
    if(room != 1 && room != 4 && room != 7 ){
        currentPosition = getFreeRight(room);
        newPosition = parseFloat(currentPosition)+1;
        $('.puzzle').find('.position'+currentPosition).removeClass('position'+currentPosition).addClass('position'+newPosition).attr('data-content',newPosition);
        $('.puzzle').find('.roomPuzzle').removeClass('position'+newPosition).addClass('position'+currentPosition).attr('data-content',currentPosition);
        room = currentPosition;
        if(result() == 0){
            alert('You Win');
        }
    }
}
function slidePuzzleBottom(){
    room = $('.roomPuzzle').attr('data-content');
    if(room != 1 && room != 2 && room != 3 ){
        currentPosition = getFreeBottom(room);
        newPosition = parseFloat(currentPosition)+3;
        $('.puzzle').find('.position'+currentPosition).removeClass('position'+currentPosition).addClass('position'+newPosition).attr('data-content',newPosition);
        $('.puzzle').find('.roomPuzzle').removeClass('position'+newPosition).addClass('position'+currentPosition).attr('data-content',currentPosition);
        room = currentPosition;
        if(result() == 0){
            alert('You Win');
        }
    }
}
function slidePuzzleTop(){
    room = $('.roomPuzzle').attr('data-content');
    if(room != 7 && room != 8 && room != 9 ){
        currentPosition = getFreeTop(room);
        newPosition = parseFloat(currentPosition)-3;
        $('.puzzle').find('.position'+currentPosition).removeClass('position'+currentPosition).addClass('position'+newPosition).attr('data-content',newPosition);
        $('.puzzle').find('.roomPuzzle').removeClass('position'+newPosition).addClass('position'+currentPosition).attr('data-content',currentPosition);
        room = currentPosition;
        if(result() == 0){
            alert('You Win');
        }
    }
}



//===========================
function result(){
    var error=0;
    $('.solve').each(function(){
        content = $(this).attr('data-content');
        unique = $(this).attr('data-unique');
        if(content == unique){
            error = error+0;
        } else {
            error = error+1;
        }
    });
    return error;
}