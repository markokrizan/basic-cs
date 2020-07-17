class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


/**
 * Data structure that holds a list of elements.
 * Each item in the structure (a node) holds the value and a pointer to the next node.
 * 
 * First node is called the head and the last one is called the tail.
 * 
 * Reads are more expensive then in an ArrayList because you need to follow nodes by pointers to reach your destination.
 * 
 * Deletes and inserts are cheap because only a modification of a pointer is needed, but to reach the node to delete
 * or to insert after or before you need to do a read by following the pointers. 
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        this.length++;

        if (!this.head) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }

    pop() {
        return this.delete(this.length - 1);
    }

    _find(value, test = this._test) {
        let current = this.head;
        let i = 0;
        while(current) {
            if (test(value, current.value, i , current)) {
                return current;
            }

            current = current.next;
            i++;
        }

        return null;
    }

    _test(a, b) {
        return a === b; 
    }

    _testIndex(search, __, i) {
        return search === i;
    }

    get(index) {
        const node = this._find(index, this._testIndex);

        if (!node) {
            return null;
        }

        return node.value;
    }

    delete(index) {
        if (index === 0) {
            const head = this.head;

            if(head) {
                this.head = head.next;
            }else {
                this.tail = this.head = null;
            }

            this.length--;

            return head.value;
        }

        const node = this._find(index - 1, this._testIndex);

        const excise = node.next;

        if (!excise) {
            return null;
        }

        node.next = excise.next;

        if(!node.next.next) {
            this.tail = node.next;
        }

        this.length--;

        return excise.value;
    }
}

module.exports = LinkedList ;
