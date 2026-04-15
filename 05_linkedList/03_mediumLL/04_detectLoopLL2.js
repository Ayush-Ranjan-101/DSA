// leetcode - 142

const detectCycle = function  (head) {
    let fast = head;
    let slow = head;

    // Move fast pointer 2 steps and slow pointer 1 step. If both meet,
    // a cycle is guaranteed to exist
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;  // cycle detected
    }

    // If the loop ended as fast reached the end, there is no cycle
    if (fast === null || fast.next === null) return null;

    // Mathematically, the distance from the head to the cycle start is equal
    // to the distance from the meeting point (where fast === slow) to the
    // cycle start.

    // Reset fast to head and slow remains at the meeting point
    fast = head;

    // Move both pointers 1 step at a time, both will meet at the node where the 
    // cycle begins
    while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }

    // Can also return slow as both of them point to the same node
    return fast;
}
// Time complexity - O(n), n - length of the linked list
// Space complexity - O(1), constant space
