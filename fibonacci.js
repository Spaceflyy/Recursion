const fibs = (n) => {
	let sequence = [0, 1];

	while (n > sequence.length) {
		sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
	}
	return sequence;
};
const fibsRec = (n, sequence = [0, 1]) => {
	if (n < 2) {
		return sequence;
	} else {
		sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
		return fibsRec(n - 1, sequence);
	}
};

console.log(fibsRec(5));
console.log(fibs(10));
