// basic singly linked list

// method -> description
// ===================================
// add -> add new node
// remove -> remove node by index
// reverse -> reverse list
// ===================================

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.length++;
    return this;
  }

  reverse() {
    if (!this.length) return undefined;

    let prev, next, currentNode;
    currentNode = this.head;
    prev = null;

    while (currentNode) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }

    this.head = prev;
    return this;
  }

  remove(index) {
    if (!this.length) return undefined;
    if (index < 0 || index > this.length - 1) return undefined;

    let i, prev, currentNode, removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      currentNode = this.head;
      
      i = 0;
      while (i < index) {
        prev = currentNode;
        currentNode = currentNode.next;
        i++;
      }

      prev.next = currentNode.next;
      removedNode = currentNode.data;
    }
    this.length--;
    return removedNode.data;
  }
}
