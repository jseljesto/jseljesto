//Template values for playable characters.
const STR = 10;
const SPE = 10;
const VIT = 10;
const WIS = 10;
const DEX = 10;
const HP = 10 + (3 * VIT);
const MP = 10 + (2 * WIS);
let currentVIT = 0;
let currentSTR = 0;
let currentWIS = 0;
let currentDEX = 0;
let currentSPE = 0;
let amountOfCharacters = 0;
let currentCharacters = [];

//Currently selected player in battle.
let currentPlayer = "";
let currentPlayerIndex = 0;

//First playable character.

//Position of player on map.
let curX = 350;
let curY = 250;

let fabCanvas = new fabric.Canvas("canvas");
fabCanvas.setWidth(1700);
fabCanvas.setHeight(1600);

let gameStarted = false;
let onMapScreen = true;
let popup = document.getElementById("popUp");

const interval = setInterval(draw, 10);

/**
 * Creates popup-menu for character customisation.
 */
function createPopup() {
    document.getElementById("name").value = "";
    document.getElementById("characterClass").value = "";
    document.getElementById("characterRace").value = "";
    let content = document.getElementById("popup-content");
    let span = document.getElementsByClassName("close")[0];
    popup.style.display = "block";
    loadTemplateValues();
}

/**
 * Draws the player onto the map.
 */
function draw() {
    if (onMapScreen == true) {
        fabCanvas.clear();
        let player = new fabric.Circle({
            left: curX, top: curY, fill: "blue", radius: 6, hoverCursor: "pointer", visible: true, selectable: false
        });
        fabCanvas.add(player);
    }
}

/**
 * Checks if arrow-keys are pressed, then moves character accordingly.
 */
function movePlayer(e) {
    if (gameStarted == true) {
        console.log(curY);
        if (curY > 900 && curY < 955) {
            document.body.style.overflow = "visible";
        }
        else {
            document.body.style.overflow = "hidden";
        }
        switch (e.keyCode) {
            case 37:
                curX -= 5;
                console.log("Venstre");
                break;
            case 38:
                console.log("Opp");
                curY -= 5;
                break;
            case 39:
                console.log("Høgre");
                curX += 5;
                break;
            case 40:
                console.log("Ned");
                curY += 5;
                break;
        }
    }
}

/**
 * Closes the pop-up window.
 */
function closeWindow() {
    popup.style.display = "none";
}

/**
 * Collects the input from pop-up window and starts the game for the player.
 * Shows error if player has missing information.
 */
function startGame() {
    if (document.getElementById("name").value != "" && document.getElementById("characterClass").value != "" &&
        document.getElementById("characterRace").value != "") {
        document.getElementById("formError").style.visibility = "hidden";
        gameStarted = true;
        closeWindow();
        let player = createPlayer(window['player' + 1]);
        document.getElementById("chosenName").innerHTML = "Name: " + player.name;
        document.getElementById("chosenTypes").innerHTML = "Race & Class: " + player.race + " " + player.class;
        document.getElementById("chosenVIT").innerHTML = "VIT: " + player.vit;
        document.getElementById("chosenSTR").innerHTML = "STR: " + player.str;
        document.getElementById("chosenWIS").innerHTML = "WIS: " + player.wis;
        document.getElementById("chosenDEX").innerHTML = "DEX: " + player.dex;
        document.getElementById("chosenSPE").innerHTML = "SPE: " + player.spe;
        document.getElementById("chosenHP").innerHTML = "HP: " + player.hpLeft + "/" + player.hp;
        document.getElementById("chosenMP").innerHTML = "MP: " + player.mpLeft + "/" + player.mp;


    }
    else {
        document.getElementById("formError").style.visibility = "visible";
    }
}

function createPlayer(player) {
    player = new Character("", "", "", 0, 0, 0, 0, 0, 1, 0, 1000, 0, 0, 0, 0, ["Normal Strike"]);
    amountOfCharacters++;
    player.name = document.getElementById("name").value;
    player.race = document.getElementById("characterRace").value;
    player.class = document.getElementById("characterClass").value;
    player.vit = currentVIT;
    player.str = currentSTR;
    player.wis = currentWIS;
    player.dex = currentDEX;
    player.spe = currentSPE;
    player.hp = 10 + (3 * player.vit);
    player.hpLeft = player.hp;
    player.mp = 10 + (2 * player.wis);
    player.mpLeft = player.mp;
    currentCharacters.push(player);
    return player;
}

/**
 * Loads template values of character stats.
 */
function loadTemplateValues() {
    document.getElementById("characterVIT").innerHTML = "VIT: " + VIT;
    document.getElementById("characterSTR").innerHTML = "STR: " + STR;
    document.getElementById("characterWIS").innerHTML = "WIS: " + WIS;
    document.getElementById("characterDEX").innerHTML = "DEX: " + DEX;
    document.getElementById("characterSPE").innerHTML = "SPE: " + SPE;
    document.getElementById("characterHP").innerHTML = "HP: " + HP;
    document.getElementById("characterMP").innerHTML = "MP: " + MP;
}

/**
 * Gives characters correct HP and MP based on VIT and WIS stats.
 */
function correctStats() {
    document.getElementById("characterHP").innerHTML = "HP: " + (10 + (3 * currentVIT));
    document.getElementById("characterMP").innerHTML = "MP: " + (10 + (2 * currentWIS));;

}

/**
 * Changes the stat values shown on screen every time user changes class in pop-up window.
 */
function changeClass() {
    let chosenClass = document.getElementById("characterClass").value;
    switch (chosenClass) {
        case "Cleric":
            document.getElementById("characterVIT").innerHTML = "VIT: " + (VIT + 2);
            document.getElementById("characterSTR").innerHTML = "STR: " + (STR - 3);
            document.getElementById("characterWIS").innerHTML = "WIS: " + (WIS + 3);
            document.getElementById("characterDEX").innerHTML = "DEX: " + DEX;
            document.getElementById("characterSPE").innerHTML = "SPE: " + (SPE - 2);
            //player1.vit = VIT + 2, player1.str = STR - 3, player1.wis = WIS + 3, player1.dex = DEX, player1.spe = SPE - 2;
            currentVIT = VIT + 2, currentSTR = STR - 3, currentWIS = WIS + 3, currentDEX = DEX, currentSPE = SPE - 2;
            break;
        case "Paladin":
            document.getElementById("characterVIT").innerHTML = "VIT: " + (VIT + 2);
            document.getElementById("characterSTR").innerHTML = "STR: " + (STR + 3);
            document.getElementById("characterWIS").innerHTML = "WIS: " + (WIS - 1);
            document.getElementById("characterDEX").innerHTML = "DEX: " + (DEX - 3);
            document.getElementById("characterSPE").innerHTML = "SPE: " + (SPE - 1);
            currentVIT = VIT + 2, currentSTR = STR + 3, currentWIS = WIS - 1, currentDEX = DEX - 3, currentSPE = SPE - 1;
            break;
        case "Wizard":
            document.getElementById("characterVIT").innerHTML = "VIT: " + (VIT - 2);
            document.getElementById("characterSTR").innerHTML = "STR: " + (STR - 3);
            document.getElementById("characterWIS").innerHTML = "WIS: " + (WIS + 3);
            document.getElementById("characterDEX").innerHTML = "DEX: " + DEX;
            document.getElementById("characterSPE").innerHTML = "SPE: " + (SPE + 2);
            currentVIT = VIT - 2, currentSTR = STR - 3, currentWIS = WIS + 3, currentDEX = DEX, currentSPE = SPE + 2;
            break;
        case "Rogue":
            document.getElementById("characterVIT").innerHTML = "VIT: " + (VIT - 3);
            document.getElementById("characterSTR").innerHTML = "STR: " + STR;
            document.getElementById("characterWIS").innerHTML = "WIS: " + (WIS - 2);
            document.getElementById("characterDEX").innerHTML = "DEX: " + (DEX + 2);
            document.getElementById("characterSPE").innerHTML = "SPE: " + (SPE + 3);
            currentVIT = VIT - 3, currentSTR = STR, currentWIS = WIS - 2, currentDEX = DEX + 2, currentSPE = SPE + 3;
            break;
        case "Ranger":
            document.getElementById("characterVIT").innerHTML = "VIT: " + (VIT - 2);
            document.getElementById("characterSTR").innerHTML = "STR: " + (STR - 2);
            document.getElementById("characterWIS").innerHTML = "WIS: " + WIS;
            document.getElementById("characterDEX").innerHTML = "DEX: " + (DEX + 3);
            document.getElementById("characterSPE").innerHTML = "SPE: " + (SPE + 1);
            currentVIT = VIT - 2, currentSTR = STR - 2, currentWIS = WIS, currentDEX = DEX + 3, currentSPE = SPE + 1;
            break;
        /*else if (chosenClass == "Druid") {
            document.getElementById("characterVIT").innerHTML = "VIT: " + (VIT-3);
            document.getElementById("characterSTR").innerHTML = "STR: " + (STR-2);
            document.getElementById("characterWIS").innerHTML = "WIS: " + (WIS+2);
            document.getElementById("characterDEX").innerHTML = "DEX: " + (DEX+2);
            document.getElementById("characterSPE").innerHTML = "SPE: " + (SPE+1);
        } */
        default:
            document.getElementById("characterVIT").innerHTML = "VIT: " + VIT;
            document.getElementById("characterSTR").innerHTML = "STR: " + STR;
            document.getElementById("characterWIS").innerHTML = "WIS: " + WIS;
            document.getElementById("characterDEX").innerHTML = "DEX: " + DEX;
            document.getElementById("characterSPE").innerHTML = "SPE: " + SPE;
            currentVIT = VIT, currentSTR = STR, currentWIS = WIS, currentDEX = DEX, currentSPE = SPE;
            break;
    }
    correctStats();
}

function createCombatantArray(numOfChars, numOfMonsters) {
    let array = [];
    for (let i = 1; i <= numOfChars; i++) {
        array.push("player" + i);
    }
    for (let j = 1; j <= numOfMonsters; j++) {
        array.push("enemy" + j);
    }
    return array;
}

function createBattleScreenElements(array) {
    let charPosition = 1;
    let headElement = document.createElement("DIV");
    headElement.id = "headElement";
    document.body.appendChild(headElement);
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "enemy1") {
            charPosition = 1;
        }

        let charName = document.createElement("P");
        charName.id = array[i] + "Name";
        charName.style.position = "absolute";
        charName.style.top = 100 + (200 * (charPosition - 1)) + "px";
        (array[i].includes("player")) ? (charName.style.left = 100 + "px") : (charName.style.right = 300 + "px");
        headElement.appendChild(charName);

        let charHP = document.createElement("P");
        charHP.id = array[i] + "HP";
        charHP.className = "statBar";
        charHP.style.position = "absolute";
        charHP.style.top = 150 + (200 * (charPosition - 1)) + "px";
        (array[i].includes("player")) ? (charHP.style.left = 100 + "px") : (charHP.style.right = 100 + "px");
        headElement.appendChild(charHP);

        let charCurHP = document.createElement("P");
        charCurHP.id = array[i] + "curHP";
        charCurHP.className = "remainingValuesHP";
        charCurHP.style.position = "absolute";
        charCurHP.style.top = 150 + (200 * (charPosition - 1)) + "px";
        (array[i].includes("player")) ? (charCurHP.style.left = 100 + "px") : (charCurHP.style.right = 100 + "px");
        headElement.appendChild(charCurHP);

        let charHPNumber = document.createElement("P");
        charHPNumber.id = array[i] + "HPNumber";
        charHPNumber.style.position = "absolute";
        charHPNumber.style.top = 150 + (200 * (charPosition - 1)) + "px";
        (array[i].includes("player")) ? (charHPNumber.style.left = 310 + "px") : (charHPNumber.style.right = 310 + "px");
        headElement.appendChild(charHPNumber);

        let charMP = document.createElement("P");
        charMP.id = array[i] + "MP";
        charMP.className = "statBar";
        charMP.style.position = "absolute";
        charMP.style.top = 200 + (200 * (charPosition - 1)) + "px";
        (array[i].includes("player")) ? (charMP.style.left = 100 + "px") : (charMP.style.right = 100 + "px");
        headElement.appendChild(charMP);

        let charCurMP = document.createElement("P");
        charCurMP.id = array[i] + "curMP";
        charCurMP.className = "remainingValuesMP";
        charCurMP.style.position = "absolute";
        charCurMP.style.top = 200 + (200 * (charPosition - 1)) + "px";
        (array[i].includes("player")) ? (charCurMP.style.left = 100 + "px") : (charCurMP.style.right = 100 + "px");
        headElement.appendChild(charCurMP);

        let charMPNumber = document.createElement("P");
        charMPNumber.id = array[i] + "MPNumber";
        charMPNumber.style.position = "absolute";
        charMPNumber.style.top = 200 + (200 * (charPosition - 1)) + "px";
        (array[i].includes("player")) ? (charMPNumber.style.left = 310 + "px") : (charMPNumber.style.right = 310 + "px");
        headElement.appendChild(charMPNumber);

        charPosition++;
    }
}