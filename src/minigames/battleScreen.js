function startBattle() {
    hideMap();
}

function hideMap() {
    document.body.style.background = "white";
    fabCanvas.clear();

    document.getElementById("chosenName").style.visibility = hidden;
    document.getElementById("chosenTypes").style.visibility = hidden;
    document.getElementById("chosenVIT").style.visibility = hidden; 
    document.getElementById("chosenSTR").style.visibility = hidden; 
    document.getElementById("chosenWIS").style.visibility = hidden; 
    document.getElementById("chosenDEX").style.visibility = hidden; 
    document.getElementById("chosenSPE").style.visibility = hidden; 
    document.getElementById("chosenHP").style.visibility = hidden; 
    document.getElementById("chosenMP").style.visibility = hidden;
}