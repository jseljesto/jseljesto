let testMonster = {
    name: "Bear",
    race: "",
    class: "",
    vit: 8,
    str: 8,
    wis: 4,
    dex: 6,
    spe: 7,
    lvl: 1,
    xp: 0,
    hp: 31,
    hpLeft: 31,
    mp: 18,
    mpLeft: 18
};

let movesShown = 0;
let x = 100;
let y = 250;

/**
 * Changes from mapScreen to battleScreen.
 */
function startBattle() {
    onMapScreen = false;
    hideMap();
    unhideBattleScreen();
    addStats();
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
    document.getElementById("player1HP").style.visibility = "hidden";
    document.getElementById("player1MP").style.visibility = "hidden";
    document.getElementById("enemy1HP").style.visibility = "hidden";
    document.getElementById("enemy1MP").style.visibility = "hidden";
    document.getElementById("player1curHP").style.visibility = "hidden";
    document.getElementById("player1curMP").style.visibility = "hidden";
    document.getElementById("enemy1curHP").style.visibility = "hidden";
    document.getElementById("enemy1curMP").style.visibility = "hidden";
    document.getElementById("player1HPNumber").style.visibility = "hidden";
    document.getElementById("player1MPNumber").style.visibility = "hidden";
    document.getElementById("enemy1HPNumber").style.visibility = "hidden";
    document.getElementById("enemy1MPNumber").style.visibility = "hidden";
    document.getElementById("player1Name").style.visibility = "hidden";
    document.getElementById("enemy1Name").style.visibility = "hidden";
    document.getElementById("playerAbilities").style.visibility = "hidden";
    document.getElementById("playerItems").style.visibility = "hidden";
    document.getElementById("playerFlee").style.visibility = "hidden";
}

/**
 * Makes the battle screen visible again.
 */
function unhideBattleScreen() {
    document.getElementById("player1HP").style.visibility = "visible";
    document.getElementById("player1MP").style.visibility = "visible";
    document.getElementById("enemy1HP").style.visibility = "visible";
    document.getElementById("enemy1MP").style.visibility = "visible";
    document.getElementById("player1curHP").style.visibility = "visible";
    document.getElementById("player1curMP").style.visibility = "visible";
    document.getElementById("enemy1curHP").style.visibility = "visible";
    document.getElementById("enemy1curMP").style.visibility = "visible";
    document.getElementById("player1HPNumber").style.visibility = "visible";
    document.getElementById("player1MPNumber").style.visibility = "visible";
    document.getElementById("enemy1HPNumber").style.visibility = "visible";
    document.getElementById("enemy1MPNumber").style.visibility = "visible";
    document.getElementById("player1Name").style.visibility = "visible";
    document.getElementById("enemy1Name").style.visibility = "visible";
    document.getElementById("playerAbilities").style.visibility = "visible";
    document.getElementById("playerItems").style.visibility = "visible";
    document.getElementById("playerFlee").style.visibility = "visible";
}

/**
 * Adds the battling characters stats to the screen.
 */
function addStats() {
    document.getElementById("player1HPNumber").innerHTML = player1.hpLeft + "/" + player1.hp;
    document.getElementById("player1MPNumber").innerHTML = player1.mpLeft + "/" + player1.mp;
    document.getElementById("enemy1HPNumber").innerHTML = testMonster.hpLeft + "/" + testMonster.hp;
    document.getElementById("enemy1MPNumber").innerHTML = testMonster.mpLeft + "/" + testMonster.mp;
    document.getElementById("player1Name").innerHTML = player1.name;
    document.getElementById("enemy1Name").innerHTML = testMonster.name;
}

/**
 * Changes color of button when clicked.
 * @param {*} _this the chosen button
 */
function buttonClicked(_this) {
    _this.style.backgroundColor = "yellow"
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
function showMoves() {
    for (let i = 0; i < player1.availableMoves.length; i++) {
        createMoveElement(player1.availableMoves[i]);
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