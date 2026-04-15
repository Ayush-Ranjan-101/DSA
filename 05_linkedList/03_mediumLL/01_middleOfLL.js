// leetcode - 876
// * function ListNode(val, next) {
 // *     this.val = (val===undefined ? 0 : val)
 // *     this.next = (next===undefined ? null : next)
 // * }

const middleNode = function  (head) {
    let fast = head;
    let slow = head;
    // When fast traverses the full list , slow traverse half the list
    while (fast !== null && fast.next !== null) {
        // Moing fast by two nodes at a time, 2x speed
        fast = fast.next.next;
        // Moving slow by one node at a time, 1x speed
        slow = slow.next
    }

    return slow;
}
// Time complexity - O(n), n - length of the linked list
// Space complexity - O(1), constant space
