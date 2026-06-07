// gfg (https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1)

const s = "a+b*(c^d-e)";
// abcd^e-*+

const infixToPostfix = function  (s: string) : string {
    const stack : string[] = [];
    const result : string[] = [];

    // Defince operator precedence
    const prec = (ch: string): number => {
        if (ch === '+' || ch === '-') return 1;
        if (ch === '*' || ch === '/') return 2;
        if (ch === '^') return 3; // Handling exponentiation
        return 0; // For '(' and boundaries
    };

    for (const ch of s) {
        // If an operand, push to result
        if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") ||
        (ch >= "0" && ch <= "9")) {
            result.push(ch);
        // If openning parenthesis, push to stack
        } else if (ch === "(") {
            stack.push(ch);
        }
        // If a closing parenthesis, push the operators within those parenthesis
        // to result
        else if (ch === ")") {
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                result.push(stack.pop()!);
            }

            if (stack.length > 0) {
                stack.pop();
            }
        }
        // If operator, push the operators with lower or equal precedence 
        // to result
        else {
            while (stack.length > 0 && prec(ch) <= prec(stack[stack.length - 1]!)) {
                result.push(stack.pop()!);
            }
            stack.push(ch);
        }
    }

    // push any remaining operators left in the stack
    while (stack.length > 0) {
        result.push(stack.pop()!);
    }

    return result.join("");
}
// For loop - O(n)
// Nested while loops only process characters that are already sitting 
// on the stack.
// Because an element can only be pushed onto the stack once and popped
// from the stack once, the total number of operations across all executions
// of the while loops combined is bounded by n.
// Time complexity - O(n)
//
// Space complexity - O(n)

console.log(infixToPostfix(s));
