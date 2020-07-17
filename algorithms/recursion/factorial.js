/**
 * Calculates factorial of a number
 * 
 * Example: 5! = 5 * 4 * 3 * 2 * 1 = 120
 * 
 * Time complexity (worst case) O(n) - the function will run as many times as there are numbers in the sequence
 * 
 * @param {number} n 
 * 
 * @returns {number}
 */

const factorial = n => {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

module.exports = factorial;
