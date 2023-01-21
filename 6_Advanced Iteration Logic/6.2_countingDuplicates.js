function duplicates(str) {
    let counter = 0;
    str = str.toLowerCase();
    let duplicatesArr = [];
    for (let i = 0; i < str.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < str.length; j++) {
            if (j === i) {
                continue;
            } else if (
                str[i] === str[j] &&
                duplicatesArr.indexOf(str[i]) === -1
            ) {
                duplicatesArr.push(str[i]);
            }
        }
    }
    return duplicatesArr.length;
}

console.log(duplicates(`abcde`));
console.log(duplicates(`aabbcde`));
console.log(duplicates(`aabBcdeD`));
console.log(duplicates(`indivisibility`));
console.log(duplicates(`indivisibilities`));
console.log(duplicates(`aA11`));
console.log(duplicates(`ABBA`));
