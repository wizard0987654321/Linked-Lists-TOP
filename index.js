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

    headMethod() {
        return this.head.value;
    }

    tailMethod() {
        return this.tail.value;
    }

    at(index) {
        let nodeNow = this.head;

        for(let i = 0; i < index; i++) {
            nodeNow = nodeNow.nextNode;
        }

        return nodeNow;
    }

    pop() {
    
        let currentNode = this.head;
        let prevNode = null;
    
        while (currentNode.nextNode) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        if (!prevNode) {
            this.head = null;
        } else {
            prevNode.nextNode = null;
        }
    
        this.tail = prevNode;
    
        return currentNode.value;
    }

    contains(par) {
        let nodeNow = this.head;
        while(nodeNow) {
            if (nodeNow.value == par) {
                return true;
            }
            nodeNow = nodeNow.nextNode;
        }
        return false;
    }

    find(par) {
        let nodeNow = this.head;
        let counter = 0;

        while(nodeNow) {
            if (nodeNow.value == par) {
                return counter;
            }
            nodeNow = nodeNow.nextNode;
            counter++;
        }
        return null;
    }

    toString() {
        let currentNode = this.head;
        let result = '';
    
        while (currentNode) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
    
        result += 'null';
    
        return result;
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

// Test head function
let listHead = linkedList.headMethod();
console.log(listHead);

// Test tail function
let listTail = linkedList.tailMethod();
console.log(listTail);

// Test at function
let nodeAt = linkedList.at(1);
console.log(nodeAt.value);

// Test pop function
console.log(linkedList.pop());

// Test contains function
console.log(linkedList.contains(2));
console.log(linkedList.contains(9));

// Test find function
console.log(linkedList.find(1));
console.log(linkedList.find(9));

// Test toString function
console.log(linkedList.toString());