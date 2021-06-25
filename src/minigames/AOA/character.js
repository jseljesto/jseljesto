class Character {

    constructor(name, race, type, vit, str, wis, dex, spe, lvl, xp, xpNext, hp, hpLeft, mp, mpLeft, availableMoves) {
        this._name = name;
        this._race = race;
        this._type = type;
        this._vit = vit;
        this._str = str;
        this._wis = wis;
        this._dex = dex;
        this._spe = spe;
        this._lvl = lvl;
        this._xp = xp;
        this._xpNext = xpNext;
        this._hp = hp;
        this._hpLeft = hpLeft;
        this._mp = mp;
        this._mpLeft = mpLeft;
        this._availableMoves = availableMoves;
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
    * @return {string} vit The vit value.
    */
    get vit() {
        return this._vit;
    }

    /**
     * Set the vit value.
    * @param {string} vit The vit value.
    */
    set vit(vit) {
        this._vit = vit;
    }

    /**
    * Get the str value.
    * @return {string} str The str value.
    */
    get str() {
        return this._str;
    }

    /**
     * Set the str value.
    * @param {string} str The str value.
    */
    set str(str) {
        this._str = str;
    }

    /**
    * Get the wis value.
    * @return {string} wis The wis value.
    */
    get wis() {
        return this._wis;
    }

    /**
     * Set the wis value.
    * @param {string} wis The wis value.
    */
    set wis(wis) {
        this._wis = wis;
    }

    /**
    * Get the dex value.
    * @return {string} dex The dex value.
    */
    get dex() {
        return this._dex;
    }

    /**
     * Set the dex value.
    * @param {string} dex The dex value.
    */
    set dex(dex) {
        this._dex = dex;
    }

    /**
    * Get the spe value.
    * @return {string} spe The spe value.
    */
    get spe() {
        return this._spe;
    }

    /**
     * Set the spe value.
    * @param {string} spe The spe value.
    */
    set spe(spe) {
        this._spe = spe;
    }

    /**
    * Get the lvl value.
    * @return {string} lvl The lvl value.
    */
    get lvl() {
        return this._lvl;
    }

    /**
     * Set the lvl value.
    * @param {string} lvl The lvl value.
    */
    set lvl(lvl) {
        this._lvl = lvl;
    }

    /**
    * Get the xp value.
    * @return {string} xp The xp value.
    */
    get xp() {
        return this._xp;
    }

    /**
     * Set the xp value.
    * @param {string} xp The xp value.
    */
    set xp(xp) {
        this._xp = xp;
    }

    /**
    * Get the hp value.
    * @return {string} hp The hp value.
    */
    get hp() {
        return this._hp;
    }

    /**
     * Set the hp value.
    * @param {string} hp The hp value.
    */
    set hp(hp) {
        this._hp = hp;
    }

    /**
    * Get the hpLeft value.
    * @return {string} hpLeft The hpLeft value.
    */
    get hpLeft() {
        return this._hpLeft;
    }

    /**
     * Set the hpLeft value.
    * @param {string} hpLeft The hpLeft value.
    */
    set hpLeft(hpLeft) {
        this._hpLeft = hpLeft;
    }

    /**
    * Get the mp value.
    * @return {string} mp The mp value.
    */
    get mp() {
        return this._mp;
    }

    /**
     * Set the mp value.
    * @param {string} mp The mp value.
    */
    set mp(mp) {
        this._mp = mp;
    }

    /**
    * Get the mpLeft value.
    * @return {string} mpLeft The mpLeft value.
    */
    get mpLeft() {
        return this._mpLeft;
    }

    /**
     * Set the mpLeft value.
    * @param {string} mpLeft The mpLeft value.
    */
    set mpLeft(mpLeft) {
        this._mpLeft = mpLeft;
    }

    /**
    * Get the available moves of the character.
    * @return {string} availableMoves The available moves.
    */
     get availableMoves() {
        return this._availableMoves;
    }

    /**
     * Set the available moves of the character
    * @param {string} availableMoves The available moves.
    */
    set availableMoves(availableMoves) {
        this._availableMoves = availableMoves;
    }

}