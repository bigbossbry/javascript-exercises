const repeatString = function(stringPara, numRepeat) {
    if ( numRepeat < 0 ) {
        string = "ERROR";
    }
    for (i = 0; i <= numRepeat; i++) {
        if (i == 0){
            string = "";
        } else {
            string += stringPara;
        }
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
