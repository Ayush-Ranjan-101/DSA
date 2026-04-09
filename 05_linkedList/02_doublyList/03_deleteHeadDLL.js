// gfg (https://www.geeksforgeeks.org/problems/delete-head-of-doubly-linked-list/1)

// function ListNode(val) {
//     this.prev = null;
//     this.val = val;
//     this.next = null;
// }

const deleteHead = function  (head) {
    // get the node after head 
    const nextNode = head.next;

    // free the next pointer of head
    head.next = null;
    // free the prev pointer of new head
    nextNode.prev = null;

    return nextNode;
}
