"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
// Number Sort🚩
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, -2, 23, 5, -7, 45]);
numbersCollection.sort();
console.log(numbersCollection.data);
// String Sort🚩
const characsCollection = new CharactersCollection_1.CharactersCollection("Yusuf Sunnatullayev");
characsCollection.sort();
console.log(characsCollection.data);
// LinkedList Sort🚩
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
console.log(linkedList.print());
//# sourceMappingURL=index.js.map