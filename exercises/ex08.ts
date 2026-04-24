// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.

class Dictionary<K, V> {
  private items = new Map<K, V>()

  add(key: K, value: V): void {
    this.items.set(key, value)
  }

  get(key: K): V | undefined {
    return this.items.get(key)
  }

  delete(key: K): boolean {
    return this.items.delete(key)
  }
}

const studentScores = new Dictionary<string, number>()
studentScores.add("Togo", 95)
studentScores.add("Alice", 88)

console.log(studentScores.get("Togo"))
console.log(studentScores.delete("Alice"))

const productLabels = new Dictionary<number, string>()
productLabels.add(101, "Keyboard")
productLabels.add(102, "Mouse")

console.log(productLabels.get(101))
