class Item {

    constructor(name, type, stackable, price) {
        this._name = name;
        this._type = type;
        this._stackable = stackable;
        this._price = price;
    }
}

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

    get stackable() {
        return this._stackable;
    }

    /**
     * Set the stackable value.
    * @param {string} stackable The stackable value.
    */
    set stackable(stackable) {
        this._stackable = stackable;
    }

    get price() {
        return this._price;
    }

    /**
     * Set the price value.
    * @param {string} price The price value.
    */
    set price(price) {
        this._price = price;
    }

    get lvlReq() {
        return this._lvlReq;
    }

    /**
     * Set the lvlReq value.
    * @param {string} lvlReq The lvlReq value.
    */
    set lvlReq(lvlReq) {
        this._lvlReq = lvlReq;
    }

    get element() {
        return this._element;
    }

    /**
     * Set the element value.
    * @param {string} element The element value.
    */
    set element(element) {
        this._element = element;
    }

    get slot() {
        return this._slot;
    }

    /**
     * Set the slot value.
    * @param {string} slot The slot value.
    */
    set slot(slot) {
        this._slot = slot;
    }

    get moves() {
        return this._moves;
    }

    /**
     * Set the moves value.
    * @param {string} moves The moves value.
    */
    set moves(moves) {
        this._moves = moves;
    }

    get VIT() {
        return this._VIT;
    }

    /**
     * Set the VIT value.
    * @param {string} VIT The VIT value.
    */
    set VIT(VIT) {
        this._VIT = VIT;
    }

    get STR() {
        return this._STR;
    }

    /**
     * Set the STR value.
    * @param {string} STR The STR value.
    */
    set STR(STR) {
        this._STR = STR;
    }

    get WIS() {
        return this._WIS;
    }

    /**
     * Set the WIS value.
    * @param {string} WIS The WIS value.
    */
    set WIS(WIS) {
        this._WIS = WIS;
    }

    get DEX() {
        return this._DEX;
    }

    /**
     * Set the DEX value.
    * @param {string} DEX The DEX value.
    */
    set DEX(DEX) {
        this._DEX = DEX;
    }

    get SPD() {
        return this._SPD;
    }

    /**
     * Set the SPD value.
    * @param {string} SPD The SPD value.
    */
    set SPD(SPD) {
        this._SPD = SPD;
    }

    get HP() {
        return this._HP;
    }

    /**
     * Set the HP value.
    * @param {string} HP The HP value.
    */
    set HP(HP) {
        this._HP = HP;
    }

    get MP() {
        return this._MP;
    }

    /**
     * Set the MP value.
    * @param {string} MP The MP value.
    */
    set MP(MP) {
        this._MP = MP;
    }

    get img() {
        return this._img;
    }

    /**
     * Set the img value.
    * @param {string} img The img value.
    */
    set img(img) {
        this._img = img;
    }

}

let items = [];
let selectedItemIndex;
let isDown = false;

function equip(character, item, itemType, slotName) {
    let slotIndex = findCorrectSlot(slotName);
    if ((itemType + "Slot") === character.equipmentSlots[slotIndex]) {
        console.log("Fits the slot");
        character.equipmentSlots[slotIndex] = item;
        addEquipmentStats(character, item);
        return true;
    } else {
        console.log("Didn't fit the slot");
        return false;
    }
}

function unequip(character, slotIndex, slotName) {
    let temp = character.equipmentSlots[slotIndex];
    items.push(temp);
    character.equipmentSlots[slotIndex] = slotName;
    removeEquipmentStats(character, temp);
}

function addEquipmentStats(character, item) {
    character.vit += item.VIT; character.str += item.STR; character.wis += item.WIS; character.dex += item.DEX; character.spe += item.SPD;
}

function removeEquipmentStats(character, item) {
    character.vit -= item.VIT; character.str -= item.STR; character.wis -= item.WIS; character.dex -= item.DEX; character.spe -= item.SPD;
}

/**
 * Finds the index of the selected equipment slot
 * @param {*} input name of the selected slot
 * @returns index of the selected slot
 */
function findCorrectSlot(input) {
    switch (input) {
        case "helmetSlot":
            return 0;
        case "necklaceSlot":
            return 1;
        case "weaponSlot":
            return 2;
        case "chestSlot":
            return 3;
        case "shieldSlot":
            return 4;
        case "glovesSlot":
            return 5;
        case "legsSlot":
            return 6;
        case "ringSlot":
            return 7;
        case "feetSlot":
            return 8;
        default:
            return false;
    }
}

/**
 * Fills out inventory screen with items from the items array
 */
function populateInventoryScreen() {
    for (let i = 0; i < items.length; i++) {
        document.getElementById("slot" + (i + 1)).innerHTML = items[i].type;
    }
}

function addAdditionalSlot() {
    let slot = document.createElement("DIV");
    slot.className = "inventorySlot";
    let inventory = document.getElementsByClassName("inventoryTable");
    inventory[0].appendChild(slot);
}