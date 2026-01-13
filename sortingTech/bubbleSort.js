let arr = [13, 46, 24, 52, 20, 9];
console.log(arr);

let n = arr.length;
for (let i = 0; i <= n-2 ; i++) {
    let swap = false;
    for (let j = 0; j <= n-2-i; j++) {
        if (arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            swap = true;
        }
    }
    if (swap === false) {
        break;
    }
}

console.log(arr);

// Bubble sort check the element with it's element
// to the right and swaps them, if the adjacent element
// is smaller for ascending order bubble sort
//
// the swap variable ensures the loop breaks prematurely 
// if the array get sorted before running throught the 
// entire 'i' loop
