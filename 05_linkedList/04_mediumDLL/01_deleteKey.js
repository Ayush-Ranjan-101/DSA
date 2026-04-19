// gfg (https://www.geeksforgeeks.org/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list/1)

const deleteAllOccurenceOfX = function  (head_ref, key) {
    // dummy to handle head_ref deletion
    let dummy = new Node(-1);
    dummy.next = head_ref;
    head_ref.prev = dummy;

    let last = dummy;
    let curr = head_ref;
    
    while (curr !== null) {
        // connect the nodes before and after if current node = key
        if (curr.data === key) {
            let nextNode = curr.next;
            last.next = nextNode;
            
            if (nextNode !== null) nextNode.prev = last

            curr = nextNode;
        } else {
            // simply continue
            last = curr;
            curr = curr.next;
        }
    }
    
    // detach the added dummy node
    let newHead = dummy.next;
    if (newHead !== null) newHead.prev = null;

    return newHead;
}
// Time complexity - O(n), n - length of list, traversing the list fully
// Space complexity - O(1), constant space
