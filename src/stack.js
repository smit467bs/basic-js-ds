const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
	const
	stack = []

	push(element) {
		this.stack.push(element);
		return this.stack;
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	pop() {
		return this.stack.pop();
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	peek() {
		return this.stack[this.stack.length-1]
		// throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
}

const stack = new Stack();

console.log(stack.push(1)); // adds the element to the stack
console.log(stack.peek()) // returns the peek, but doesn't delete it, returns 1
console.log(stack.pop()); // returns the top element from stack and deletes it, returns 1
console.log(stack.pop()); // returns the top element from stack and deletes it, returns 1
module.exports = {
	Stack
};
