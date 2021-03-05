// https://leetcode.com/problems/symmetric-tree/
// Leetcode 101

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) return true;
    if (!root.left && !root.right) return true;

    const queue = [];

    queue.push(root.left);
    queue.push(root.right);

    while (queue.length > 0) {
        const nodeLeft = queue.shift();
        const nodeRight = queue.shift();

        if (nodeLeft === null && nodeRight === null) continue;
        if (nodeLeft === null || nodeRight === null) return false;
        if (nodeLeft.val !== nodeRight.val) return false;

        queue.push(nodeLeft.left);
        queue.push(nodeRight.right);
        queue.push(nodeLeft.right);
        queue.push(nodeRight.left);
    }
    return true;
};