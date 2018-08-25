class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(0);
const two = new Node(1);
const three = new Node(0);
const four = new Node(1);
const five = new Node(0);
const six = new Node(1);
const seven = new Node(1);
four.left = six;
four.right = seven;
three.left = four;
three.right = five;
root.left = two;
root.right = three;


// O(n^2)
const isUnival = root => {
    if (!root) return true;
    if (root.left && root.left.value !== root.value) {
        return false;
    }
    if (root.right && root.right.value !== root.value) {
        return false;
    }
    if (isUnival(root.right) && isUnival(root.left)) {
        return true;
    }
    return false;
}

const countUnival = root => {
    if (!root) {
        return 0;
    }
    let total = countUnival(root.left) + countUnival(root.right);
    if (isUnival(root)) {
        return total + 1;
    }
    return total;
}
console.log(countUnival(root));


// O(n)

const countUnivalWrapper = root => {
    const { count } = isUnivalWithCount(root);
    return count;
}

const isUnivalWithCount = root => {
    if (!root) return { count: 1, unival: true };
    left = isUnivalWithCount(root.left);
    right = isUnivalWithCount(root.right);
    let unival = true;
    if (!left.unival || !right.unival) {
        unival = false;
    }
    if (root.left && root.left.value != root.value) {
        unival = false;
    }
    if (root.right && root.right.value != root.value) {
        unival = false;
    }
    const count = unival ? (left.count + right.count + 1) : (left.count + right.count);
    return { count, unival }
    
}
console.log(countUnivalWrapper(root));