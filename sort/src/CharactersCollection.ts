import { Sorter } from "./sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex]?.toLowerCase() > this.data[rightIndex]?.toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characs = this.data.split("");
    const leftHand = characs[leftIndex];
    characs[leftIndex] = characs[rightIndex];
    characs[rightIndex] = leftHand;

    this.data = characs.join("");
  }
}
