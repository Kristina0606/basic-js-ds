/** @format */

const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithIn(this.rootNode, data);

    function addWithIn(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithIn(node.left, data);
      }
      if (data > node.data) {
        node.right = addWithIn(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return isThereData(this.rootNode, data);
    function isThereData(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data
        ? isThereData(node.left, data)
        : isThereData(node.right, data);
    }
  }

  find(data) {
    return findData(this.rootNode, data);
    function findData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data
        ? findData(node.left, data)
        : findData(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    let minCout = this.rootNode;
    while (minCout.left) {
      minCout = minCout.left;
    }
    return minCout.data;
  }

  max() {
    let maxCount = this.rootNode;
    while (maxCount.right) {
      maxCount = maxCount.right;
    }
    return maxCount.data;
  }
}

function getRoot() {
  console.log(bst.root());
}

const bst = new BinarySearchTree();
bst.add(7);
bst.add(8);
bst.add(4);
bst.add(2);
bst.add(5);
bst.remove(4);

getRoot();

console.log(bst.find(7));
console.log(bst.min());
console.log(bst.max());

module.exports = {
  BinarySearchTree,
};
