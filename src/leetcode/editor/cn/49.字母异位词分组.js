/**
 * [49].字母异位词分组-group-anagrams
 */

//给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
//
// 示例:
//
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
//输出:
//[
//  ["ate","eat","tea"],
//  ["nat","tan"],
//  ["bat"]
//]
//
// 说明：
//
//
// 所有输入均为小写字母。
// 不考虑答案输出的顺序。
//
// Related Topics 哈希表 字符串

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const keyArr = new Array(26);

    for (let j = 0; j < strs[i].length; j++) {
      const char = strs[i][j];
      const index = char.charCodeAt(0) - 97;
      keyArr[index] = keyArr[index] ? keyArr[index] + 1 : 1;
    }

    const key = keyArr.join();
    if (map.has(key)) {
      map.set(key, map.get(key).concat(strs[i]));
    } else {
      map.set(key, [strs[i]]);
    }
  }
  const res = [];
  for (const group of map.values()) {
    res.push(group);
  }
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)
