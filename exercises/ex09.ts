// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.

class Stack<T> {
  private items: T[] = []

  push(item: T): void {
    this.items.push(item)
  }

  pop(): T | undefined {
    return this.items.pop()
  }
}

const numberStack = new Stack<number>()
numberStack.push(10)
numberStack.push(20)

console.log(numberStack.pop())
console.log(numberStack.pop())

const stringStack = new Stack<string>()
stringStack.push("first")
stringStack.push("second")

console.log(stringStack.pop())
