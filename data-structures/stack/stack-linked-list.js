// stack (LIFO)

// method -> description
// ===================================
// push -> add item to stack
// pop -> remove last added item
// peek -> retrieve last added item
// ===================================

// linked-list implementation

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	push(data) {
		const newNode = new Node(data);

		if (!this.length) {
			this.first = newNode;
			this.last = this.first;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.length) return undefined;

		let poppedNode;

		if (this.length === 1) {
			poppedNode = this.last;
			this.first = null;
			this.last = null;
		} else {
			poppedNode = this.last;

			let current, i;
			current = this.first;
			i = 0;
			while (i < this.length - 2) {
				current = current.next;
				i++;
			}

			this.last = current;
			this.last.next = null;
		}

		this.length--;
		return poppedNode;
	}

	peek() {
		if (!this.length) return undefined;
		return this.last;
	}
}
