// Implement stack using linked list

class StackNode<T> {
    public value: T;
    public next: StackNode<T> | null;

    constructor(val: T) {
        this.value = val;
        this.next = null;
    }
}

class LinkedListStack<T> {
    private topNode: StackNode<T> | null = null;
    private _size: number = 0;

    public push(item: T) : void {
        const newNode = new StackNode<T>(item);

        newNode.next = this.topNode;
        this.topNode = newNode;

        this._size++;
    }

    public pop() : T | undefined {
        if (this.isEmpty()) return undefined;

        const val = this.topNode!.value;

        this.topNode = this.topNode!.next;

        this._size--;
        return val;
    }

    public isEmpty() : boolean {
        return this._size === 0;
    }

    public top() : T | undefined {
        if (this.isEmpty()) return undefined;

        return this.topNode!.value;
    }
}

const listStack = new LinkedListStack<number>();
console.log(listStack.push(3));
console.log(listStack.push(6));
console.log(listStack.push(9));
console.log(listStack.pop());
console.log(listStack.top());
console.log(listStack.pop());
console.log(listStack.pop());
console.log(listStack.pop());
