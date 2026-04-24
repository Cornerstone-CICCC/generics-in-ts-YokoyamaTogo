// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.

const duplicateElements = <T>(array: T[], n: number): T[] => {
  const duplicatedArray: T[] = []

  for (const element of array) {
    for (let i = 0; i < n; i++) {
      duplicatedArray.push(element)
    }
  }

  return duplicatedArray
}

console.log(duplicateElements([1, 2, 3], 2))
console.log(duplicateElements(["a", "b", "c"], 3))
console.log(duplicateElements([{ id: 1 }, { id: 2 }], 2))
console.log(duplicateElements([true, false], 0))
