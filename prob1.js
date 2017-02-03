// find all the multiples of 3, 5, or 15 that are less than 1000
// add all these together.  
// I need a variable that holds the sum.  Every time a new multiple is found, add to the current sum.  
// When we get to 1000, stop and return the value
// check if it's divisible by 15 (both 5 and 3).  If it's not divisible by 15, check if it's divisible by three, and then by 5.

var sum = 0;

for (i = 0; i < 1000; i++) {
	if (i % 15 == 0) {
		sum = sum + i;
	} else if (i % 3 == 0) {
		sum = sum + i;
	} else if (i % 5 == 0) {
		sum = sum + i;
	};

};

console.log(sum);