let character = document.getElementById("character");
let leftPosition = parseInt(window.getComputedStyle(character).left);
let topPosition = parseInt(window.getComputedStyle(character).top);

let moveInterval = null;
let holdTimeout = null;
const holdDelay = 300; // delay before repeating starts (in ms)
const repeatRate = 100; // speed of repeat once held

function moveCharacter(direction) {
    switch (direction) {
        case "left":
            if (leftPosition > 0) {
                leftPosition -= 10;
                character.style.left = leftPosition + "px";
            }
            break;
        case "right":
            if (leftPosition < 350) {
                leftPosition += 10;
                character.style.left = leftPosition + "px";
            }
            break;
        case "up":
            if (topPosition > 0) {
                topPosition -= 10;
                character.style.top = topPosition + "px";
            }
            break;
        case "down":
            if (topPosition < 220) {
                topPosition += 10;
                character.style.top = topPosition + "px";
            }
            break;
    }
}

function startMoving(direction) {
    moveCharacter(direction); // immediate single move

    // start repeating only after holdDelay
    holdTimeout = setTimeout(() => {
        moveInterval = setInterval(() => moveCharacter(direction), repeatRate);
    }, holdDelay);
}

function stopMoving() {
    clearTimeout(holdTimeout);
    clearInterval(moveInterval);
}
