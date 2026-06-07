// gfg (https://www.geeksforgeeks.org/problems/infix-to-prefix-notation/1)

const s = "a*(b+c)/d";
// /*a+bcd

const infixToPrefix = function  (s: string): string {
    let stack: string[] = [];
    let result: string[] = [];

    // Defince operator precedence
    const prec = (ch: string): number => {
        if (ch === '+' || ch === '-') return 1;
        if (ch === '*' || ch === '/') return 2;
        if (ch === '^') return 3; // Handling exponentiation
        return 0; // For ')' and boundaries
    };

    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i]!;

        if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") ||
        (ch >= "0" && ch <= "9")) {
            result.push(ch);
        } else if (ch === ")") {
            stack.push(ch);
        } else if (ch === "(") {
            while(stack.length > 0 && stack[stack.length - 1] !== ")") {
                result.push(stack.pop()!);
            }

            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            while (stack.length > 0 && (ch === '^' 
            ? prec(ch) <= prec(stack[stack.length - 1]!) 
            : prec(ch) < prec(stack[stack.length - 1]!))) {
                result.push(stack.pop()!);
            }
            stack.push(ch);
        }
    }

    while (stack.length > 0) {
        result.push(stack.pop()!);
    }

    return result.reverse().join("");
}
// Time complexity : O(n)
// Space complexity : O(n)

console.log(infixToPrefix(s));
