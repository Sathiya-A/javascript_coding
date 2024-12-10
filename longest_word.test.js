
const longest_Word = require('./longes_word');

describe('longest_Word', () => {
    it('should return the longest word in a normal sentence', () => {
        const input = "The quick brown fox jumped over the lazy dog";
        const result = longest_Word(input);
        expect(result).toBe('jumped');
    });

    it('should return the first longest word if there are ties', () => {
        const input = "Coding is fun and challenging";
        const result = longest_Word(input);
        expect(result).toBe('challenging');
    });

    it('should return the first longest word if there are ties', () => {
        const input = "The quick, brown fox! jumped";
        input1 = input.replace(/[^a-zA-z0-9 ]/g, '')
        const result = longest_Word(input1);
        expect(result).toBe('jumped');
    });

    it('should return the first longest word if there are ties', () => {
        const input = "";
        const result = longest_Word(input);
        expect(result).toBe('');
    });

    it('should return the first longest word if there are ties', () => {
        const input = "Supercalifragilisticexpialidocious";
        const result = longest_Word(input);
        expect(result).toBe('Supercalifragilisticexpialidocious');
    });

    it('should return the first longest word if there are ties', () => {
        const input = "The    quick   brown    fox";
        const result = longest_Word(input);
        expect(result).toBe('quick');
    });

    it('should return the first longest word if there are ties', () => {
        const input = "The    QUICK   brown    fox";
        const result = longest_Word(input);
        expect(result).toBe('QUICK');
    });


})