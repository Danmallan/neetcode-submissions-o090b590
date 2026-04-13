class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            if(hashMap.has(difference)){
                return [hashMap.get(difference), i]
            }

            hashMap.set(nums[i], i);
        }
        return [];

        // var output = [];
        // for (let i = 0; i < nums.length; i++){
        //     for (let j = i; j < nums.length; j++){
        //         if(nums[i] + nums[j] == target && i != j){
        //             output.push(i, j)
        //         }
        //     }
        // }
        // return output;
    }
}
