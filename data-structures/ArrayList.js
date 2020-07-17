/**
 * Data structure that holds a list of indexed elements. - pricise location of the item is known by the indes which is
 * an abstraction of the memory location - this is why reads are really fast
 * 
 * Adding and deleting elements means shifting existing elements to make room or to collapse exiting when deleting. - very expensive
 * 
 * Getting an item with an index is very fast.
 * 
 * This is an example using an object for the actual data store to atempt and mock the implementation
 */
class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(value) {
        this.data[this.length++] = value;
    }

    pop() {
        const lastItem = this.data[this.length - 1];

        delete this.data[this.length - 1];
        this.length--;

        return lastItem;
    }

    get(index) {
        return this.data[index];
    }

    size() {
        return this.length;
    }

    delete(index) {
        delete this.data[index];

        this._collapseTo(index);
    }

    _collapseTo(index) {
        const currentDataLength = this.size();

        //Move everyting one place left
        for(let i = index; i < currentDataLength; i++) {
            this.data[i] = this.data[i + 1];
        }

        //Delete the last element
        delete this.data[this.length - 1];

        this.length--;
    }
}

module.exports = ArrayList;
