let arr = [13, 49, 24, 52, 20, 9];
console.log(arr, typeof(arr));

let n = arr.length;
for (let i = 0; i <= n-2; i++) {
    let min = i;
    for (let j = i; j <= n-1; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
}

console.log(arr);

// Selection sort finds the most smallest element in 
// the unsorted portion of the array and places it right  
// after the sorted portion of the array.
// For a completely unsorted array the position will be 0th idx
