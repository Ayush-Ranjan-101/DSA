// leetcode - 118

const rows = 5;

const generate = function (numRows) {
    const res = [];
    
    for (let i = 0; i < numRows; i++) {
        const arr = new Array(i+1);
        arr[0] = 1;
        arr[i] = 1;

        for (let j = 1; j < i; j++) {
            // current element is the sum of prev array's two element
            arr[j] = res[i-1][j-1] + res[i-1][j];
        }

        res.push(arr);
    }

    console.log(res)
}

generate(5);
