let levels = [
    {lvl: 1, xp: 1000},
    {lvl: 2, xp: 1200},
    {lvl: 3, xp: 1400},
    {lvl: 4, xp: 1700},
    {lvl: 5, xp: 2000},
];

let clericStats = [
    {vit: 25},
    {str: 10},
    {wis: 30},
    {dex: 20},
    {spe: 15},
];

let paladinStats = [
    {vit: 25},
    {str: 30},
    {wis: 15},
    {dex: 10},
    {spe: 20},
];

let wizardStats = [
    {vit: 15},
    {str: 10},
    {wis: 30},
    {dex: 20},
    {spe: 25},
];

let rogueStats = [
    {vit: 10},
    {str: 15},
    {wis: 20},
    {dex: 30},
    {spe: 25},
];

let rangerStats = [
    {vit: 15},
    {str: 10},
    {wis: 20},
    {dex: 30},
    {spe: 25},
];

function findCorrectClass(character) {
    switch(character.type) {
        case "Cleric":
            return clericStats;
        case "Paladin":
            return paladinStats;
        case "Wizard":
            return wizardStats;
        case "Rogue":
            return rogueStats;
        case "Ranger":
            return rangerStats;
    }
}