export class CustomNode {

    private val: number;
    private next: CustomNode | undefined;

    constructor(val: number, next?: CustomNode) {
        this.val = val;
        this.next = next;
    }

    represent(): number {
        return this.val;
    }

    getVal(): number {
        return this.val;
    }

    getNext(): CustomNode | undefined {
        return this.next;
    }

    setVal(newValue: number): void {
        this.val = newValue;
    }

    setNext(newNode: CustomNode | undefined): void {
        this.next = newNode;
    } 

}