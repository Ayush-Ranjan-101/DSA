class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function main () {
    let arr = [2, 5, 8, 7];

    let head = null;
    for (const num of arr) {
        let y = new Node(num, head);
        head = y;
    }

    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}

main();
