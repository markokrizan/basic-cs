/**
 * Sort an array of numbers using the insertion sort technique:
 *  - Build a sorted part of the list at the first part of the list and delimit the unsorted
 *    part by the index of the last sorted element
 * 
 *  Time complexity (worst case) - O(n^2) - this algorithm is not very efficient
 * 
 *  @param {Array} arr
 *  
 *  @returns {Array}
 * 
 */
const insertionSort = arr => {
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const spliced = arr.splice(i, 1); //take out at index i
                arr.splice(j, 0, spliced[0]); //insert before index j
            }
        }
    }

    return arr;
}

module.exports = insertionSort;
