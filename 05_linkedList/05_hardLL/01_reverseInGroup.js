// leetcode - 25

const reverse = function  (head, tailNext) {
    let prevNode = null;
    let curr = head;

    while (curr !== tailNext) {
        let nextNode = curr.next;

        curr.next = prevNode;
        
        prevNode = curr;
        curr = nextNode;
    }
}

const reverseKGroup = function  (head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(-1, head);
    let prevGroupTail = dummy;

    while (true) {
        let groupStart = prevGroupTail.next;
        let groupEnd = prevGroupTail;

        // Check if k nodes exist
        for (let i = 1; i <= k; i++) {
            groupEnd = groupEnd.next;

            // k pairs don't exist so return head of the list
            if (groupEnd === null) return dummy.next;
        }

        // Pointer for the next group
        let nextGroupStart = groupEnd.next;

        reverse(groupStart, nextGroupStart);

        // Connect the reversed set nodes
        prevGroupTail.next = groupEnd;
        groupStart.next = nextGroupStart;
        prevGroupTail = groupStart;
    }
}
// Time complexity - O(n), n - length of list 
// traversing each node twice(not nested)
// Space complexity - O(1)
