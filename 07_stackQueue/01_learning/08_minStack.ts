// leetcode - 155

// Tracking the current min element so far and storing then along the curr elements
type set = {
    value: number;
    min: number;  // keeps track of the minimum
}

class MinStack {
    private stack: set[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        const currentMin = this.stack.length > 0 
            ? Math.min(val, this.stack[this.stack.length - 1]!.min)
            : val;
            
        this.stack.push({
            value: val,
            min: currentMin
        });
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1]!.value;
    }

    getMin(): number {
        return this.stack[this.stack.length - 1]!.min;
    }
}
// Time complexity - O(1), push(), pop(), top() and getMin()
// Space complexity - O(n), storing all the sets
