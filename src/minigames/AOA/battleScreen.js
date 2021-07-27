let movesShown = 0;
let x = 100;
let y = 250;
let targetedChar = "";
let combatantsSorted = [];
let currentUnitTurn = 0;

/**
 * Changes from mapScreen to battleScreen.
 */
function startBattle() {
    onMapScreen = false;
    hideMap();
    unhideBattleScreen();
    addStats();
    sortBySpeed();
    nextUnitsTurn(combatantsSorted);
}

/**
 * Hides the map screen.
 */
function hideMap() {
    document.body.style.background = "white";
    fabCanvas.clear();

    document.getElementById("chosenName").style.visibility = "hidden";
    document.getElementById("chosenTypes").style.visibility = "hidden";
    document.getElementById("chosenVIT").style.visibility = "hidden";
    document.getElementById("chosenSTR").style.visibility = "hidden";
    document.getElementById("chosenWIS").style.visibility = "hidden";
    document.getElementById("chosenDEX").style.visibility = "hidden";
    document.getElementById("chosenSPE").style.visibility = "hidden";
    document.getElementById("chosenHP").style.visibility = "hidden";
    document.getElementById("chosenMP").style.visibility = "hidden";
    document.getElementById("battleTest").style.visibility = "hidden";
}

/**
 * Makes the map visible again.
 */
function unhideMap() {
    document.getElementById("chosenName").style.visibility = "visible";
    document.getElementById("chosenTypes").style.visibility = "visible";
    document.getElementById("chosenVIT").style.visibility = "visible";
    document.getElementById("chosenSTR").style.visibility = "visible";
    document.getElementById("chosenWIS").style.visibility = "visible";
    document.getElementById("chosenDEX").style.visibility = "visible";
    document.getElementById("chosenSPE").style.visibility = "visible";
    document.getElementById("chosenHP").style.visibility = "visible";
    document.getElementById("chosenMP").style.visibility = "visible";
    document.getElementById("battleTest").style.visibility = "visible";
}

/**
 * Hides the battle screen.
 */
function hideBattleScreen() {
    for (let i = 1; i <= amountOfCharacters; i++) {
        document.getElementById("player" + i + "HP").style.visibility = "hidden";
        document.getElementById("player" + i + "MP").style.visibility = "hidden";
        document.getElementById("player" + i + "curHP").style.visibility = "hidden";
        document.getElementById("player" + i + "curMP").style.visibility = "hidden";
        document.getElementById("player" + i + "HPNumber").style.visibility = "hidden";
        document.getElementById("player" + i + "MPNumber").style.visibility = "hidden";
        document.getElementById("player" + i + "Name").style.visibility = "hidden";
    }
    for (let j = 1; j <= amountOfMonsters; j++) {
        document.getElementById("enemy" + j + "HP").style.visibility = "hidden";
        document.getElementById("enemy" + j + "MP").style.visibility = "hidden";
        document.getElementById("enemy" + j + "curHP").style.visibility = "hidden";
        document.getElementById("enemy" + j + "curMP").style.visibility = "hidden";
        document.getElementById("enemy" + j + "HPNumber").style.visibility = "hidden";
        document.getElementById("enemy" + j + "MPNumber").style.visibility = "hidden";
        document.getElementById("enemy" + j + "Name").style.visibility = "hidden";
    }

    document.getElementById("playerAbilities").style.visibility = "hidden";
    document.getElementById("playerItems").style.visibility = "hidden";
    document.getElementById("playerFlee").style.visibility = "hidden";
}

/**
 * Makes the battle screen visible again.
 */
function unhideBattleScreen() {
    for (let i = 1; i <= amountOfCharacters; i++) {
        document.getElementById("player" + i + "HP").style.visibility = "visible";
        document.getElementById("player" + i + "MP").style.visibility = "visible";
        document.getElementById("player" + i + "curHP").style.visibility = "visible";
        document.getElementById("player" + i + "curMP").style.visibility = "visible";
        document.getElementById("player" + i + "HPNumber").style.visibility = "visible";
        document.getElementById("player" + i + "MPNumber").style.visibility = "visible";
        document.getElementById("player" + i + "Name").style.visibility = "visible";
    }
    for (let j = 1; j <= amountOfMonsters; j++) {
        document.getElementById("enemy" + j + "HP").style.visibility = "visible";
        document.getElementById("enemy" + j + "MP").style.visibility = "visible";
        document.getElementById("enemy" + j + "curHP").style.visibility = "visible";
        document.getElementById("enemy" + j + "curMP").style.visibility = "visible";
        document.getElementById("enemy" + j + "HPNumber").style.visibility = "visible";
        document.getElementById("enemy" + j + "MPNumber").style.visibility = "visible";
        document.getElementById("enemy" + j + "Name").style.visibility = "visible";
    }
}

/**
 * Adds the battling characters stats to the screen.
 */
function addStats() {
    for (let i = 1; i <= amountOfCharacters; i++) {
        document.getElementById("player" + i + "HPNumber").innerHTML = currentCharacters[i - 1].hpLeft + "/" + currentCharacters[i - 1].hp;
        document.getElementById("player" + i + "MPNumber").innerHTML = currentCharacters[i - 1].mpLeft + "/" + currentCharacters[i - 1].mp;
        document.getElementById("player" + i + "Name").innerHTML = currentCharacters[i - 1].name;
    }
    for (let j = 1; j <= amountOfMonsters; j++) {
        document.getElementById("enemy" + j + "HPNumber").innerHTML = currentMonsters[j - 1].hpLeft + "/" + currentMonsters[j - 1].hp;
        document.getElementById("enemy" + j + "MPNumber").innerHTML = currentMonsters[j - 1].mpLeft + "/" + currentMonsters[j - 1].mp;
        document.getElementById("enemy" + j + "Name").innerHTML = currentMonsters[j - 1].name;
    }
}

function sortBySpeed() {
    let combatants = [];
    for (let i = 0; i < currentCharacters.length; i++) {
        combatants.push(currentCharacters[i]);
    }
    for (let j = 0; j < currentMonsters.length; j++) {
        combatants.push(currentMonsters[j]);
    }
    combatantsSorted = combatants.sort(function (a, b) {
        return b.spe - a.spe;
    });
    currentUnitTurn = 0;

}

function nextUnitsTurn(combatantsSorted) {
    if (combatantsSorted[currentUnitTurn] instanceof Character) {
        document.getElementById("playerAbilities").style.visibility = "visible";
        document.getElementById("playerItems").style.visibility = "visible";
        document.getElementById("playerFlee").style.visibility = "visible";
        currentPlayer = combatantsSorted[currentUnitTurn];
    }
    else if (combatantsSorted[currentUnitTurn] instanceof Monster) {

    }
}

/**
 * Changes color of button when clicked.
 * @param {*} _this the chosen button
 */
function buttonClicked(_this) {
    _this.style.backgroundColor = "yellow";
}

/**
 * Changes color of button when unclicked.
 * @param {*} _this the chosen button
 */
function buttonUnclicked(_this) {
    _this.style.backgroundColor = "cornflowerblue";
}

/**
 * Returns the user to the map screen.
 */
function toMenu() {
    onMapScreen = true;
    unhideMap();
    hideBattleScreen();
    document.body.style.background = "url(RegionTest1.png) no-repeat";
}

/**
 * Shows the currently avaiable moves of the chosen character.
 */
function showMoves(character) {
    document.getElementById("playerAbilities").style.visibility = "hidden";
    document.getElementById("playerItems").style.visibility = "hidden";
    document.getElementById("playerFlee").style.visibility = "hidden";
    document.getElementById("goBack").style.visibility = "visible";
    for (let i = 0; i < character.availableMoves.length; i++) {
        createMoveElement(character.availableMoves[i]);
    }
}

/**
 * Creates a button and tooltip for the chosen move.
 * @param {move} selectedMove the chosen move.
 */
function createMoveElement(selectedMove) {
    let moveButton = document.createElement("BUTTON");
    moveButton.style.top = y + "px";
    moveButton.style.left = x + "px";
    moveButton.className = "moves";
    moveButton.onclick = function () {
        //useMove(selectedMove);
        targetCharacter(selectedMove);
    };
    document.body.appendChild(moveButton);
    let tooltip = document.createElement("SPAN");
    tooltip.className = "tooltips";
    let searchedMove = findMove(selectedMove);
    tooltip.innerHTML = `<b>Name:</b> ${searchedMove.name} <br>
    <b>Pow:</b> ${searchedMove.pow} <br>
    <b>Acc:</b> ${searchedMove.acc} <br>
    <b>MP:</b> ${searchedMove.mp} <br><br>
    <b>Description:</b> ${searchedMove.desc} <br><br>
    <b>Type:</b> ${searchedMove.type}`;
    moveButton.appendChild(tooltip);

    x += 60;
    movesShown++;

    if ((movesShown) % 5 === 0) {
        x = 100;
        y += 60;
    }
}

/**
 * Finds the data of the chosen move.
 * @param {move} selectedMove the chosen move
 * @returns the chosen moves data and stats.
 */
function findMove(selectedMove) {
    for (let i = 0; i < moveList.length; i++) {
        if (selectedMove === moveList[i].name) {
            return moveList[i];
        }
    }
}

function useMove(moveName) {
    removeMoveElements();
    let move = findMove(moveName);
    let roll = Math.floor(Math.random() * 11);
    let variation = 0.95 + (roll / 100);
    let damage = Math.round((((player1.str * 0.065) * move.pow) + 10) * variation);
    if (move.mp <= player1.mpLeft) {
        changeCurrentMP(player1, move.mp);
        characterDamaged(damage, testMonster);
    } else {
        alert("You do not have enough MP left!");
    }
    returnToBattleMenu();
}

function removeMoveElements() {
    let elementsFound = document.getElementsByClassName("moves");
    while (elementsFound.length > 0) {
        elementsFound[0].parentNode.removeChild(elementsFound[0]);
    }
}

function returnToBattleMenu() {
    removeMoveElements();
    movesShown = 0;
    x = 100;
    y = 250;
    document.getElementById("playerAbilities").style.visibility = "visible";
    document.getElementById("playerItems").style.visibility = "visible";
    document.getElementById("playerFlee").style.visibility = "visible";
    document.getElementById("goBack").style.visibility = "hidden";
}

function characterDamaged(damage, character) {
    character.hpLeft -= damage;
    document.getElementById("enemy1HPNumber").innerHTML = character.hpLeft + "/" + character.hp;
    let hpBarWidth = 200 * character.hpLeft / character.hp;
    document.getElementById("enemy1curHP").style.width = hpBarWidth + "px";
    if (hpBarWidth <= 0) {
        document.getElementById("enemy1HPNumber").innerHTML = 0 + "/" + character.hp;
        document.getElementById("enemy1curHP").style.width = 0 + "px";
    }
    changeHpBarColour((character.hpLeft / character.hp) * 100, "enemy1curHP");
    //isCharacterDead(character);
}

function changeHpBarColour(percentage, elementID) {
    if (percentage >= 75) {
        document.getElementById(elementID).style.backgroundColor = 'rgb(' + 14 + ',' + 180 + ',' + 14 + ')';
    }
    else if (percentage >= 50 && percentage < 75) {
        document.getElementById(elementID).style.backgroundColor = "yellow";
    }
    else if (percentage >= 25 && percentage < 50) {
        document.getElementById(elementID).style.backgroundColor = "orange";
    }
    else if (percentage >= 0 && percentage < 25) {
        document.getElementById(elementID).style.backgroundColor = "red";
    }
}

function changeCurrentMP(character, mp) {
    character.mpLeft -= mp;
    document.getElementById("player1MPNumber").innerHTML = player1.mpLeft + "/" + player1.mp;
    let mpBarWidth = 200 * character.mpLeft / character.mp;
    document.getElementById("player1curMP").style.width = mpBarWidth + "px";
}

function isCharacterDead(character) {
    if (character.hpLeft <= 0) {
        return true;
    } else {
        return false;
    }
}

function targetCharacter(selectedMove) {
    let target1 = document.createElement("BUTTON");
    target1.style.top = 100 + "px";
    target1.style.right = 200 + "px";
    target1.className = "targets";
    let text = document.createTextNode("TargetTest");
    target1.appendChild(text);
    document.body.appendChild(target1);
}