const findLongestWord = (listOfWords) =>
  listOfWords.sort((a, b) => b.length - a.length)[0].length;

const vertical_txt = (sentence) => {
  const longestLength = findLongestWord(sentence.split(" "));

  const verticalSentence = new Array(longestLength);

  const wordsSequenced = sentence.split(" ").map((word) => {
    if (word.length < longestLength)
      return word + " ".repeat(longestLength - word.length);
    else return word;
  });

  for (i = 0; i < verticalSentence.length; i++) {
    verticalSentence[i] = wordsSequenced.reduce(
      (acc, curr) => [...acc, curr[i]],
      [],
    );
  }

  return verticalSentence;
};

console.log(vertical_txt("Hello fellas"));
