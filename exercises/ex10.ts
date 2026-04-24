// Develop a generic function named `customMap` that takes an array of type `T[]` and a mapping function `mapper: (item: T) => U`, and returns a new array of type `U[]`.
// Test the function with arrays of different types and custom mapping functions.

const customMap = <T, U>(array: T[], mapper: (item: T) => U): U[] => {
  const mappedArray: U[] = []

  for (const item of array) {
    mappedArray.push(mapper(item))
  }

  return mappedArray
}

console.log(customMap([1, 2, 3], (number) => number * 2))
console.log(customMap([{ id: 1, name: "Togo" }, { id: 2, name: "Alice" }], (user) => user.name))
