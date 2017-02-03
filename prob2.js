// for fibonacci values under 4,000,000, if the number is divisible by 2, add it.

var sum = 0;
var fib = [1,2];
var nextNum = 0;
var len = fib.length;

// first create the fibonacci array
// for the last two numbers in fib, add the last one to the second to last one.
// find fib length, then add len - 1 and len -1.  append the new number.
// keep doing this while the new number is less than 4000000

while (nextNum < 4000000) {
	// calculate the next value in the fibonnaci sequences
	nextNum = fib[len-1] + fib[len-2];

	// append the next value to the array, and store the new array length in the len variable
	fib.push(nextNum);
	len = fib.length;
};

// check for even values and add them to the sum
for (i = 0; i < len; i++) {
	if (fib[i] % 2 == 0) {
		sum = sum + fib[i];
	};
};


console.log(sum);