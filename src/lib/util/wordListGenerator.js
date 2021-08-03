import wordList from './words.json'

export const getRandomWordList = (language, wordLimit) => {
    let wordCount = wordList[language].length;

    let i = 0;

    let randomWords = [];

    while (i < wordLimit) {
        let random = Math.random();
        let word = wordList[language][Math.floor(random * wordCount)]

        randomWords.push({ 
            word: word, 
            class: i === 0 ? "highlight" : ""
        });

        i += 1;
    }

    return randomWords;
}

