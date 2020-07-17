/**
 * Take two presumably sorted arrays and return a combined sorted array
 * by comparing the first elements and filling a new array with the lower value (and removing it from the original array)
 * 
 *  @param {Array} left
 *  @param {Array} left
 *  
 *  @returns {Array}
 * 
 */
const stitch = (left, right) => {
    const res = [];

    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            res.push(left.shift()); 

            continue;
        }

        res.push(right.shift());
    }

    return res.concat(left, right);
}


/**
 * Sort an array of numbers using the merge sort technique:
 *  - Divide the list recursively into two parts until only one element is left in each half.
 *    Combine the single elements from each array (in order) into one array and return
 * 
 *  Time complexity (worst case) - O(n log(n)) - this is a divide and conquer type of algorithm that uses recursion
 * 
 *  @param {Array} arr
 *  
 *  @returns {Array}
 * 
 */
const mergeSort = arr => {
    if (arr.length < 2) {
        return arr;
    }

    const length = arr.length;
    const middle = Math.floor(length / 2);

    const left = arr.slice(0 , middle);
    const right = arr.slice(middle, length);

    return stitch(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
