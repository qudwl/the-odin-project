export class HashMap {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity
        this.loadFactor = loadFactor
        this.buckets = Array.from({length: capacity}, (_, i) => new List(i))
    }
    /**
     * Hashing function
     * 
     * @param {string} key 
     * @returns number
     */
    hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity
        }

        return hashCode
    }

    set(key, value) {
        this.buckets.at(this.hash(key)).set(key, value)

        if (this.length() > this.capacity * this.loadFactor) {
            this.increaseBucketSize()
        }
    }

    has(key) {
        return this.buckets.at(this.hash(key)).has(key)
    }

    remove(key) {
        this.buckets.at(this.hash(key)).remove(key)
    }

    length() {
        let result = 0
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets.at(i)) result += this.buckets.at(i).length
        }

        return result
    }

    clear() {
        this.buckets = Array.from({length: capacity}, (_, i) => new List(i))
    }

    keys() {
        const result = []

        for (let i = 0; i < this.capacity; i++) {
            result.push(...this.buckets.at(i).keys())
        }

        return result
    }

    values() {
        const result = []

        for (let i = 0; i < this.capacity; i++) {
            result.push(...this.buckets.at(i).values())
        }

        return result
    }

    entries() {
        const result = []

        for (let i = 0; i < this.capacity; i++) {
            const entries = this.buckets.at(i).entries()
            result.push(...entries)
        }

        return result
    }

    toString() {
        let result = 'HashMap\n'
        result += `Length: ${this.length()}\n`
        result += `Capacity: ${this.capacity}\n`

        for (let i = 0; i < this.capacity; i++) {
            result += `${(new String(i)).padStart(3)}: ${this.buckets.at(i).toString()}\n`
        }

        return result
    }

    increaseBucketSize() {
        const entries = this.entries()
        this.capacity *= 2
        this.buckets = Array.from({length: this.capacity}, (_, i) => new List(i))

        for (let entry of entries) {
            this.set(entry[0], entry[1])
        }
    }
}

class Node {
    constructor(key = undefined, value = undefined, nextNode = undefined) {
        this.key = key
        this.value = value
        this.nextNode = nextNode
    }
}

class List {
    constructor(index = null, key, value) {
        this.index = index

        if(key && value) {
            this.setFirst(key, value)
        } else {
            this.clear()
        }
    }
    remove(key) {
        let current = this.head

        if (current.key === key) {
            this.head = this.head.nextNode
            this.length--
            return
        }

        while(current) {
            if (current.nextNode && current.nextNode.key === key) {
                current.nextNode = current.nextNode.nextNode
                this.length--
                return
            } else {
                current = current.nextNode
            }
        }

        console.log(`Key ${key} not found`)
    }
    setFirst(key, value) {
        this.head = new Node(key, value)
        this.tail = this.head
        this.length = 1
    }
    set(key, value) {
        let currentNode = this.head

        if (currentNode) {
            while(true) {
                if (currentNode.key === key) {
                    currentNode.value = value
                    return
                } else if (currentNode.nextNode) {
                    currentNode = currentNode.nextNode
                } else {
                    currentNode.nextNode = new Node(key, value)
                    this.tail = currentNode.nextNode
                    this.length++
                    return
                }
            }
        }
        else {
            this.setFirst(key, value)
        }
    }
    clear() {
        this.head = undefined
        this.tail = undefined
        this.length = 0
    }
    get(key) {
        let current = this.head

        while(current) {
            if (current.key === key) return current.value
            else current = current.nextNode
        }

        return null
    }
    has(key) {
        let current = this.head

        while(current) {
            if (current.key === key) return true
            else current = current.nextNode
        }

        return false
    }
    keys() {
        let arr = []
        let current = this.head

        while(current) {
            arr.push(current.key)
            current = current.nextNode
        }

        return arr
    }
    values() {
        let arr = []
        let current = this.head

        while(current) {
            arr.push(current.value)
            current = current.nextNode
        }

        return arr
    }
    entries() {
        let arr = []
        let current = this.head

        while(current) {
            arr.push([current.key, current.value])
            current = current.nextNode
        }

        return arr
    }
    toString() {
        let result = '[ '

        let currentNode = this.head
        while(currentNode) {
            result += `[ ${currentNode.key}, ${currentNode.value} ], `
            currentNode = currentNode.nextNode
        }

        if (result.endsWith(', ')) {
            result = result.slice(0, result.length - 2)
        }

        result += ' ]'
        return result
    }
}