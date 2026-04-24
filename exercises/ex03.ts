// Implement a generic function named `reverseArray` that takes an array of type `T[]` and reverses the order of elements in the same array.
// Provide test cases using arrays of different types, including numbers, strings, and custom objects.

const reverseArray = <T>(array: T[]): T[] => {
  return array.reverse()
}

const numbers = [1, 2, 3, 4]
const strings = ["red", "green", "blue"]
const users = [
  { id: 1, name: "Togo" },
  { id: 2, name: "Alice" }
]

console.log(reverseArray(numbers))
console.log(reverseArray(strings))
console.log(reverseArray(users))
