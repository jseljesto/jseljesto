class Monster {

    constructor(name, race, type, vit, str, wis, dex, spe, lvl, baseXp, hp, hpLeft, mp, mpLeft, availableMoves) {
        this._name = name;
        this._race = race;
        this._type = type;
        this._vit = vit;
        this._str = str;
        this._wis = wis;
        this._dex = dex;
        this._spe = spe;
        this._lvl = lvl;
        this._baseXp = baseXp;
        this._hp = hp;
        this._hpLeft = hpLeft;
        this._mp = mp;
        this._mpLeft = mpLeft;
        this._availableMoves = availableMoves;
        monsterList.push(this);
    }

    /**
    * Get the name value.
    * @return {string} name The name value.
    */
    get name() {
        return this._name;
    }

    /**
     * Set the name value.
    * @param {string} name The name value.
    */
    set name(name) {
        this._name = name;
    }

    /**
    * Get the race value.
    * @return {string} race The race value.
    */
    get race() {
        return this._race;
    }

    /**
     * Set the race value.
    * @param {string} race The race value.
    */
    set race(race) {
        this._race = race;
    }

    /**
    * Get the type value.
    * @return {string} type The type value.
    */
    get type() {
        return this._type;
    }

    /**
     * Set the type value.
    * @param {string} type The type value.
    */
    set type(type) {
        this._type = type;
    }

    /**
    * Get the vit value.
    * @return {number} vit The vit value.
    */
    get vit() {
        return this._vit;
    }

    /**
     * Set the vit value.
    * @param {number} vit The vit value.
    */
    set vit(vit) {
        this._vit = vit;
    }

    /**
    * Get the str value.
    * @return {number} str The str value.
    */
    get str() {
        return this._str;
    }

    /**
     * Set the str value.
    * @param {number} str The str value.
    */
    set str(str) {
        this._str = str;
    }

    /**
    * Get the wis value.
    * @return {number} wis The wis value.
    */
    get wis() {
        return this._wis;
    }

    /**
     * Set the wis value.
    * @param {number} wis The wis value.
    */
    set wis(wis) {
        this._wis = wis;
    }

    /**
    * Get the dex value.
    * @return {number} dex The dex value.
    */
    get dex() {
        return this._dex;
    }

    /**
     * Set the dex value.
    * @param {number} dex The dex value.
    */
    set dex(dex) {
        this._dex = dex;
    }

    /**
    * Get the spe value.
    * @return {number} spe The spe value.
    */
    get spe() {
        return this._spe;
    }

    /**
     * Set the spe value.
    * @param {number} spe The spe value.
    */
    set spe(spe) {
        this._spe = spe;
    }

    /**
    * Get the lvl value.
    * @return {number} lvl The lvl value.
    */
    get lvl() {
        return this._lvl;
    }

    /**
     * Set the lvl value.
    * @param {number} lvl The lvl value.
    */
    set lvl(lvl) {
        this._lvl = lvl;
    }

    /**
    * Get the base xp value.
    * @return {number} xp The xp value.
    */
    get baseXp() {
        return this._baseXp;
    }

    /**
     * Set the base xp value.
    * @param {number} xp The xp value.
    */
    set baseXp(baseXp) {
        this._baseXp = baseXp;
    }

    /**
    * Get the hp value.
    * @return {number} hp The hp value.
    */
    get hp() {
        return this._hp;
    }

    /**
     * Set the hp value.
    * @param {number} hp The hp value.
    */
    set hp(hp) {
        this._hp = hp;
    }

    /**
    * Get the hpLeft value.
    * @return {number} hpLeft The hpLeft value.
    */
    get hpLeft() {
        return this._hpLeft;
    }

    /**
     * Set the hpLeft value.
    * @param {number} hpLeft The hpLeft value.
    */
    set hpLeft(hpLeft) {
        this._hpLeft = hpLeft;
    }

    /**
    * Get the mp value.
    * @return {number} mp The mp value.
    */
    get mp() {
        return this._mp;
    }

    /**
     * Set the mp value.
    * @param {number} mp The mp value.
    */
    set mp(mp) {
        this._mp = mp;
    }

    /**
    * Get the mpLeft value.
    * @return {number} mpLeft The mpLeft value.
    */
    get mpLeft() {
        return this._mpLeft;
    }

    /**
     * Set the mpLeft value.
    * @param {number} mpLeft The mpLeft value.
    */
    set mpLeft(mpLeft) {
        this._mpLeft = mpLeft;
    }

    /**
    * Get the available moves of the character.
    * @return {string[]} availableMoves The available moves.
    */
    get availableMoves() {
        return this._availableMoves;
    }

    /**
     * Set the available moves of the character
    * @param {string[]} availableMoves The available moves.
    */
    set availableMoves(availableMoves) {
        this._availableMoves = availableMoves;
    }

}
let monsterList = [];
let currentMonsters = [];
let currentMonsterIndex = 0;
let bear = new Monster("Bear", "", "", 8, 8, 4, 6, 7, 1, 10, 31, 31, 18, 18, ["Scratch"]);
let cub = new Monster("Cub", "", "", 5, 6, 3, 6, 7, 1, 7, 24, 24, 15, 15, ["Scratch"]);


function findRandomMonsters(amount) {
    for (let i = 0; i < amount; i++) {
        let randNum = Math.floor(Math.random() * monsterList.length);
        let testMonster = Object.assign(Object.create(Object.getPrototypeOf(monsterList[randNum])), monsterList[randNum]);
        currentMonsters.push(testMonster);
    }
}