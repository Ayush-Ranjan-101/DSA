// leetcode - 20

const s = "([])"

const isValid = function (s: string): boolean {
    // Initialize a stack to keep track of the expected closing brackets
    const stack: string[] = [];
    
    // Iterate through each character in the string
    for (const ch of s) {
        // If we encounter an opening bracket, push its corresponding 
        // closing bracket onto the stack. This makes matching easier later
        if (ch === "(") {
            stack.push(")");
        } else if (ch === "[") {
            stack.push("]");
        } else if (ch === "{") {
            stack.push("}");
        } 
        // If it's a closing bracket, we check two things:
        // Is the stack empty? (Means we have a closing bracket with no opening partner)
        // Does the top of the stack match the current closing bracket?
        else if (stack.length === 0 || stack.pop() !== ch) {
            return false; // Invalid structure found, exit immediately
        }
    } 

    // If the stack is empty, all brackets were correctly matched and closed
    // If items remain in the stack, it means some brackets were left open
    return stack.length === 0; 
};
// Time complexity - O(n), tarversing the string
// Space complexity - O(n), precisely O(n/2) as ({[]}) where the string consists 
// entirely of opening brackets, the stack will grow to a maximum size of n/2.
// In Big O notation, we drop constants so O(n)

console.log(isValid(s));
