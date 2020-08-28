// doubly linked list

// methods
// ===============
// add
// remove
// insert
// reverse
// ===============

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
}
