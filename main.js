$(document).ready(function($){
    
    'use strict'

    let spacecraft = $('#space_ship_object'),
    space = $('#scene'),
    order = 0,
    y = 85,
    x = 45,
    up = false,
    right = false,
    down = false,
    left = false,
    speedX = 0.3,
    speedY = 0.3,
    interval = 1000,
    frequency
    

    function alertFunck(e,b){      
        let code = e.which;

        if (code == 38) {
            up = b;

        } else if (code == 40) {
            down = b;
        }

        if (code == 37) {
            left = b;

        } else if (code == 39) {
            right = b;
        }
    }
    
    setInterval(()=>{

        if(up && y > 60) y -= speedY;
        if(down && y < 88) y += speedY;
        if(left && x > 15) x -= speedX;
        if(right && x < 75) x += speedX;

        spacecraft.css('top',`${y}%`);
        spacecraft.css('left',`${x}%`);
    
    },1)

    window.setInterval(function () {
        order += 1;
        space.append(`<div id="metheor" class="stone_${order}"></div>`);
        metheor = $(`.stone_${order}`);
        let randPosX = Math.floor((Math.random() * 100) + 1);
        metheor.animate( {top: '100%'} ,interval );
        metheor.css('left', `${randPosX}%` ); 
    
    },interval);
    

    $(document).on("keyup", function(e){ alertFunck(e,false)});
    $(document).on("keydown",function (e){ alertFunck(e,true)});

})