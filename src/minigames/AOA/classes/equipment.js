class Equipment extends Item {
    constructor(name, type, stackable, price, lvlReq, element, slot, moves, VIT, STR, WIS, DEX, SPD, HP, MP, img) {
        super(name, type, stackable, price);
        this._lvlReq = lvlReq;
        this._element = element;
        this._slot = slot;
        this._moves = moves;
        this._VIT = VIT;
        this._STR = STR;
        this._WIS = WIS;
        this._DEX = DEX;
        this._SPD = SPD;
        this._HP = HP;
        this._MP = MP;
        this._img = img;
    }
}