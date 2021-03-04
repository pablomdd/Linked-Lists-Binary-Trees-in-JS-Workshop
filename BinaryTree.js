class Node {
    constructor(key) {
        this.key = key;
        this.left = undefined;
        this.right = undefined;
    }
}
export default class BinaryTree {
    constructor() {
        this.root = undefined;
    }
}

export function preorderTraversal(root) {
    let result = [];
    function helper(node) {
        if (node === null) return;

        result.push(node.val);
        helper(node.left);
        helper(node.right);

    }
    helper(root);
    return result;
}

export function inorderTraversal(root) {
    let result = []
    function helper(node) {
        if (node === null) return;

        helper(node.left);
        result.push(node.val);
        helper(node.right);

    }
    helper(root);
    return result;
}

export function postorderTraversal(root) {
    let result = []
    function helper(node) {
        if (node === null) return;

        helper(node.left);
        helper(node.right);

        result.push(node.val)
    }
    helper(root);
    return result;
}

// TODO: Implement level order traversal.