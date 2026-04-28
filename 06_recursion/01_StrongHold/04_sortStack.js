// gfg (https://www.geeksforgeeks.org/problems/sort-a-stack/1)

let stack = [];
stack.push(41);
stack.push(3);
stack.push(32);
stack.push(2);
stack.push(11);

const insertionSort = function  (st, val) {
    // Inserting if stack becomes empty or 
    // smaller element found(since stack is sorted)
    if (st.length === 0 || st[st.length - 1] < val) {
        st.push(val);
        return;
    }
    
    const element = st.pop();

    // Going deeper in the stack to find the right place
    insertionSort(st, val);

    st.push(element);
}

// Recursively remove all the elements and inserting them in there right position
const sortStack = function  (st) {
    if (st.length === 0) return;

    // Removing elements from the stack
    const element = st.pop();

    sortStack(st);

    // Inserting removed elemens in there right place through backtracking
    insertionSort(st, element);
}
// Time complexity - O(n^2), Each of the n elements may require n shifts 
// to find its right place 
// Space complexity - O(n), the maximum depth of the recursive call stack 
// is proportonal to the number of elements. Both sortStack and rightPlace
// together hold all the elements of st recursively

console.log(stack);
console.log(sortStack(stack));
console.log(stack);
