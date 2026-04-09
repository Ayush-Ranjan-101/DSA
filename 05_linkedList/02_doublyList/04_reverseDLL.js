// gfg (https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1)

// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

const reverse = function  (head) {
    // base case Number of nodes = 1
    if (head.next === null) return head;

    // Initialize three pointer to track current. previous and next 
    let prev = null, curr = head, nxt = head.next;

    while (nxt !== null) {
        // reverse the next and prev pointer for the current node
        curr.next = prev;
        curr.prev = nxt;

        // Move all three pointers to one step formard
        prev = curr;
        curr = nxt;
        nxt = nxt.next;
    }
    // Updation for the last node
    curr.next = prev;
    curr.prev = nxt;

    return curr;
}
