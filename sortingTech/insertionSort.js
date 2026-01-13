let arr = [9, 14, 15, 12, 6, 8, 13];
console.log(arr);

let n = arr.length;
for (let i = 1; i <= n-1; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key; 
}

console.log(arr);

// the 0th index is considered the sorted porition of 
// the array after that we insert the later on elements 
// in their correct position on the sorted array
