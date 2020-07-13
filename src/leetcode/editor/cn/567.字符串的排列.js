/**
 * [567].字符串的排列-permutation-in-string
 */

// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
//
// 换句话说，第一个字符串的排列之一是第二个字符串的子串。
//
// 示例1:
//
//
// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").
//
//
//
//
// 示例2:
//
//
// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False
//
//
//
//
// 注意：
//
//
// 输入的字符串只包含小写字母
// 两个字符串的长度都在 [1, 10,000] 之间
//
// Related Topics 双指针 Sliding Window
// 👍 151 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const map1 = new Map();
  const map2 = new Map();
  let left = 0;
  let right = 0;
  let match = 0;

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    map1.set(char, map1.has(char) ? map1.get(char) + 1 : 1);
  }

  while (right < s2.length) {
    const char = s2[right];
    if (map1.has(char)) {
      map2.set(char, map2.has(char) ? map2.get(char) + 1 : 1);
      map2.get(char) === map1.get(char) && (match += 1);
    }
    right++;

    while (match === map1.size) {
      if (right - left === s1.length) {
        return true;
      }
      const char = s2[left];
      if (map1.has(char)) {
        map2.set(char, map2.get(char) - 1);
        map2.get(char) < map1.get(char) && (match -= 1);
      }
      left++;
    }
  }

  return false;
};
//leetcode submit region end(Prohibit modification and deletion)
