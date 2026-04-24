// Create a generic function named `safeAccess` that safely accesses nested properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences, including arrays and objects.

const safeAccess = <T>(object: T, keys: PropertyKey[]): unknown => {
  let currentValue: unknown = object

  for (const key of keys) {
    if (currentValue === null || currentValue === undefined) {
      return undefined
    }

    if (typeof currentValue !== "object" && typeof currentValue !== "function") {
      return undefined
    }

    currentValue = (currentValue as Record<PropertyKey, unknown>)[key]
  }

  return currentValue
}

const userProfile = {
  id: 1,
  name: "Togo",
  address: {
    city: "Vancouver",
    postalCode: "V6B"
  }
}

console.log(safeAccess(userProfile, ["address", "city"]))
console.log(safeAccess(userProfile, ["address", "country"]))
