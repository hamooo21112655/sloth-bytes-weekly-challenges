const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const findTheLastVowel = (word) => Math.max(...VOWELS.map(vowel => word.lastIndexOf(vowel)));

const removeLastVowel = (sentence) => {
    const words = sentence.split(" ");
    return words.map(word => {
        const lastWovelIndex = findTheLastVowel(word);
        return word.split("").filter((_, letterIndex) => letterIndex !== lastWovelIndex).join("");
    }).join(" ");
}

console.log(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people."));
