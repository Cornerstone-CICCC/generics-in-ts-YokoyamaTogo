// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.

const filterByType = <T, U extends T>(array: T[], typeGuard: (item: T) => item is U): U[] => {
  return array.filter(typeGuard)
}

const mixedValues: Array<string | number | boolean | { id: number }> = [
  "hello",
  10,
  true,
  { id: 1 },
  "world",
  20,
  false
]

const stringsOnly = filterByType(mixedValues, (item): item is string => typeof item === "string")
const numbersOnly = filterByType(mixedValues, (item): item is number => typeof item === "number")
const objectsOnly = filterByType(mixedValues, (item): item is { id: number } => typeof item === "object" && item !== null)

console.log(stringsOnly)
console.log(numbersOnly)
console.log(objectsOnly)
