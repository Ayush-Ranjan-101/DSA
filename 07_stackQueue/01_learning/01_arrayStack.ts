class Stack<T> {
    private array: T[];
    private capacity: number;
    private top: number = -1;

    constructor(size: number ,initialStack: T[] = []){
        this.capacity = size;
        this.array = new Array<T>(this.capacity);

        for (let i = 0; i < initialStack.length && i < size; i++) {
            const item = initialStack[i];
            if (item !== undefined) {
                this.array[i] = item;
            }
        }

        this.top = Math.min(initialStack.length, size) - 1;
    }

    public push (item: T): void {
        if (this.top + 1 >= this.capacity) return;
        this.top++;
        this.array[this.top] = item;
    }

    public pop (): T | undefined {
        if (this.top < 0) return undefined;
        const val = this.array[this.top];

        // Optional : clean up the refernce for garbage collection
        (this.array[this.top] as any) = undefined;

        this.top--;
        return val;
    }

    public peek (): T | undefined{
        if (this.top < 0) return undefined;
        return this.array[this.top];
    }

    public isEmpty (): boolean {
        return this.top < 0;
    }
}

const numStack = new Stack<number>(5);
console.log(numStack.push(12));
console.log(numStack.isEmpty());
console.log(numStack.peek());
console.log(numStack.pop());
console.log(numStack.peek());
console.log(numStack.isEmpty());
