// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.

const createPair = <A, B>(firstValue: A, secondValue: B): [A, B] => {
  return [firstValue, secondValue]
}

console.log(createPair("age", 25))
console.log(createPair(true, "active"))
