const sumAll = function(a,b) {
    //declare sum variable
    let sum;
    //return ERROR for non acceptable parameters (negative numbers, and non-number arguments)
    if (a < 0 || b < 0 || typeof(a)!=="number" || typeof(b)!=="number") {
        return "ERROR";
    }
    //compare a and b to find the larger variable and declare them as variables c and d
    if (a < b) {
        c = a;
        d = b;
    } else {
        c = b;
        d = a;
    }
    // declare num 1 as the smaller number c
    let num1 = c;
    // declare num 2 as the bigger number d
    let num2 = d;
    //looping and making a summation function
    // the start of sum is 0, the loop will continue as long as i is less than or equal to num 2, and i will iterate
    //at the start of the loop, we declare sum to be num1 -1
    // then declare sum to be equal to itself + i
for (i=num1; i<=num2;i++) {
    if (i==num1){
        sum = 0;
    } 
        sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
