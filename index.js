class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    size() {
        let nodeNow = this.head;
        let counter = 0;

        while (nodeNow) {
            counter++;
            nodeNow = nodeNow.nextNode;
        }
        return counter;
    }

}

const linkedList = new LinkedList();

// Test append function
linkedList.append(1);
linkedList.append(2);
linkedList.append(7);

console.log(linkedList.head.value); 
console.log(linkedList.head.nextNode.value); 
console.log(linkedList.head.nextNode.nextNode.value);

// Test prepend function
linkedList.prepend(1);
linkedList.prepend(2);
linkedList.prepend(7);

console.log(linkedList.head.value); 
console.log(linkedList.head.nextNode.value); 
console.log(linkedList.head.nextNode.nextNode.value);

// Test size function
let listSize = linkedList.size();
console.log(listSize);
