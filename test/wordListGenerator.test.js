const wordListGenerator = require('../src/lib/util/wordListGenerator');

test('generates list of correct size', () => {
    const wordLimit = 50;
    let wordList = wordListGenerator.getRandomWordList('english', wordLimit);

    expect(wordList.length).toBe(wordLimit - 1);
});