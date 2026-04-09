class Node {
    constructor(prev = null, data, next = null) {
        this.prev = prev
        this.data = data;
        this.next = next;
    }
}

function main () {
    let arr = [2, 5, 8, 7];

    let head = null, tail = null;
    for (const num of arr) {
        let newNode = new Node(tail, num, null);

        if (head === null) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }

    console.log("/n")

    current = tail;
    while (current !== null) {
        console.log(current.data);
        current = current.prev;
    }
}

main();
