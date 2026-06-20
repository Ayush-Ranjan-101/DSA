// leetcode - 402

const num = "1432219", k = 3;

// Here I am using stack as an array too since it is ts. If language does 
// allow you to do the same. Use linked list as a stack with head and tail pointer
const removeKdigits = function  (num: string, k: number): string {
    if (k === num.length) return "0";

    const stack: string[] = [];

    // Using monotonic stack removing greater elements in the beginning
    for (const char of num) {
        while (k > 0 && stack.length > 0 && char < stack[stack.length - 1]!) {
            stack.pop();
            k--;
        }

        stack.push(char);
    }

    // the stack is in ascending order so removing k elements from 
    // the top will give smaller element
    while (k > 0 && stack.length > 0) {
        stack.pop();
        k--;
    }

    // Remove leading zeros of string number
    let startIdx = 0;
    while(stack[startIdx] === "0") {
        startIdx++;
    }

    // Construct the string digit from the array
    let res = stack.join("").substring(startIdx);

    return res === "" ? "0" : res;
}
// n - length of num
// Time complexity - O(n), travering num
// The while loop inside the forof might seem like it adds extra work, but each 
// character is pushed onto the stack at most once and popped at most once. 
// The total work done by the while loop across the entire execution
// is strictly bounded by n.
// .join().substring() methods also take linear time O(n)
//
// Space complexity - O(n), if num is in ascending order we will push 
// all the elements in the stack

console.log(removeKdigits(num, k));
