const reverseString = function(word) {
    let wordReversed = "";
    for(i = 0; i <= word.length; i++) {
        wordReversed += word.charAt(word.length-i);
    }
    return wordReversed;
};

// Do not edit below this line
module.exports = reverseString;
