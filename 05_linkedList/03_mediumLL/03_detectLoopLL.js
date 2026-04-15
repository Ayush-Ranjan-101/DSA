// leetcode - 141

const hasCycle = function  (head) {
    let fast = head;
    let slow = head;

    // move fast pointer 2 steps and slow pointer 1 step. If they meet
    // cycle is detected
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return true // cycle detected
    }

    // If the loop ended because fast reached the end, there is no cycle
    return false;
}
// Time complexity - O(n), n - length of linked list
// Space complexity - O(1), constant space
