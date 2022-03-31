function main(numOne, numTwo){

	var quotient;
	if(numTwo === 0){
		quotient = 'Divide by 0! Cannot divide by zero!';
	} else{

		quotient = numOne / numTwo;
	}
	
	return quotient;
}

console.log(main(numOne, numTwo));

module.exports = main;