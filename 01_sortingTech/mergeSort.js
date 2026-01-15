const nums = [9, 3, 7, 5, 6, 4, 8, 2];
console.log(nums);
mergeSort(nums, 0, nums.length-1);
console.log(nums);

function mergeSort(nums, l, h) {

    if (l < h) {
        const mid = Math.floor((l + h) / 2); 
        mergeSort(nums, l, mid);   // Sort left half
        mergeSort(nums, mid+1, h);  // Sort right half
        merge(nums, l, mid, h);  // Merge sorted halves
    }
}

function merge(nums, l, mid, h) {
    // Getting the size of left and right halves
    const n1 = mid - l + 1;
    const n2 = h - mid;

    // Create temporary array
    const L = new Array(n1);
    const R = new Array(n2);

    // Copying data of left and right half
    for (let i = 0; i < n1; i++) {
        L[i] = nums[l + i];
    }

    for (let j = 0; j < n2; j++) {
        R[j] = nums[mid + 1 + j];
    }

    let i = 0, j = 0, k = l;

    // Merging the two halves
    while(i < n1 && j < n2) {
        if(L[i] < R[j]) {
            nums[k] = L[i];
            i++;
        } else {
            nums[k] = R[j];
            j++;
        }
        k++;
    }

    // Adding the remaining elements
    while (i < n1) {
        nums[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        nums[k] = R[j];
        j++;
        k++;
    }
}
