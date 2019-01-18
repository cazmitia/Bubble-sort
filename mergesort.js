
// Hello~!!!

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        
        let split = Math.ceil(arr.length / 2);
        let left = arr.slice(0, split);
        let right = arr.slice(split, arr.length);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(arr1, arr2) {

        const mergedArrays = [];
        

        while (arr1.length > 0 && arr2.length > 0) {
            if (arr1[0] > arr2[0]) {
                mergedArrays.push(arr2.shift());
            } else {
                mergedArrays.push(arr1.shift());
            }
        }
        if (arr1.length > 0) {
            return mergedArrays.concat(arr1);
        } else {
            return mergedArrays.concat(arr2);
        }
    }
}