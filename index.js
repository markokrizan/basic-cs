const factorial = require('./algorithms/recursion/factorial');
const fibonacci = require('./algorithms/recursion/fibonacci');
const bubbleSort = require('./algorithms/sort/bubbleSort');
const insertionSort = require('./algorithms/sort/insertionSort');
const mergeSort = require('./algorithms/sort/mergeSort');
const quickSort = require('./algorithms/sort/quickSort');

const ArrayList = require('./data-structures/ArrayList');

describe('factorial', () => {
    it('should calculate correct value', () => {
        const res = factorial(3);

        expect(res).toEqual(6);
    });
});

describe('fibonacci', () => {
    it('should calculate correct value', () => {
        const res = fibonacci(4);

        expect(res).toEqual(3);
    });
});

describe('bubbleSort', () => {
    it('should sort correctly', () => {
        const res = bubbleSort([1, 4, 2, 5, 7, 6]);

        expect(res).toEqual([ 1, 2, 4, 5, 6, 7 ]);
    });
});

describe('insertionSort', () => {
    it('should sort correctly', () => {
        const res = insertionSort([1, 4, 2, 5, 7, 6]);

        expect(res).toEqual([ 1, 2, 4, 5, 6, 7 ]);
    });
});

describe('mergeSort', () => {
    it('should sort correctly', () => {
        const res = mergeSort([1, 4, 2, 5, 7, 6]);

        expect(res).toEqual([ 1, 2, 4, 5, 6, 7 ]);
    });
});

describe('quickSort', () => {
    it('should sort correctly', () => {
        const res = quickSort([1, 4, 2, 5, 7, 6]);

        expect(res).toEqual([ 1, 2, 4, 5, 6, 7 ]);
    });
});

describe('ArrayList', () => {
    let arrayList = null;

    beforeEach(() => {
        arrayList = new ArrayList();
    });

    it('should be of type ArrayList', () => {
        expect(arrayList).toEqual(jasmine.any(ArrayList));
    });

    it('should push values corectly', () => {
        arrayList.push('a');
        expect(arrayList.get(0)).toEqual('a');

        arrayList.push('b');
        expect(arrayList.get(1)).toEqual('b');

        expect(arrayList.size()).toEqual(2);
    });

    it('should pop correctly', () => {
        arrayList.push('a');
        arrayList.push('b');
        arrayList.push('c');
        arrayList.push('d');

        arrayList.pop();
        expect(arrayList.size()).toEqual(3);
    });

    it('should delete correctly', () => {
        arrayList.push('a');
        arrayList.push('b');
        arrayList.push('c');
        arrayList.push('d');

        arrayList.delete(2);

        expect(arrayList.size()).toEqual(3);
    });
});
