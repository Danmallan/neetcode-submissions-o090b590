class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var output = [];
        for (let i = 0; i < nums.length; i++){
            for (let j = i; j < nums.length; j++){
                if(nums[i] + nums[j] == target && i != j){
                    output.push(i, j)
                }
            }
        }
        return output;
    }
}
