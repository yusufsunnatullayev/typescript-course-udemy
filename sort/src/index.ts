import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

// Number Sort🚩
const numbersCollection = new NumbersCollection([10, -2, 23, 5, -7, 45]);
numbersCollection.sort();
console.log(numbersCollection.data);

// String Sort🚩
const characsCollection = new CharactersCollection("Yusuf Sunnatullayev");
characsCollection.sort();
console.log(characsCollection.data);

// LinkedList Sort🚩
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
console.log(linkedList.print());
