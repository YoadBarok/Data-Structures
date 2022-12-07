import { LinkedList } from "./LinkedList/LinkedList";

const myList = new LinkedList();

myList.prepend(1);
myList.append(2);
myList.prepend(3);
myList.insertAfter(1, 4);
console.log(myList.represent());

let copiedList = myList.copy();
console.log(copiedList.represent());
copiedList.reverse();
console.log(copiedList.represent());
copiedList.find(4);



