// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function shortestWord(str) {
    console.log(str.slice(0, str.indexOf(` `)));
    console.log(str.slice(str.indexOf(` `), str.indexOf(` `)));
}

console.log(shortestWord(`The shortest word issssssss`));