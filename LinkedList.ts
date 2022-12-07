import { CustomNode } from "./CustomNode";

export class LinkedList {

    head: any;

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

        let current = this.head;
        while (current.getNext()) {
            current = current.getNext();
        }

        current.next = new CustomNode(val);
    }

    insertAfter(targetVal: number, newVal: number): void {
        let current = this.head;
        while (current && current.getVal() !== targetVal) {
            current = current.getNext();
        }
        if (current) {
            current.setNext(new CustomNode(newVal, current.next));
        }
    }
    
    find(val: number): CustomNode {
        let current = this.head;
        
        while (current && current.getVal() !== val) {
            current = current.getNext();
        }
        console.log(current.val);
        

        return current || "Not found!";
    }
    
    remove(val: number): void {
        let current = this.head;
        let previous: CustomNode | undefined;
        
        while (current && current.getVal() !== val) {
            previous = current;
            current = current.getNext();
        }
        
        if (!previous) {
            this.head = current.getNext();
        } else if (current) {
            previous.setNext(current.next);
            current.setNext(undefined);
        }
    }

    countNodes(): number {
        let count = 0;
        let current = this.head;
        
        if (!current) return 0;

        while (current.getNext()) {
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
        copiedList.head = new CustomNode(current.getVal());
        let copyCurrent = copiedList.head;
        
        while (current && current.getNext()) {
            copyCurrent.setNext(new CustomNode(current.next.val));
            copyCurrent = copyCurrent.getNext();
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
