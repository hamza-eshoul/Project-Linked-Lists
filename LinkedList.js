const Node = require("./Node");

class LinkedList {
  constructor() {
    this.Head = { nextNode: null };
  }

  append(value, next = this.Head) {
    if (next.nextNode == null) {
      return (next.nextNode = new Node(value));
    }

    next = next.nextNode;

    return this.append(value, next);
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.Head.nextNode;
    this.Head.nextNode = newNode;
  }

  size(n = 0, next = this.Head) {
    if (next.nextNode == null) {
      return n;
    }

    next = next.nextNode;
    return this.size(n + 1, next);
  }

  head() {
    return this.Head.nextNode;
  }

  tail(next = this.Head) {
    if (next.nextNode == null) {
      return next;
    }
    next = next.nextNode;
    return this.tail(next);
  }

  at(index, counter = 0, next = this.Head) {
    if (next == null) {
      return null;
    }

    if (index == counter) {
      return next.nextNode;
    }

    next = next.nextNode;
    return this.at(index, counter + 1, next);
  }

  pop(next = this.Head) {
    if (next.nextNode.nextNode == null) {
      next.nextNode = null;
      return;
    }
    next = next.nextNode;
    return this.pop(next);
  }

  contains(value, next = this.Head) {
    if (next == null) {
      return false;
    }
    if (next.value == value) {
      return true;
    }

    next = next.nextNode;

    return this.contains(value, next);
  }

  find(value, counter = 0, next = this.Head.nextNode) {
    if (next == null) {
      return null;
    }

    if (next.value == value) {
      return counter;
    }

    next = next.nextNode;
    return this.find(value, counter + 1, next);
  }

  toString(next = this.Head.nextNode, listStrings = "") {
    if (next == null) {
      listStrings += null;
      return listStrings;
    }

    listStrings += `(${next.value}) -> `;

    next = next.nextNode;

    return this.toString(next, listStrings);
  }
}

let list = new LinkedList();
