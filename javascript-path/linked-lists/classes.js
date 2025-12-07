/**
 * Node for linkedLists.
 */
class Node {
    constructor(value) {
        this.value = value
    }
}

/**
 * LinkedList class
 */
export class LinkedList {
    /**
     * Append a value to the linkedlist
     * 
     * @param {any} value 
     */
    append(value) {
        if (this.head) {
            this.tail.nextNode = new Node(value)
            this.tail = this.tail.nextNode
        } else this.createNewList(value)
    }
    /**
     * Prepend a value to the linkedList
     * 
     * @param {any} value 
     */
    prepend(value) {
        if(this.head) {
            const newNode = new Node(value)
            newNode.nextNode = this.head
            this.head = newNode
        } else this.createNewList(value)
    }
    /**
     * Create a new linked list.
     * @param {any} value 
     */
    createNewList(value) {
        this.head = new Node(value)
        this.tail = this.head
    }
    /**
     * Get the element at index
     * 
     * @param {number} index 
     * @returns value at index
     */
    at(index) {
        let currentNode = this.head
        let currentIndex = 0
        while(currentNode !== undefined && currentIndex < index) {
            currentNode = currentNode.nextNode
            currentIndex++
        }

        if (currentNode) return currentNode
        else return undefined
    }
    /**
     * Removes a node at the end.
     */
    pop() {
        let currentNode = this.head
        while(currentNode.nextNode && currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode
        }
        this.tail = currentNode
        currentNode.nextNode = undefined
    }
    /**
     * Checks if value exists in linkedlist
     * 
     * @param {any} value 
     * @returns whether or not the value exists.
     */
    contains(value) {
        let currentNode = this.head
        do {
            if (currentNode.value === value) return true
            else currentNode = currentNode.nextNode
        } while (currentNode)

        return false
    }
    /**
     * Finds the index of the value
     * 
     * @param {any} value 
     * @returns index if it exists, null if not.
     */
    find(value) {
        let currentNode = this.head
        let index = 0
        do {
            if (currentNode.value === value) return index
            else {
                currentNode = currentNode.nextNode
                index++
            }
        } while (currentNode)

        return null
    }
    /**
     * A string representation of the linked list.
     * 
     * @returns a string representation.
     */
    toString() {
        let currentNode = this.head
        let result = ''
        while (currentNode) {
            result += `( ${currentNode.value} ) -> `
            if (!currentNode.nextNode) {
                result += 'null'
            }
            currentNode = currentNode.nextNode
        }
        return result
    }
    /**
     * Insert value at index
     * @param {any} value
     * @param {number} index
     */
    insertAt(value, index) {
        if (index === 0) this.prepend(value)
        let currentNode = this.head
        let currentIndex = 0

        while(currentNode && currentIndex < index - 1) {
            currentNode = currentNode.nextNode
            currentIndex++
        }

        const newNode = new Node(value)
        newNode.nextNode = currentNode.nextNode
        currentNode.nextNode = newNode
    }
    /**
     * Remove node at index
     * 
     * @param {number} index
     */
    removeAt(index) {
        let currentNode = this.head
        let currentIndex = 0

        while (currentNode && currentIndex < index - 1) {
            currentNode = currentNode.nextNode
            currentIndex++
        }

        if (currentNode.nextNode)
            currentNode.nextNode = currentNode.nextNode.nextNode
    }
}
