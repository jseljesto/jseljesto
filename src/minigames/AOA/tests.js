/* describe("unhideMap", function() {

    unhideMap();

    it("shows character name", function() {
        assert.equal(document.getElementById("chosenName").style.visibility, "visible");
      });
  
      it("shows character types", function() {
          assert.equal(document.getElementById("chosenTypes").style.visibility, "visible");
      });
  
      it("shows character vitality", function() {
          assert.equal(document.getElementById("chosenVIT").style.visibility, "visible");
      });
  
      it("shows character strength", function() {
          assert.equal(document.getElementById("chosenSTR").style.visibility, "visible");
      });
  
      it("shows character wisdom", function() {
          assert.equal(document.getElementById("chosenWIS").style.visibility, "visible");
      });
  
      it("shows character dexterity", function() {
          assert.equal(document.getElementById("chosenDEX").style.visibility, "visible");
      });
  
      it("shows character speed", function() {
          assert.equal(document.getElementById("chosenSPE").style.visibility, "visible");
      });
      
      it("shows battle test button", function() {
          assert.equal(document.getElementById("battleTest").style.visibility, "visible");
      });
}); */

describe("hideMap", function () {

    hideMap();

    it("hides character name", function () {
        assert.equal(document.getElementById("chosenName").style.visibility, "hidden");
    });

    it("hides character types", function () {
        assert.equal(document.getElementById("chosenTypes").style.visibility, "hidden");
    });

    it("hides character vitality", function () {
        assert.equal(document.getElementById("chosenVIT").style.visibility, "hidden");
    });

    it("hides character strength", function () {
        assert.equal(document.getElementById("chosenSTR").style.visibility, "hidden");
    });

    it("hides character wisdom", function () {
        assert.equal(document.getElementById("chosenWIS").style.visibility, "hidden");
    });

    it("hides character dexterity", function () {
        assert.equal(document.getElementById("chosenDEX").style.visibility, "hidden");
    });

    it("hides character speed", function () {
        assert.equal(document.getElementById("chosenSPE").style.visibility, "hidden");
    });

    it("hides battle test button", function () {
        assert.equal(document.getElementById("battleTest").style.visibility, "hidden");
    });
});

describe("hideBattleScreen", function () {

    hideBattleScreen();

    it("hides player 1's name", function () {
        assert.equal(document.getElementById("player1Name").style.visibility, "hidden");
    });

    it("hides player 1's HP Bar", function () {
        assert.equal(document.getElementById("player1HP").style.visibility, "hidden");
    });

    it("hides player 1's current HP", function () {
        assert.equal(document.getElementById("player1curHP").style.visibility, "hidden");
    });

    it("hides player 1's total HP", function () {
        assert.equal(document.getElementById("player1HPNumber").style.visibility, "hidden");
    });

    it("hides player 1's MP bar", function () {
        assert.equal(document.getElementById("player1MP").style.visibility, "hidden");
    });

    it("hides player 1's current MP", function () {
        assert.equal(document.getElementById("player1curMP").style.visibility, "hidden");
    });

    it("hides player 1's total MP", function () {
        assert.equal(document.getElementById("player1MPNumber").style.visibility, "hidden");
    });

    it("hides abilities button", function () {
        assert.equal(document.getElementById("playerAbilities").style.visibility, "hidden");
    });

    it("hides items button", function () {
        assert.equal(document.getElementById("playerItems").style.visibility, "hidden");
    });

    it("hides flee button", function () {
        assert.equal(document.getElementById("playerFlee").style.visibility, "hidden");
    });

    it("hides go-back button", function () {
        assert.equal(document.getElementById("goBack").style.visibility, "hidden");
    });

});