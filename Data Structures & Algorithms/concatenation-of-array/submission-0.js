class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        /*
        nums = [1,4,1,2]

        n = 4
        m = 8
        ans [1,4,1,2,x,x,x,x]

        i=0 = nums[0] = 1
        i=1 = nums[1] = 4
        i=2 = nums[2] = 1
        i=3 = nums[3] = 2
        i=4 = 0
        i=5 1
        i=6 2
        i=7 3
        */
        let n = nums.length;
        let m = 2 * n;
        var ans = []; // 0...m-1
        for(let i = 0; i < m; i++){
           ans[i] = nums[i%n];
        }

        return ans;
    }
}
