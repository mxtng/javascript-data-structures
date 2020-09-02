// queue (FIFO)

// method -> description
// ===================================
// enqueue -> add item to queue
// dequeue -> remove first added item
// first -> retrieve first in queue
// last -> retrieve last in queue
// ===================================

// array implementation
class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(data) {
		this.queue.unshift(data);
		return this.queue;
	}

	dequeue() {
		return this.queue.pop();
	}

	first() {
		return this.queue[this.queue.length - 1];
	}

	last() {
		return this.queue[0];
	}
}
