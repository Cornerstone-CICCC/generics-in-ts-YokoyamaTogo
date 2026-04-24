// Create a generic function named `identity` that takes a single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with numbers, strings, and custom objects to demonstrate its type flexibility.

const identity = <T>(value: T): T => {
  return value
}

const numberIdentity = identity(25)
const stringIdentity = identity("TypeScript")
const objectIdentity = identity({ id: 1, name: "Togo" })

console.log(numberIdentity)
console.log(stringIdentity)
console.log(objectIdentity)
