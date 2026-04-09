// gfg (https://www.geeksforgeeks.org/problems/linked-list-insertion-at-beginning/1)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// solution
const insertAtFront = function  (head, x) {
    // create a new node
    const newHead = new Node(x);
    // point the next of the new node to head
    newHead.next = head;

    return newHead;
}

const main = function  () {
    let arr = [5, 4, 3, 2, 1];
    
    let head = null;
    for (const num of arr) {
        const node = new Node(num);
        node.next = head;
        head = node;
    }

    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }

    console.log("\n");
    let newHead = insertAtFront(head, 6);

    current = newHead;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}

main();
