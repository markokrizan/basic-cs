/**
 * Sort an array of numbers using the quick sort technique:
 *  - Take the last element of an array and use it as the pivot value.
 *    Put values lower in one array and values greater in another.
 *    Repeat the process recurisively.
 * 
 *  Time complexity (worst case) - O(n^2) but the average is O(n log(n))
 * 
 *  @param {Array} arr
 *  
 *  @returns {Array}
 * 
 */
const quickSort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];

    const lowerValues = [];
    const greaterValues = [];

    for (let i = 0; i < arr.length - 1; i ++) {
        if (arr[i] < pivot) {
            lowerValues.push(arr[i]);

            continue;
        } 

        greaterValues.push(arr[i]);
    }

    return [...quickSort(lowerValues), pivot, ...quickSort(greaterValues)];
}

module.exports = quickSort;
