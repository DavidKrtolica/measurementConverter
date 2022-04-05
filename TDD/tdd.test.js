const LetterCount = require('./letterCount.js');

test('letter counter counts correctly', () => {
    const testWord = new LetterCount();
    expect(testWord.count()).toEqual({'c': 1, 'a': 1, 't': 1});
});