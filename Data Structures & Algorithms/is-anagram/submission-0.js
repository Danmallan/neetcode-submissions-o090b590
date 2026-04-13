class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * racecar, carrace
     * 
     */
    isAnagram(s, t) {
       if(s.split("").sort().join("") === t.split("").sort().join("")) return true;
       return false; 
    }
}
