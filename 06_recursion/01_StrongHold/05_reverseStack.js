// gfg (https://www.geeksforgeeks.org/problems/reverse-a-stack/1)

const st  = [];
st.push(4);
st.push(3);
st.push(2);
st.push(1);

// recursively reaching the bottom and inserting the elment
const insertAtBottom = function  (st, val) {
    // Base case: If the stack is empty, push the value.
    if (st.length === 0) {
        st.push(val);
        return;
    }

    // Remove the top element and hold it in the function's scope
    const element = st.pop();

    // call insertAtBottom again for now smaller stack
    insertAtBottom(st, val);

    // After the value is inserted at the bottom,
    // push the held element back on top
    st.push(element);
}

const reverseStack = function  (st) {
    // An empty stack is already reversed
    if (st.length === 0) return;

    // Remove the top element and hold it
    const element = st.pop();

    reverseStack(st);

    // Insert each poped element at the bottom of the stack instead
    // of the top to reverse it
    insertAtBottom(st, element);
}
// n - no. of elements in the stack
// Time compleixty - O(n^2), Each n element requires n shifts to reach the bottom 
// Space compleixty - O(n), Due to recurice call stack, that is proportional to n

console.log(st);
reverseStack(st);
console.log(st);
