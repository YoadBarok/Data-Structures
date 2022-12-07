import { CustomNode } from "./CustomNode";

export class LinkedList {

    head: CustomNode | undefined;

    constructor() {
        this.head = undefined;
    }


    prepend(val: number): void {
        this.head = new CustomNode(val, this.head);
    }

    append(val: number): void {
        if (!this.head) {
            this.head = new CustomNode(val);
        }

        let current: CustomNode | undefined = this.head;
        while (current && current.getNext()) {
            current = current.getNext();
        }
        if (current) {
            current.setNext(new CustomNode(val));
        }
    }

    insertAfter(targetVal: number, newVal: number): void {
        let current = this.head;
        while (current && current.getVal() !== targetVal) {
            current = current.getNext();
        }
        if (current) {
            current.setNext(new CustomNode(newVal, current.getNext()));
        }
    }

    find(val: number): CustomNode | "Not Found!" {
        let current = this.head;

        while (current && current.getVal() !== val) {
            current = current.getNext();
        }
        if (current) {
            return current;
        }
        return "Not Found!";
    }

    remove(val: number): void {
        let current = this.head;
        let previous: CustomNode | undefined;

        while (current && current.getVal() !== val) {
            previous = current;
            current = current.getNext();
        }
        if (current) {
            if (!previous) {
                this.head = current.getNext();
            } else if (current) {
                previous.setNext(current.getNext());
                current.setNext(undefined);
            }
        }
    }

    countNodes(): number {
        let count = 0;
        let current = this.head;

        if (!current) return 0;

        while (current && current.getNext()) {
            current = current.getNext();
            count++;
        }
        return count;
    }

    reverse(): void {
        let current = this.head;

        let previousNode: CustomNode | undefined,
            nextNode: CustomNode | undefined;

        while (current) {
            nextNode = current.getNext();
            current.setNext(previousNode);
            previousNode = current;
            current = nextNode;
        }
        this.head = previousNode;
    }

    copy(): LinkedList {

        let current = this.head;

        const copiedList = new LinkedList();
        copiedList.head = current;
        let copyCurrent = current;

        while (current && current.getNext()) {
            let nextNode = current.getNext();
            copyCurrent?.setNext(nextNode);
            copyCurrent = nextNode;
            current = current.getNext();
        }
        return copiedList;
    }

    represent(): string {
        let nodes: number[] = [];
        let current: CustomNode | undefined = this.head;

        while (current) {
            nodes.push(current.getVal());
            current = current.getNext();
        }

        return `[${nodes.join(" -> ")}]`;
    }

}
