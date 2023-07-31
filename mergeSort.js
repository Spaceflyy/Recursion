//if number of elements is less than 2 return
//else
//sort left half of elements
//sort right half of elements
//merge sorted halves
const list = [1, 2, 3, 4, 5, 6];
const mergeSort = (array) => {
	let left = array.slice(0, Math.ceil(array.length / 2));
	let right = array.slice(Math.ceil(array.length / 2));

	console.log(left);
	console.log(right);
};

console.log(mergeSort(list));
