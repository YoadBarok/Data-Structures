import { BinarySearchTreeNode } from "./BinarySearchTreeNode";

export class BinartySearchTree<T> {
    root?: BinarySearchTreeNode<T>;
    comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }

    insert(data: T): BinarySearchTreeNode<T> | undefined {
        // if the tree is empty we set the root to a new node with data's value and return it:
        if (!this.root) {
            this.root = new BinarySearchTreeNode(data);
            return this.root;
        }

        let current = this.root;

        while (true) {
            // if the data value is bigger than the current node's data:
            if (this.comparator(data, current.data) === 1) {
                // if the current node has a child node with a bigger value:
                if (current.rightNode) {
                    // continue moving down the right side of the tree:
                    current = current.rightNode;
                }
                // we reached the largest value before data:
                else {
                    // set the current node's right node to a new node with the data value and return that node:
                    current.rightNode = new BinarySearchTreeNode(data);
                    return current.rightNode;
                }
            }
            // if the data value is smaller than the current node's data:
            else {
                // if the current node has a child node with a smaller value:
                if (current.leftNode) {
                    // continue moving down the left side of the tree:
                    current = current.leftNode;
                }
                // we reached the smallest value before data:
                else {
                    // set the current node's left node to a new node with the data value and return that node:
                    current.leftNode = new BinarySearchTreeNode(data);
                    return current.leftNode;
                }
            }
        }
    }

    search(data: T): BinarySearchTreeNode<T> | undefined {
        if (!this.root) return undefined;

        let current = this.root;

        // break whean the node with the requested data is found:
        while (this.comparator(data, current.data) !== 0) {
            // if the requested data value is bigger than the current node's data:
            if (this.comparator(data, current.data) === 1) {
                // check if there are nodes with bigger values and if not return:
                if (!current.rightNode) return;
                // move further down to the right side of the tree:
                current = current.rightNode;
            }
            // if the requested data value is smaller than the current node's data:
            else {
                // check if there are nodes with smaller values and if not return:
                if (!current.leftNode) return;
                // move further down the left side of the tree:
                current = current.leftNode;
            }
        }
        // finally once the current node's data is equal to the required data, return the current node:
        return current;
    }

    inOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            this.inOrderTraversal(node.leftNode);
            console.log(node.data);
            this.inOrderTraversal(node.rightNode);
        }
    }

    preOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.leftNode);
            this.preOrderTraversal(node.rightNode);
        }
    }

    postOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            this.postOrderTraversal(node.leftNode);
            this.postOrderTraversal(node.rightNode);
            console.log(node.data);
        }
    }
    
}


