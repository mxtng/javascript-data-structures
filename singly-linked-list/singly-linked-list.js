// singly linked list

// method -> description
// ===================================
// add -> add new node to end of list
// get -> retrieve node by index
// set -> replace node data by index
// remove -> remove node by index
// reverse -> reverse list
// ===================================

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	add(data) {
		const newNode = new Node(data);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.head;
		if (index === this.length - 1) return this.tail;

		let i = 0;
		let current = this.head;

		while (i < index) {
			current = current.next;
			i++;
		}

		return !!current ? current : undefined;
	}

	set(index, data) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) {
			this.head.data = data;
			return this.head;
		}
		if (index === this.length - 1) {
			this.tail.data = data;
			return this.tail;
		}

		let i = 0;
		let current = this.head;

		while (i < index) {
			current = current.next;
			i++;
		}

		current.data = data;
		return current;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;

		let previousNode, removedNode;

		if (index === 0) {
			removedNode = this.head;
			this.head = this.head.next;
			removedNode.next = null;
			return removedNode;
		}

		if (index === this.length - 1) {
			removedNode = this.tail;
			this.tail = this.get(index - 1);
			this.tail.next = removedNode.next;
			return removedNode;
		}

		previousNode = this.get(index - 1);
		removedNode = previousNode.next;
		previousNode.next = removedNode.next;
		removedNode.next = null;

		this.length--;
		return removedNode;
	}

	reverse() {
		if (!this.length) return undefined;
		if (this.length === 1) return this;

		let currentNode, prev, next;

		currentNode = this.head;
		prev = null;

		while (currentNode) {
			next = currentNode.next;
			currentNode.next = prev;
			prev = currentNode;
			currentNode = next;
		}

		this.tail = this.head;
		this.head = prev;

		return this;
	}
}

