// leetcode - 206
 // * function ListNode(val, next) {
 // *     this.val = (val===undefined ? 0 : val)
 // *     this.next = (next===undefined ? null : next)
 // * }

const reverseList = function  (head) {
    // prev represents the new .next for the current node
    let prev = null;
    // curr presents the current node whose .next needs to be reversed
    let curr = head;
    // nxt preserver the next node to move to
    let nxt = head.next;

    // nxt being the first pointer, will go null first
    while (nxt !== null) {
        curr.next = prev;

        prev = curr;
        curr = nxt;
        nxt = nxt.next;
    }
    // changing .next for the last node
    curr.next = prev;

    return curr;
}
// Time complexity - O(n), n - length of linked list 
// Space complexity - O(1), constant space
