// gfg (https://www.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/0)

const findPairsWithGivenSum = function  (head, target) {
    let result = [];
    let tail = null;

    let curr = head;
    // Traverse to reach the last node
    while (curr.next !== null) {
        curr = curr.next;
    }

    tail = curr;

    // Condition to prevent pointers from crossing or moving past each other
    while (head !== tail && tail.next !== head) {
        let sum = head.data + tail.data;
        if (sum < target) {
            head = head.next;  // Move forward
        } else if (sum > target) {
            tail = tail.prev;  // Move backward
        } else { 
            // sum === target
            result.push([head.data, tail.data]);
            // Move towards the center
            head = head.next;
            tail = tail.prev;
        }
    }

    return result;
}
// Time complexity - O(n), n - length of DLL. Traversing the list
// Space complexity - O(n), If target is 0, sum of every pair is 0 
