let movesShown = 0;
let x = 100;
let y = 250;
let targetedChar = "";
let combatantsSorted = [];
let currentUnitTurn = 0;
let battleIsOver = false;


/**
 * Changes from mapScreen to battleScreen.
 */
function startBattle() {
    battleIsOver = false;
    onMapScreen = false;
    hideMap();
    findRandomMonsters();
    createBattleScreenElements(createCombatantArray(2, 2));
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
    if (battleIsOver == false) {
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
            currentPlayerIndex = findRightChar(currentPlayer);
            console.log("It is " + currentPlayer.name + " turn. Index " + currentPlayerIndex);
        }
        else if (combatantsSorted[currentUnitTurn] instanceof Monster) {
            console.log("It is " + combatantsSorted[currentUnitTurn].name + "'s turn");
            currentPlayer = combatantsSorted[currentUnitTurn];
            currentMonsterIndex = findRightMonster(currentPlayer);
            randomMove(combatantsSorted[currentUnitTurn]);
        }
    }
}

/**
 * Finds a random move for monster to use.
 * @param {Monster} monster The currently selected monster.
 */
function randomMove(monster) {
    let numOfMoves = monster.availableMoves.length;
    let selectedNum = Math.floor(Math.random() * numOfMoves)
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
    //currentMonsters = [];
    onMapScreen = true;
    let div = getElementById("headElement");
    div.parentNode.removeChild(div);
    unhideMap();
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
        createMonsterTargets(selectedMove);
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
 * Calculates the damage output of a selected move
 * @param {Character} character the character using the move
 * @param {Move} move the selected move used
 * @returns damage as a number
 */
function calculateDamage(character, move) {
    let roll = Math.floor(Math.random() * 11);
    let variation = 0.95 + (roll / 100);
    let damage = Math.round((((character.str * 0.065) * move.pow) + 10) * variation);
    console.log(character.name + " does " + damage + " to " + target.name);
    return damage;
}

/**
 * Checks if the character has enough MP to perform the move
 * @param {Character} character 
 * @param {Move} move 
 * @returns true if character has enough MP, false if not
 */
function checkForMP(character, move) {
    if (move.mp <= character.mpLeft) {
        return true;
    } else {
        return false;
    }
}

/**
 * Uses the selected move on selected target.
 * @param {String} moveName name of the selected move.
 * @param {Character} character the character using the move.
 * @param {Character/Monster} target the selected moves target.
 */
function useMove(moveName, character, target, id) {
    removeMoveElements();
    let move = findMove(moveName);
    if (checkforMP(character, move)) {
        changeCurrentMP(character, move.mp);
        characterDamaged(calculateDamage(character, move), target, id);
    } else {
        alert("You do not have enough MP left!");
    }
    currentUnitTurn++;
    nextUnitsTurn(combatantsSorted);
}

/**
 * Removes all elements of a class from screen.
 */
function removeMoveElements(elementType) {
    let elementsFound = document.getElementsByClassName(elementType);
    while (elementsFound.length > 0) {
        elementsFound[0].parentNode.removeChild(elementsFound[0]);
    }
}

/**
 * Returns the player to the battle menu.
 */
function returnToBattleMenu() {
    removeMoveElements("moves"), removeMoveElements("targets");
    movesShown = 0;
    x = 100;
    y = 250;
    document.getElementById("playerAbilities").style.visibility = "visible";
    document.getElementById("playerItems").style.visibility = "visible";
    document.getElementById("playerFlee").style.visibility = "visible";
    document.getElementById("goBack").style.visibility = "hidden";
}

/**
 * Afflicts the calculated damage onto its reciever
 * @param {Character} character 
 * @param {number} damageValue 
 */
function afflictDamage(character, damageValue) {
    character.hpLeft -= damageValue;
}

/**
 * Drains the user for a selected amount of MP
 * @param {Character} character 
 * @param {number} mpValue 
 */
function drainMP(character, mpValue) {
    character.mpLeft -= mpValue;
}

/**
 * Calculates the remaining HP of the targeted combatant.
 * @param {Number} damage damage taken.
 * @param {Character} character target combatant.
 */
function characterDamaged(damage, character, id) {
    afflictDamage(character, damage);
    alert(currentMonsters[0].hpLeft + " " + currentMonsters[1].hpLeft) //test method
    if (character.hpLeft < 0) {
        character.hpLeft = 0;
        if (character instanceof Monster) {
            giveXP(monsterXPYield(character));
        }
    }
    let hpBarWidth = 200 * character.hpLeft / character.hp;
    if (character instanceof Character) {
        let index = findRightChar(character);
        document.getElementById("player" + (index + 1) + "HPNumber").innerHTML = character.hpLeft + "/" + character.hp;
        document.getElementById("player" + (index + 1) + "curHP").style.width = hpBarWidth + "px";
        changeHpBarColour((character.hpLeft / character.hp) * 100, "player" + (index + 1) + "curHP");
        if (areAllDead(currentCharacters) === true) {
            alert("All Players are dead");
            //toMenu();
        }
    }
    else if (character instanceof Monster) {
        let index = id;
        document.getElementById("enemy" + (index + 1) + "HPNumber").innerHTML = character.hpLeft + "/" + character.hp;
        document.getElementById("enemy" + (index + 1) + "curHP").style.width = hpBarWidth + "px";
        changeHpBarColour((character.hpLeft / character.hp) * 100, "enemy" + (index + 1) + "curHP");
        if (areAllDead(currentMonsters) === true) {
            alert("All Monsters are dead");
            //toMenu();
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
    drainMP(character, mp);
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
            target.id = i;
            target.style.top = ((i * 200) + 100) + "px";
            target.style.right = 200 + "px";
            let text = document.createTextNode("TargetTest");
            target.onclick = function () {
                useMove(selectedMove, currentPlayer, currentMonsters[i], i);
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
function findRightChar(character) {
    for (let i = 0; i < currentCharacters.length; i++) {
        if (character.name == currentCharacters[i].name) {
            return i;
        }
    }
    return false;
}

/**
 * Finds the right monster in monster array.
 * @returns monster if found, and false if not.
 */
function findRightMonster(character) {
    for (let i = 0; i < currentMonsters.length; i++) {
        if (character === currentMonsters[i]) {
            return i;
        }
    }
    return false;
}

/**
 * Checks if all monsters in battle are dead.
 * @returns true if number equals array size, false if not.
 */
function areAllDead(array) {
    let numDead = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].hpLeft == 0) {
            numDead++;
        }
    }
    if (array.length == numDead) {
        battleIsOver = true;
        return true;
    } else {
        return false;
    }
}

/**
 * Formula to calculate xp yield from a monster
 * @param {Monster} monster 
 * @returns the xp yield
 */
function monsterXPYield(monster) {
    let xp = monster.baseXp * (1 + (monster.lvl * 0.03));
    return xp;
}

/**
 * Gives all alive characters a set amount of xp.
 * @param {number} xp number of xp given.
 */
function giveXP(xp) {
    for (let i = 0; i < currentCharacters.length; i++) {
        if (currentCharacters[i].hpLeft > 0) {
            currentCharacters[i].xp += xp;
            checkLvlUp(currentCharacters[i]);
        }
    }
}

/**
 * Gives a specific characte a set amount of xp.
 * @param {number} xp number of xp given.
 * @param {Character} character the chosen character
 */
 function giveXPToChar(xp, character) {
        if (character.hpLeft > 0) {
            character.xp += xp;
            checkLvlUp(character);
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
    switch (character.class) {
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