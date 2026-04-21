// leetcode - 138

const copyRandomList = function  (head) {
    if (!head) return null;

    const map = new Map();

    // Create all replica nodes
    let curr = head;
    while (curr) {
        const replica = new _Node(curr.val, null, null);
        map.set(curr, replica);
        curr = curr.next;
    }

    // Connect the next and random pointers
    curr = head;
    while (curr) {
        const replica = map.get(curr);

        // Using || null to handle undefined from map, when .next/.random = null
        replica.next = map.get(curr.next) || null;
        replica.random = map.get(curr.random) || null;

        curr = curr.next;
    }

    return map.get(head);
}
// Time complexity - O(n), n - length/no.of nodes in list 
// Space complexity - O(n), constant space
