// Write a generic function called `getFirstElement` that accepts an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate that the function works correctly.
// Don't forget to cover the situation where the array is empty.

const getFirstElement = <T>(array: T[]): T | undefined => {
  return array[0]
}

console.log(getFirstElement([10, 20, 30]))
console.log(getFirstElement(["apple", "banana", "orange"]))
console.log(getFirstElement([{ id: 1, name: "Togo" }, { id: 2, name: "Yuki" }]))
console.log(getFirstElement([]))
