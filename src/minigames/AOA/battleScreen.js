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
    document.getElementById("goBack").style.visibility = "hidden";
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
 * Adds the combatants stats to the screen.
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

/**
 * Creates a battle order queue based on combatants speed.
 */
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

/**
 * Find the next players turn, and removes dead combatants from the queue.
 * @param {array} combatantsSorted participating characters and monsters.
 */
function nextUnitsTurn(combatantsSorted) {
    do {
        if (currentUnitTurn >= combatantsSorted.length) {
            currentUnitTurn = 0;
        }
        if (combatantsSorted[currentUnitTurn].hpLeft == 0) {
            combatantsSorted.splice(currentUnitTurn, 1);
            if (currentUnitTurn >= combatantsSorted.length) {
                currentUnitTurn = 0;
            }
        }
    } while (combatantsSorted[currentUnitTurn].hpLeft == 0);
    if (combatantsSorted[currentUnitTurn] instanceof Character) {
        document.getElementById("playerAbilities").style.visibility = "visible";
        document.getElementById("playerItems").style.visibility = "visible";
        document.getElementById("playerFlee").style.visibility = "visible";
        currentPlayer = combatantsSorted[currentUnitTurn];
    }
    else if (combatantsSorted[currentUnitTurn] instanceof Monster) {
        randomMove(combatantsSorted[currentUnitTurn]);
    }
}

/**
 * Finds a random move for monster to use.
 * @param {Monster} monster The currently selected monster.
 */
function randomMove(monster) {
    let numOfMoves = monster.availableMoves.length;
    let selectedNum = Math.floor(Math.random() * numOfMoves);
    let randomTarget = Math.floor(Math.random() * currentCharacters.length);
    useMove(monster.availableMoves[selectedNum], monster, currentCharacters[randomTarget]);
}

/**
 * Changes color of button when clicked.
 * @param {Button} _this the chosen button
 */
function buttonClicked(_this) {
    _this.style.backgroundColor = "yellow";
}

/**
 * Changes color of button when unclicked.
 * @param {Button} _this the chosen button
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
 * Shows the currently available moves of the chosen character.
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
 * @param {Move} selectedMove the chosen move.
 */
function createMoveElement(selectedMove) {
    let moveButton = document.createElement("BUTTON");
    moveButton.style.top = y + "px";
    moveButton.style.left = x + "px";
    moveButton.className = "moves";
    moveButton.onclick = function () {
        createCharTargets(selectedMove);
        createMonsterTargets(selectedMove)
    };
    document.body.appendChild(moveButton);
    let tooltip = document.createElement("SPAN");
    tooltip.className = "tooltips";
    let searchedMove = findMove(selectedMove);
    checkMoveType(searchedMove, tooltip), checkElementType(searchedMove, tooltip);
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
 * @param {move} selectedMove the chosen move.
 * @returns the chosen moves data and stats.
 */
function findMove(selectedMove) {
    for (let i = 0; i < moveList.length; i++) {
        if (selectedMove === moveList[i].name) {
            return moveList[i];
        }
    }
}

/**
 * Uses the selected move on selected target.
 * @param {String} moveName name of the selected move.
 * @param {Character} character the character using the move.
 * @param {Character/Monster} target the selected moves target.
 */
function useMove(moveName, character, target) {
    removeMoveElements();
    let move = findMove(moveName);
    let roll = Math.floor(Math.random() * 11);
    let variation = 0.95 + (roll / 100);
    let damage = Math.round((((character.str * 0.065) * move.pow) + 10) * variation);
    console.log(character.name + " does " + damage + " to " + target.name);
    if (move.mp <= character.mpLeft) {
        changeCurrentMP(character, move.mp);
        characterDamaged(damage, target);
    } else {
        alert("You do not have enough MP left!");
    }
    currentUnitTurn++;
    nextUnitsTurn(combatantsSorted);
}

/**
 * Removes all move and target buttons from screen.
 */
function removeMoveElements() {
    let elementsFound = document.getElementsByClassName("moves");
    while (elementsFound.length > 0) {
        elementsFound[0].parentNode.removeChild(elementsFound[0]);
    }
    elementsFound = document.getElementsByClassName("targets");
    while (elementsFound.length > 0) {
        elementsFound[0].parentNode.removeChild(elementsFound[0]);
    }
}

/**
 * Returns the player to the battle menu.
 */
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

/**
 * Calculates the remaining HP of the targeted combatant.
 * @param {Number} damage damage taken.
 * @param {Character} character target combatant.
 */
function characterDamaged(damage, character) {
    character.hpLeft -= damage;
    if (isCharacterDead(character)) {
        character.hpLeft = 0;
        giveXP(character);
    }
    let hpBarWidth = 200 * character.hpLeft / character.hp;
    if (character instanceof Character) {
        document.getElementById("player" + (currentPlayerIndex + 1) + "HPNumber").innerHTML = character.hpLeft + "/" + character.hp;
        document.getElementById("player" + (currentPlayerIndex + 1) + "curHP").style.width = hpBarWidth + "px";
        changeHpBarColour((character.hpLeft / character.hp) * 100, "player" + (currentPlayerIndex + 1) + "curHP");
    }
    else if (character instanceof Monster) {
        let index = findRightMonster(character);
        document.getElementById("enemy" + (index + 1) + "HPNumber").innerHTML = character.hpLeft + "/" + character.hp;
        document.getElementById("enemy" + (index + 1) + "curHP").style.width = hpBarWidth + "px";
        changeHpBarColour((character.hpLeft / character.hp) * 100, "enemy" + (index + 1) + "curHP");
        if (areMonstersDead() === true) {
            alert("All Monsters are dead");
        }
    }
}

/**
 * Changes colour of the HP bar based on percentage of health remaining.
 * @param {Number} percentage percentage of health remaining.
 * @param {ID} elementID id of the HP bar element.
 */
function changeHpBarColour(percentage, elementID) {
    if (percentage >= 75) {
        document.getElementById(elementID).style.background = 'linear-gradient(#33FF33, #27AD27)';
    }
    else if (percentage >= 50 && percentage < 75) {
        document.getElementById(elementID).style.background = 'linear-gradient(#FFFB00, #D6D300)';
    }
    else if (percentage >= 25 && percentage < 50) {
        document.getElementById(elementID).style.background = 'linear-gradient(#FF9700, #D67F00)';
    }
    else if (percentage >= 0 && percentage < 25) {
        document.getElementById(elementID).style.background = 'linear-gradient(#FF0000, #AF0000)';
    }
}

/**
 * Changes current MP of the chosen character
 * @param {Character} character the chosen character
 * @param {Number} mp number to be subtracted from previous remaining MP.
 */
function changeCurrentMP(character, mp) {
    character.mpLeft -= mp;
    let mpBarWidth = 200 * character.mpLeft / character.mp;
    if (character instanceof Character) {
        document.getElementById("player" + (currentPlayerIndex + 1) + "MPNumber").innerHTML = character.mpLeft + "/" + character.mp;
        document.getElementById("player" + (currentPlayerIndex + 1) + "curMP").style.width = mpBarWidth + "px";
    }
    else if (character instanceof Monster) {
        document.getElementById("enemy" + (currentMonsterIndex + 1) + "MPNumber").innerHTML = character.mpLeft + "/" + character.mp;
        document.getElementById("enemy" + (currentMonsterIndex + 1) + "curMP").style.width = mpBarWidth + "px";
    }
}

/**
 * Checks if the chosen character is dead.
 * @param {Character} character the chosen character
 * @returns true if dead and false if not.
 */
function isCharacterDead(character) {
    if (character.hpLeft <= 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Creates targets on characters.
 * @param {Move} selectedMove move selected by current character.
 */
function createCharTargets(selectedMove) {
    for (let i = 0; i < currentCharacters.length; i++) {
        if (currentCharacters[i].hpLeft > 0) {
            let target = document.createElement("BUTTON");
            target.className = "targets";
            target.style.top = ((i * 200) + 100) + "px";
            target.style.left = 200 + "px";
            let text = document.createTextNode("TargetTest");
            target.onclick = function () {
                useMove(selectedMove, currentPlayer, currentCharacters[i]);
            };
            target.appendChild(text);
            document.body.appendChild(target);
        }
    }
}

/**
 * Creates targets on monsters.
 * @param {Move} selectedMove move selected by current character.
 */
function createMonsterTargets(selectedMove) {
    for (let i = 0; i < currentMonsters.length; i++) {
        if (currentMonsters[i].hpLeft > 0) {
            let target = document.createElement("BUTTON");
            target.className = "targets";
            target.style.top = ((i * 200) + 100) + "px";
            target.style.right = 200 + "px";
            let text = document.createTextNode("TargetTest");
            target.onclick = function () {
                useMove(selectedMove, findRightChar(), currentMonsters[i]);
            };
            target.appendChild(text);
            document.body.appendChild(target);
        }
    }
}

/**
 * Finds the right character in character array.
 * @returns character if found, and false if not.
 */
function findRightChar() {
    for (let i = 0; i < currentCharacters.length; i++) {
        if (currentPlayer.name == currentCharacters[i].name) {
            currentPlayerIndex = i;
            return currentCharacters[i];
        }
        else {
            return false;
        }
    }
}

/**
 * Finds the right monster in monster array.
 * @returns monster if found, and false if not.
 */
function findRightMonster(character) {
    for (let i = 0; i < currentMonsters.length; i++) {
        if (character.name === currentMonsters[i].name) {
            return i;
        }
    }
    return false;
}

/**
 * Checks if all monsters in battle are dead.
 * @returns true if number equals array size, false if not.
 */
function areMonstersDead() {
    let numDead = 0;
    for (let i = 0; i < currentMonsters.length; i++) {
        if (currentMonsters[i].hpLeft == 0) {
            numDead++;
        }
    }
    if (currentMonsters.length == numDead) {
        currentMonsters = [];
        return true;
    } else {
        return false;
    }
}

/**
 * Gives alive characters XP based on the slayed monsters baseXP.
 * @param {Monster} monster the slayed monster.
 */
function giveXP(monster) {
    let xpEarned = monster.baseXp * (1 + (monster.lvl * 0.03));
    for (let i = 0; i < currentCharacters.length; i++) {
        if (currentCharacters[i].hpLeft > 0) {
            currentCharacters[i].xp += xpEarned;
            checkLvlUp(currentCharacters[i]);
        }
    }
}

/**
 * Checks if character can lvl up, and does so if true.
 * @param {Character} character the chosen character.
 */
function checkLvlUp(character) {
    while (character.xp >= character.xpNext) {
        character.lvl++;
        increaseStats(character, 3);
        alert(character.vit + " " + character.str + " " + character.wis + " " + character.dex + " " + character.spe);
        character.xp -= character.xpNext;
        for (let i = 0; i <= levels.length; i++) {
            if (levels[i].lvl === character.lvl) {
                character.xpNext = levels[i].xp;
                break;
            }
        }
    }
}

/**
 * Finds the correct class stat distribution of the chosen character.
 * @param {Character} character the chosen character.
 * @returns array of the correct classes stat distribution.
 */
function findClassStats(character) {
    switch(character.class) {
        case "Cleric":
            return [25, 10, 30, 20, 15];
        case "Paladin":
            return [30, 30, 15, 10, 15];
        case "Wizard":
            return [15, 10, 30, 20, 25];
        case "Rogue":
            return [10, 20, 15, 25, 30];
        case "Ranger":
            return [15, 10, 20, 30, 25];
        default:
            return false;
    }
}

/**
 * Increase the stats of the chosen character.
 * @param {*} character the chosen character.
 * @param {*} numOfRolls number of random rolls to decide what stat gets increased.
 */
function increaseStats(character, numOfRolls) {
    let charClass = findClassStats(character);
    for (let i = 0; i < numOfRolls; i++) {
        let roll = Math.floor(Math.random() * 100) + 1;
        if (roll <= charClass[0]) {
            character.vit++;
        }
        else if (roll <= charClass[0] + charClass[1]) {
            character.str++;
        }
        else if (roll <= charClass[0] + charClass[1] + charClass[2]) {
            character.wis++;
        }
        else if (roll <= charClass[0] + charClass[1] + charClass[2] + charClass[3]) {
            character.dex++;
        }
        else if (roll <= charClass[0] + charClass[1] + charClass[2] + charClass[3] + charClass[4]) {
            character.spe++;
        }
    }
}