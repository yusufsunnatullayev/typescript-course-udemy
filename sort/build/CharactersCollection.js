"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const sorter_1 = require("./sorter");
class CharactersCollection extends sorter_1.Sorter {
    data;
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex]?.toLowerCase() > this.data[rightIndex]?.toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characs = this.data.split("");
        const leftHand = characs[leftIndex];
        characs[leftIndex] = characs[rightIndex];
        characs[rightIndex] = leftHand;
        this.data = characs.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
//# sourceMappingURL=CharactersCollection.js.map