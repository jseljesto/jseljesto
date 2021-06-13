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

function startBattle() {
    onMapScreen = false;
    hideMap();
    unhideBattleScreen();
    addStats();
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
    document.getElementById("battleTest").style.visibility = "hidden";
}

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

function addStats() {
    document.getElementById("player1HPNumber").innerHTML = player1.hpLeft + "/" + player1.hp;
    document.getElementById("player1MPNumber").innerHTML = player1.mpLeft + "/" + player1.mp;
    document.getElementById("enemy1HPNumber").innerHTML = testMonster.hpLeft + "/" + testMonster.hp;
    document.getElementById("enemy1MPNumber").innerHTML = testMonster.mpLeft + "/" + testMonster.mp;
    document.getElementById("player1Name").innerHTML = player1.name;
    document.getElementById("enemy1Name").innerHTML = testMonster.name;
}

function buttonClicked(_this) {
    _this.style.backgroundColor = "yellow"
}

function buttonUnclicked(_this) {
    _this.style.backgroundColor = "cornflowerblue";
}

function toMenu() {
    onMapScreen = true;
    unhideMap();
    hideBattleScreen();
    document.body.style.background = "url(RegionTest1.png) no-repeat";
}