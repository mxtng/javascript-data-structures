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
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.head.data;
		if (index === this.length - 1) return this.tail.data;

		let i = 0;
		let current = this.head;

		while (i < index) {
			current = current.next;
			i++;
		}

		return !!current ? current.data : undefined;
	}

	set(index, data) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) {
			this.head.data = data;
			return this.head.data;
		}
		if (index === this.length - 1) {
			this.tail.data = data;
			return this.tail.data;
		}

		let i = 0;
		let current = this.head;

		while (i < index) {
			current = current.next;
			i++;
		}

		current.data = data;
		return current.data;
	}
}
