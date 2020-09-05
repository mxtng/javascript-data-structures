// binary search tree

// notes
// ===================================
// binary search tree != binary tree
// ===================================

// method -> description
// ===================================
// add -> add node
// remove -> remove node
// lookup -> find node
// ===================================

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	add(data) {
		const newNode = new Node(data);

		if (!this.root) {
			this.root = newNode;
			return this;
		}

		let currentNode = this.root;

		while (true) {
			if (data < currentNode.data) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return this;
				}
				currentNode = currentNode.left;
			} else {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return this;
				}
				currentNode = currentNode.right;
			}
		}
	}
}

