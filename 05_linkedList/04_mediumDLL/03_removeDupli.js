// gfg (https://www.geeksforgeeks.org/problems/remove-duplicates-from-a-sorted-doubly-linked-list/1)

const removeDuplicates = function  (head) {
    let prevNode = head;
    let curr = head.next;

    while (curr !== null) {
        // Connect the prevNode with the node after current node
        if (prevNode.data === curr.data) {
            let nextNode = curr.next;
            prevNode.next = nextNode;

            if (nextNode !== null) nextNode.prev = prevNode;

            curr = nextNode;
        } else {
            // Simply move formard
            prevNode = curr;
            curr = curr.next;
        }
    }

    return head;
}
// Time complexity - O(n), n - length of DLL, traversing the list
// Space complexity - O(1), constant space
