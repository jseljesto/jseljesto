let testMonster = [{
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
    mp: 18
}];

function startBattle() {
    onMapScreen = false;
    hideMap();
    unhideBattleScreen();
}

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
}

function unhideBattleScreen() {
    document.getElementById("player1HP").style.visibility = "visible";
    document.getElementById("player1MP").style.visibility = "visible";
    document.getElementById("enemy1HP").style.visibility = "visible";
    document.getElementById("enemy1MP").style.visibility = "visible";
    document.getElementById("player1curHP").style.visibility = "visible";
    document.getElementById("player1curMP").style.visibility = "visible";
    document.getElementById("enemy1curHP").style.visibility = "visible";
    document.getElementById("enemy1curMP").style.visibility = "visible";
}