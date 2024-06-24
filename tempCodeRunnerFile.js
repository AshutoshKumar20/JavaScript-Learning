let isReverse = (str) => {
    let reverse = ""
    for (let char = 0; char <= str.length - 1; char++) {
        reverse = reverse + str[char]
        // console.log(str[char]);
    }
    return reverse;
}
isReverse("Ashutosh")
