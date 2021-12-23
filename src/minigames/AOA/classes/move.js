class Move {

    constructor(name, pow, acc, mp, effects, targets, img, desc, type, element) {
        this._name = name;
        this._pow = pow;
        this._acc = acc;
        this._mp = mp;
        this._effects = effects;
        this._targets = targets;
        this._img = img;
        this._desc = desc;
        this._type = type;
        this._element = element;
        moveList.push(this);
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
    * Get the power value.
    * @return {number} pow The power value.
    */
    get pow() {
        return this._pow;
    }

    /**
     * Set the power value.
    * @param {number} pow The power value.
    */
    set pow(pow) {
        this._pow = pow;
    }

    /**
    * Get the accuracy value.
    * @return {number} acc The accuracy value.
    */
    get acc() {
        return this._acc;
    }

    /**
     * Set the accuracy value.
    * @param {number} acc The accuracy value.
    */
    set acc(acc) {
        this._acc = acc;
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
    * Get the extra effects of move.
    * @return {string} effects Extra effects.
    */
    get effects() {
        return this._effects;
    }

    /**
     * Set the extra effects of move.
    * @param {string} effects Extra effects.
    */
    set effects(effects) {
        this._effects = effects;
    }

    /**
    * Get the moves targets.
    * @return {string} targets The chosen targets.
    */
    get targets() {
        return this._targets;
    }

    /**
     * Set the moves targets.
    * @param {string} targets The chosen targets.
    */
    set targets(targets) {
        this._targets = targets;
    }

    /**
    * Get the image value.
    * @return {string} img Image link.
    */
    get img() {
        return this._img;
    }

    /**
     * Set the image value.
    * @param {string} img Image link.
    */
    set img(img) {
        this._img = img;
    }

    /**
    * Get the description of the move.
    * @return {string} desc The desc value.
    */
    get desc() {
        return this._desc;
    }

    /**
     * Set the description of the move.
    * @param {string} desc The desc value.
    */
    set desc(desc) {
        this._desc = desc;
    }

    /**
    * Get the magic type.
    * @return {string} type The type value.
    */
    get type() {
        return this._type;
    }

    /**
     * Set the magic type.
    * @param {string} type The type value.
    */
    set type(type) {
        this._type = type;
    }

    /**
    * Get the element type.
    * @return {string} type The type value.
    */
     get element() {
        return this._element;
    }

    /**
     * Set the element type.
    * @param {string} type The type value.
    */
    set element(element) {
        this._element = element;
    }
}

let moveList = [];
let normalStrike = new Move("Normal Strike", 10, 90, 1, "", "All", "", "The most basic attack. User swings his weapon at the opponent with good precision.", "Melee", "Normal");
let scratch = new Move("Scratch", 10, 70, 0, "", "All", "", "User uses their large claws to swing at their opponent.", "Melee", "Normal");

/**
 * Changes tooltip background based on move type.
 * @param {Move} move the selected move.
 * @param {*} tooltip the tooltip to be shown.
 */
function checkMoveType(move, tooltip) {
    if (move.type === "Magical") {
        tooltip.style.backgroundBlendMode = "multiply";
        tooltip.style.backgroundImage = "radial-gradient(circle at center center, #cac3c3, #ffffff), repeating-radial-gradient(circle at center center, #cac3c3, #cac3c3, 17px, transparent 34px, transparent 17px)";
    }
    else if (move.type === "Ranged") {
        tooltip.style.backgroundImage = "repeating-linear-gradient( 45deg, #ffffff, #ffffff 2px, #0000ff 2px, #0000ff 10px)";
    }
    else if (move.type === "Melee") {
        tooltip.style.backgroundImage = "url(pictures/sword.png)";
        tooltip.style.backgroundRepeat = "no-repeat";
    }
}

/**
 * Changes tooltip color based on move element.
 * @param {Move} move the selected move.
 * @param {*} tooltip the tooltip to be shown.
 */
function checkElementType(move, tooltip) {
    if (move.element === "Normal") {
        tooltip.style.color = "white";
        tooltip.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
    }
}