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
}
