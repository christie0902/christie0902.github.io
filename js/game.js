
const hero = document.querySelector('.hero');
hero.style.top = '500px';
hero.style.left = '100px';

const ghost = document.querySelector('.ghost');
ghost.style.top = '200px';
ghost.style.left = '600px';

const treasure = document.querySelector('.treasure');
treasure.style.top = '0px';
treasure.style.left = '400px';

const heroPosition = {x:100,y:500};
const treasurePosition = {x:400, y:0};
const ghostPosition = {x:600, y:200};
const map = document.querySelector('.map');


let gameover = false;

// Win Screen
const winCondition = () => {
if (heroPosition.x === treasurePosition.x && heroPosition.y === treasurePosition.y) {
    map.style.opacity="0.5";
    const winMessage = document.createElement('h1');
    map.appendChild(winMessage);
    winMessage.innerText="YOU WIN!";
    winMessage.style.color= "green";
    winMessage.style.backgroundColor = "white";
    winMessage.style.fontFamily = "sans-serif";
    winMessage.style.position = "absolute";
    winMessage.style.top= "260px";
    winMessage.style.left= "300px";
    createButton(winMessage);
    gameover = true;
}
}

// Lost Screen
const lostCondtion = () => {
    if (heroPosition.x === ghostPosition.x && heroPosition.y === ghostPosition.y) {
        map.style.opacity="0.5";
        const lostMessage = document.createElement('h1');
        map.appendChild(lostMessage);
        lostMessage.innerText="YOU LOSE!";
        lostMessage.style.color= "red";
        lostMessage.style.backgroundColor = "white";
        lostMessage.style.fontFamily = "sans-serif";
        lostMessage.style.position = "absolute";
        lostMessage.style.top= "260px";
        lostMessage.style.left= "300px";
        createButton(lostMessage);
        gameover = true;
    }
}

// Create Restart Button
const createButton = (msg) => {
    const button = document.createElement('button');
    msg.appendChild(button);
    msg.style.display = "flex";
    button.innerText="RESTART";
    button.style.background="white";
    button.style.fontWeight="bold";
    button.addEventListener('click', (event) => {
        location.reload();
    })
}


document.addEventListener("keydown", (event) => {
    if (gameover) return;
    switch (event.keyCode) {
        case 39:
        case 68:
        heroPosition.x += 100;
        break;

        case 37:
        case 65:
        heroPosition.x -= 100;
        break;

        case 38:
        case 87:
        heroPosition.y -= 100;
        break;

        case 40: 
        case 83:
        heroPosition.y += 100;
        break;
    }
    if (heroPosition.x > 700) heroPosition.x = 700;
    if (heroPosition.x < 0 ) heroPosition.x = 0;
    if (heroPosition.y > 500) heroPosition.y = 500;
    if (heroPosition.y < 0) heroPosition.y = 0;

    hero.style.top = heroPosition.y + "px";
    hero.style.left = heroPosition.x + "px";
    
    winCondition();
    lostCondtion();
})

// GHOST MOVE RANDOMLY
// setInterval (() => {
//     const moveX = Math.ceil(Math.random()*3);
//     const moveY = Math.ceil(Math.random()*3);
//     //math.random = 0->1 math.round forces 0|1 0 is falsy 1 is truthy. 3 cases

    
//     switch(moveX) {
//         case 1:
//             ghostPosition.x += 100;
//         case 2:
//             ghostPosition.x -= 100;
//             break;
//     }
    
//     switch(moveY){
//         case 1:
//             ghostPosition.y += 100;
//             break;
//         case 2:
//         ghostPosition.y -= 100;
//         break;
//     }
//     if (ghostPosition.x > 700) ghostPosition.x = 700;
//     if (ghostPosition.x < 0 ) ghostPosition.x = 0;
//     if (ghostPosition.y > 500) ghostPosition.y = 500;
//     if (ghostPosition.y < 0) ghostPosition.y = 0;
    
//     ghost.style.left = ghostPosition.x+ "px";
//     ghost.style.top = ghostPosition.y + "px";
// }, 1000)



// Make the ghost jump to a random position
// ghostPosition.x = Math.floor((Math.random() * 7)) * 100;
// ghostPosition.y =  Math.floor((Math.random() * 5)) * 100;




// The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered.



// Logic to get the ghost follow hero
setInterval (() => {
    if (gameover) return;
    const moveX = Math.round(Math.random());
    //math.random = 0->1 math.round forces 0|1 0 is falsy 1 is truthy. 3 cases
    if (moveX) {
        if (ghostPosition.x < heroPosition.x) {
            ghostPosition.x += 100;
        }
    
        if (ghostPosition.x > heroPosition.x) {
            ghostPosition.x -= 100;
        }
    } else {
    if (ghostPosition.y < heroPosition.y) {
        ghostPosition.y += 100;
    }

    if (ghostPosition.y > heroPosition.y) {
        ghostPosition.y -= 100;
    }
}
    
    if (ghostPosition.x > 700) ghostPosition.x = 700;
    if (ghostPosition.x < 0 ) ghostPosition.x = 0;
    if (ghostPosition.y > 500) ghostPosition.y = 500;
    if (ghostPosition.y < 0) ghostPosition.y = 0;
    
    ghost.style.left = ghostPosition.x+ "px";
    ghost.style.top = ghostPosition.y + "px";
    winCondition();
    lostCondtion();
}, 1000)
