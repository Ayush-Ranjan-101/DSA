// gfg (https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1)

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

const getCount = function  (head) {
    let current = head;
    let count = 0;

    // for every node passing count increases
    while(current !== null) {
        count++;
        current = current.next;
    }

    return count;
}
