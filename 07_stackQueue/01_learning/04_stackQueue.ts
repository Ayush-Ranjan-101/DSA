// Implement Queue using stack


class QueueUsingStack<T> {
    private stackOut: T[];
    private stackIn: T[];

    constructor () {
        this.stackOut = [];
        this.stackIn = [];
    }

    public push(item: T) : void {
        this.stackIn.push(item);
    }

    public pop() : T | undefined {
        if (this.isEmpty()) return undefined;

        this.shiftStacks();

        // Stack.pop();
        return this.stackOut.pop();
    }

    public peek() : T | undefined {
        if (this.isEmpty()) return undefined;
        
        this.shiftStacks();

        // Stack.top();
        return this.stackOut[this.stackOut.length - 1];
    }

    public isEmpty() : boolean {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }

    // Reverse the stack using another stack
    private shiftStacks(): void {
        if (this.stackOut.length === 0) {
            while(this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop()!);
            }
        }
    }
}
