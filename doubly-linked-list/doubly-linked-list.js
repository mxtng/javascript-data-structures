// doubly linked list

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
		if (!!this.length) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}

		this.tail = newNode;
		this.length++;
	}

	get(index) {
		if (!this.length || index >= this.length) return undefined;

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

		return !!current ? current.data : undefined;
	}
}
