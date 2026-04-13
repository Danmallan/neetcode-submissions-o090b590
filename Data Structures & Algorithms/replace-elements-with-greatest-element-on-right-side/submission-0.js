class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     * 2, max(4,5,3,1,2) -> 5
     * 4, max(5,3,2,2) -> 5
     * 5, max(3,2,2) -> 3
     * 2, max(2,2) -> 2
     * 2 -> -1
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            let max = -1;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > max) {
                    max = arr[j];
                }
            }
            arr[i] = max;
        }
        arr[arr.length - 1] = -1;
        
        return arr;
    }

}
