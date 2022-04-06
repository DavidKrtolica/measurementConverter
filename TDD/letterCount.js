class LetterCount {
    count(word) {
        const objectArray = [];
        const letterArray = word.split('');
        for (let i = 0; i < letterArray.length; i++) {
            let count;
            for (let j = i + 1; j < letterArray.length; j++) {
                count = 0;
                if (letterArray[i] == letterArray[j]) {
                    count = count + 2;
                    //letterArray.
                }  else {
                    count = count + 1;
                }
            }
            objectArray.push(letterArray[i], count);
        }
        return objectArray;
    }
}

const testWord = new LetterCount();
//console.log(testWord.count('better'));

module.exports = LetterCount;