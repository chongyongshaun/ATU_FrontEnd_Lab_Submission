const countCharOnStr = (str : string) : number => {
    var count : number = 0
    for (var char of str) {
        count++;
    }
    return count;
}
console.log(countCharOnStr("abcde"))

const countCharTrimEnd = (str : string) : number => {
    var count = 0;
    var trimmed = str.trim();
    for (var char of trimmed) {
        count++;
    }
    return count;
}
console.log(countCharTrimEnd("     Hello World!     "))

const countCharV2 = (str : string, includeSpace? : boolean) : number => {
    if (includeSpace) return countCharOnStr(str)
    else return countCharTrimEnd(str)
}
console.log(countCharV2("     Hello World!     "))
console.log(countCharV2("     Hello World!     ", true))