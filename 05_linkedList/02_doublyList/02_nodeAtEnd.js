// no where found

// function ListNode(val) {
//     this.prev = null;
//     this.val = val;
//     this.next = null;
// }

const insertAtEnd = function  (head, node) {
    let current = head;
    // get to the last node
    while (current.next !== null) {
        current = current.next;
    }

    // assign prev and next accordingly
    node.prev = current;
    current.next = node;

    return head;
}
