// Create a function called concatSum that takes two generic arguments.
// These arguments could be strings or numbers. If both are strings, use the concat method; otherwise, just sum the numbers.
// If they are not of the same type, print an error message to the console; If they are not string or number, print an error message

const concatSum = <T extends string | number>(firstValue: T, secondValue: T): string | number | void => {
  if (typeof firstValue !== typeof secondValue) {
    console.error("Both arguments must be the same type")
    return
  }

  if (typeof firstValue === "string" && typeof secondValue === "string") {
    return firstValue.concat(secondValue)
  }

  if (typeof firstValue === "number" && typeof secondValue === "number") {
    return firstValue + secondValue
  }

  console.error("Arguments must be strings or numbers")
}

console.log(concatSum("Hello, ", "TypeScript"))
console.log(concatSum(10, 20))
console.log(concatSum(true as unknown as string, false as unknown as string))
