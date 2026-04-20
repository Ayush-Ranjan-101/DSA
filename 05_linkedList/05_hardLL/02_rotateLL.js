// leetcode - 61

const rotateRight = function  (head, k) {
    if(!head || !head.next) return head

    // Find length of list
    let curr = head
    let length = 0
    while(curr){
        length++
        curr = curr.next
    }

    // if k > length then reduce rotation, since k === 2 and k === 7 
    // result in same rotated lists
    k = k % length;
    if (k === 0) return head;
    
    let newTail = head;
    let oldTail = head;

    // sliding window : 
    for (let i = 0; i < k; i++) {
        oldTail = oldTail.next;
    }

    // Getting the first few nodes through sliding window
    while (oldTail.next) {
        oldTail = oldTail.next;
        newTail = newTail.next;
    }

    // Forming the new rotated list
    oldTail.next = head;
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
}
// Time complexity - O(n), n - length of list, traversing the list
// Space complexity - O(1), constant space
