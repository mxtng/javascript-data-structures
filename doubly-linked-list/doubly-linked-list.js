// doubly linked list

// method -> description
// ===================================
// add -> add new node to end of list
// get -> retrieve node by index
// set -> replace node data by index
// pop -> remove last node
// shift -> remove first node
// remove -> remove node by index
// reverse -> reverse list
// ===================================

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	add(data) {
		const newNode = new Node(data);
		if (!this.length) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
		}

		this.tail = newNode;
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;

		let current, i;

		if (index < this.length / 2) {
			current = this.head;
			i = 0;

			while (i !== index) {
				current = current.next;
				i++;
			}
		} else {
			current = this.tail;
			i = this.length - 1;

			while (i !== index) {
				current = current.previous;
				i--;
			}
		}

		return !!current ? current : undefined;
	}

	set(index, data) {
		let setNode = this.get(index);

		if (!!setNode) {
			setNode.data = data;
			return setNode;
		}
		return undefined;
	}

	pop() {
		if (!this.head) return undefined;

		const removedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = removedNode.previous;
			this.tail.next = null;
			removedNode.previous = null;
		}

		this.length--;
		return removedNode;
	}

	shift() {
		if (!this.length) return undefined;

		const removedNode = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removedNode.next;
			this.head.previous = null;
		}

		removedNode.next = null;
		this.length--;
		return removedNode;
	}

	remove(index) {
		if (this.head === null || index < 0) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let removedNode, prev, next;
		removedNode = this.get(index);

		if (!!removedNode) {
			prev = removedNode.previous;
			next = removedNode.next;

			prev.next = next;
			next.previous = prev;

			removedNode.previous = null;
			removedNode.next = null;
			this.length--;
			return removedNode;
		}
		return undefined;
	}
}
