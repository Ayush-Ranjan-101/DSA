// gfg (https://www.geeksforgeeks.org/problems/search-in-linked-list-1664434326/1)

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

const searchKey = function  (head, key) {
    let current = head;

    // Iterating over the entire linked list to find key
    while (current !== null) {
        if (current.data === key) return true;
        current = current.next;
    }

    return false;
}
