// Implement stack using single queue

// .push - adds to the end   .shift removes from the front
class StackUsingQueue<T> {
    private queue: T[];

    constructor() {
        this.queue = new Array<T>();
    }

    public push(item: T): void {
        const currentSize = this.queue.length;

        this.queue.push(item);

        for (let i = 0; i < currentSize; i++) {
            const rolledElement = this.queue.shift();
            if (rolledElement !== undefined) {
                this.queue.push(rolledElement);
            }
        }
    }

    public pop (): T | undefined {
        if (this.isEmpty()) return undefined;
        return this.queue.shift();
    }

    public top(): T | undefined {
        if (this.isEmpty()) return undefined;
        return this.queue[0];
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    size(): number {
        return this.queue.length;
    }
}
