/**
 * Sort an array of numbers using the bubble sort technique:
 *  - Swap each two numbers if they are out of order
 *  - Go 2 by 2 and iterate the list as many times as there were swaps in the previous iteration
 * 
 *  Time complexity (worst case) O(n^2) - this algorithm is not very efficient
 * 
 *  @param {Array} arr
 *  
 *  @returns {Array}
 * 
 */

const bubbleSort = arr => {
    let hadSwaps = false;

    do {
        arr.forEach((currentItem, index) => {
            const nextItem = arr[index + 1];

            if (currentItem > nextItem) {
                arr[index] = nextItem;
                arr[index + 1] = currentItem;

                hadSwaps = true;

                return;
            }
               
            hadSwaps = false;
        });
    } while (hadSwaps)

    return arr;
}

module.exports = bubbleSort;
