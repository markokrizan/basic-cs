/**
 * Calculates nth fibonacci number
 * 
 * Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21 ...
 * 
 * Example: 4 => 3 
 * 
 * Time complexity (worst case) O(2^n)
 * 
 * @param {number} n 
 * 
 * @returns {number}
 */
const fibonacci = n => {
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;
