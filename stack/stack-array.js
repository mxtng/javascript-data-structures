// stack (LIFO)

// method -> description
// ===================================
// push -> add item to stack
// pop -> remove last added item
// peek -> retrieve last added item
// ===================================

// array implementation
class Stack {
	constructor() {
		this.stack = [];
		this.length = 0;
	}

	push(data) {
		this.stack.push(data);
		this.length++;
		return this;
	}

	pop() {
		if (!this.length) return;
		this.length--;
		return this.stack.pop();
	}

	peek() {
		return this.stack(this.length - 1);
	}
}
