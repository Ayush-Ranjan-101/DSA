// Implement queue using linked list

class QueueNode<T> {
    public value: T;
    public next: QueueNode<T> | null;

    constructor(val: T) {
        this.value = val;
        this.next = null;
    }
}

class LinkedListQueue<T> {
    private headNode: QueueNode<T> | null = null;
    private tailNode: QueueNode<T> | null = null;
    private _size: number = 0;

    public push(item: T) : void {
        const newNode = new QueueNode<T>(item);
        this._size++;

        if (this.headNode === null) {
            newNode.next = this.headNode;
            this.headNode = newNode;
            this.tailNode = newNode;
            return;
        }

        this.tailNode!.next = newNode;
        this.tailNode = newNode;
    }

    public pop() : T | undefined {
        if (this.isEmpty()) return undefined;

        const val = this.headNode?.value;
        this.headNode = this.headNode!.next;

        this._size--;

        return val;
    }

    public isEmpty() : boolean {
        return this._size === 0;
    }

    public peek() : T | undefined {
        if (this.isEmpty()) return undefined;
        return this.headNode?.value;
    }
}

const q = new LinkedListQueue<number>();
console.log(q.isEmpty());
console.log(q.push(4));
console.log(q.push(8));
console.log(q.push(12));
console.log(q.pop());
console.log(q.isEmpty());
console.log(q.peek());
