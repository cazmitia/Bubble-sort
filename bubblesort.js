

function bubbleSort(arr) {
    debugger
    for (let i = arr.length - 1; i > 0; i--) {
        // let sorted = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                this.swap(arr,j,j+1);
                // sorted = false;
            }
        }
        // if (sorted) return arr;
    }
    this.swap = function(arr,idx,idx2){
        let temp = arr[idx2];
         arr[idx2] = arr[idx];
         arr[idx] = temp;
        }

    return arr;
}


