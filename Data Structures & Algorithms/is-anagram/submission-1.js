class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * racecar, carrace
     * [
     * r = 2
     * a = 2
     * c = 2
     * e = 1
     * ]
     */
    isAnagram(s, t) {
        let mapS = new Map()
        for(let i = 0; i < s.length; i++) {
            let c = s.charAt(i);
            if(mapS.has(c)) {
                mapS.set(c, mapS.get(c)+1);
            }else{
                mapS.set(c, 1);
            }
        }
        for(let i = 0; i < t.length; i++) {
            let c = t.charAt(i);
            if(mapS.has(c)) {
                if (mapS.get(c) == 1) mapS.delete(c);
                else mapS.set(c, mapS.get(c)-1);
            }else{
                return false;
            }
        }

        return mapS.size == 0;

    //    if(s.split("").sort().join("") === t.split("").sort().join("")) return true;
    //    return false; 
    }
}
