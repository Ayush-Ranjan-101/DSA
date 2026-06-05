class Queue<T> {
    private array: T[];
    private capacity: number;
    private lastIdx: number = -1;

    constructor (size: number, initialQueue: T[] = []) {
        this.capacity = size;
        this.array = new Array<T>(size);

        for (let i = 0; i < initialQueue.length && i < size; i++) {
            const item = initialQueue[i];
            if (item !== undefined) {
                this.array[i] = item;
            }
        }

        this.lastIdx = Math.min(initialQueue.length, size) - 1;
    }

    public push(item: T): void {
        if (this.lastIdx + 1 >= this.capacity) return;
        this.lastIdx++;
        this.array[this.lastIdx] = item;
    }

    public pop(): T | undefined {
        if (this.isEmpty()) return undefined;
        const item = this.array[0];

        for (let i = 0; i < this.lastIdx; i++) {
            const nextItem = this.array[i + 1];
            if (nextItem !== undefined) {
                this.array[i] = nextItem;
            }
        }

        // Clean up last item and decrement
        (this.array[this.lastIdx] as any) = undefined;
        this.lastIdx--;

        return item;
    }

    public peek(): T | undefined {
        if (this.isEmpty()) return undefined;
        return this.array[0];
    }

    public isEmpty(): boolean {
        return this.lastIdx < 0;
    }
}

const q = new Queue<number>(3);
console.log(q.isEmpty());
console.log(q.push(2));
console.log(q.push(4));
console.log(q.push(8));
console.log(q.isEmpty());
console.log(q.pop());
