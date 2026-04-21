// gfg (https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1)

const merge = function  (head1, head2) {
    if (!head1) return head2;
    if (!head2) return head1;

    let dummy = new Node(-1);
    let curr = dummy;

    // merging two nodes with thier bottom elements, if there is any
    while (head1 && head2) {
        if (head1.data < head2.data) {
            curr.bottom = head1;
            head1 = head1.bottom;
        } else {
            curr.bottom = head2;
            head2 = head2.bottom;
        }

        curr = curr.bottom;
        // cleaning up horizontail pointers to avoid ghost branch
        curr.next = null;
    }

    // Attach remaining nodes (they are already sorted)
    if (head1) curr.bottom = head1;
    else curr.bottom = head2;

    // the very last node can be head1/head2 if one had all elements smaller
    // than the head of the other bottom list.
    // Ensure the last node does not point ot any thing
    if (curr.bottom) curr.bottom.next = null;

    return dummy.bottom;
}

const flatten = function  (root) {
    // If root is null or we reach the last node return that node
    if (!root || !root.next) return root;

    // Recursively reach the end of the horizontal list
    let rightFlattened = flatten(root.next);
    
    // Merge this node along with its bottom, with the flattend 
    // result from the right
    return merge(root, rightFlattened);
}
// Time complexity - O(N*M), N - horizontail nodes, M - vertical nodes 
// Space complexity - O(1), constant space or O(N) - Due to recursion stack
