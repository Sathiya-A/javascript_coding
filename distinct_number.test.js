// import distinct_number from './distinct_number';

const distinct_number = require('./distinct_number')
describe('distinct_number', () => {
    it('missing number', () => {

        const result = distinct_number([1, 2, 4, 5]);
        expect(result).toBe(3);
    });
    it('missing number ascending', () => {

        const result = distinct_number([3, 7, 1, 2, 8, 4, 5]);
        expect(result).toBe(6);
    });
})