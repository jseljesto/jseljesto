class Move {

    constructor(name, pow, acc, mp, effects, targets, img) {
        this._name = name;
        this._pow = pow;
        this._acc = acc;
        this._mp = mp;
        this._effects = effects;
        this._targets = targets;
        this._img = img;
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
    * @return {string} pow The power value.
    */
     get pow() {
        return this._pow;
    }

    /**
     * Set the power value.
    * @param {string} pow The power value.
    */
    set pow(pow) {
        this._pow = pow;
    }

    /**
    * Get the accuracy value.
    * @return {string} acc The accuracy value.
    */
     get acc() {
        return this._acc;
    }

    /**
     * Set the accuracy value.
    * @param {string} acc The accuracy value.
    */
    set acc(acc) {
        this._acc = acc;
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
}