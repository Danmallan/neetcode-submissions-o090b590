class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * ij
     * 12
     * 13
     * 14
     * 21
     */
    hasDuplicate(nums) {
        const set = new Set();
        for(let i=0; i<nums.length; i++) {
            if(set.has(nums[i])) return true
            set.add(nums[i]);
        }

        return false;
    }
}
