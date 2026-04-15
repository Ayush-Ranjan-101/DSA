// leetcode - 234

const isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // 1. Find the middle (Slow will be at the start of the second half)
    let fast = head, slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // 2. If the list is odd, move slow one more step
    // (The middle node in an odd list doesn't need to be compared)
    if (fast !== null) {
        slow = slow.next;
    }

    // 3. Reverse the SECOND half (starting from 'slow')
    let prev = null, curr = slow;
    while (curr !== null) {
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }

    // 4. Compare the first half and the reversed second half
    let head1 = head; // Start of first half
    let head2 = prev; // Start of reversed second half
    
    while (head2 !== null) {
        if (head1.val !== head2.val) return false;
        head1 = head1.next;
        head2 = head2.next;
    }

    return true;
};
// Time complexity - O(n), n - length of linked list
// Space complexity - O(1)
