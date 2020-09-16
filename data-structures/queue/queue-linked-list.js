// queue (FIFO)

// method -> description
// ===================================
// enqueue -> add item to queue
// dequeue -> remove first added item
// first -> retrieve first in queue
// last -> retrieve last in queue
// ===================================

// linked list implementation
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	enqueue(data) {
		const newNode = new Node(data);

		if (!this.length) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return;
	}

	dequeue() {
		if (!this.length) return undefined;

		const removedNode = this.head;
		this.head = this.head.next;
		this.length--;
		return removedNode.data;
	}

	first() {
		if (!this.length) return undefined;
		return this.head.data;
	}

	last() {
		if (!this.length) return undefined;
		return this.tail.data;
	}
}
