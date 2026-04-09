// leetcode - 237

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const deleteNode = function  (node) {
    // get the next node since given can't be last
    nextnode = node.next;

    // copy the next node value
    node.val = nextnode.val;
    // copy the next node pointer
    node.next = nextnode.next;

    // now the next node is gone, while its data is copied in the given node 
    // we are not deleting the given node itself but it's data
}
