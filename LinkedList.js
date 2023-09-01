const Node = require("./Node");

class LinkedList {
  constructor() {
    this.Head = { nextNode: null };
  }

  append(value) {
    for (const property in this) {
      if (this[property].nextNode == null) {
        this[property].nextNode = value;
      }
    }

    this[value] = new Node(value);
  }

  prepend(value) {
    // STOPPED HERE
    // YOU CAN TRY TO ACCESS THE FIRST INDEX [0] AND ASSIGN TO IT THE NEW NODE AND THE TRY TO RECREATE THE HEAD OR SOMETHING
  }

  size() {
    return Object.keys(this).length - 1;
  }

  head() {
    let firstNode = null;
    for (const property in this) {
      if (property == this.Head.nextNode) {
        firstNode = this[property];
      }
    }

    return firstNode;
  }

  tail() {
    for (const property in this) {
      if (this[property].nextNode == null) {
        return this[property];
      }
    }
  }

  at(index) {
    return this[Object.keys(this)[index + 1]];
  }

  pop() {
    this[Object.keys(this)[Object.keys(this).length - 2]].nextNode = null;
    delete this[Object.keys(this)[Object.keys(this).length - 1]];
  }

  contains(value) {
    let exists = false;
    for (const property in this) {
      if (this[property].value === value) {
        exists = true;
      }
    }

    return exists;
  }

  find(value) {
    let counter = -1;
    for (const property in this) {
      if (this[property].value === value) {
        return counter;
      }

      counter++;
    }

    return null;
  }

  //   toString() {}
}

let list = new LinkedList();
list.append("Hamza");
list.append("Aicha");
list.append("Soukaina");
list.append("Imad");
list.append("Zabouzi");

console.log(list.prepend());
