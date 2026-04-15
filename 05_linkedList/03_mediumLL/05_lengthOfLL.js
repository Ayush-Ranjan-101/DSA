// gfg (https://www.geeksforgeeks.org/problems/find-length-of-loop/1)

const lengthofLoop = function  (head) {
    // Move fast 2 steps and slow 1 step
    let fast = head, slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break; // loop detected
    }

    // If fast reaches null means no cycle, return 0
    if (fast === null || fast.next === null) return 0;

    // counts no.of nodes in cycle
    let noOfNodes = 0;

    // traverse over the cycle with fast to count the no.of nodes
    do {
        fast = fast.next;
        noOfNodes++;
    } while (fast !== slow);

    return noOfNodes;
}
// Time complexity - O(n), n - length of linked list
// Space complexity - O(1), constant space
