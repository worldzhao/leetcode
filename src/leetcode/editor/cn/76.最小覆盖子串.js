/**
 * [76].最小覆盖子串-minimum-window-substring
 */

// 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。
//
// 示例：
//
// 输入: S = "ADOBECODEBANC", T = "ABC"
// 输出: "BANC"
//
// 说明：
//
//
// 如果 S 中不存这样的子串，则返回空字符串 ""。
// 如果 S 中存在这样的子串，我们保证它是唯一的答案。
//
// Related Topics 哈希表 双指针 字符串 Sliding Window

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0;
  let right = 0;
  const sMap = new Map();
  let match = 0;
  let res = "";

  // 记录T中的字符个数
  const tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    tMap.set(char, tMap.has(char) ? tMap.get(char) + 1 : 1);
  }

  while (right < s.length) {
    const char = s[right];
    if (tMap.has(char)) {
      sMap.set(char, sMap.has(char) ? sMap.get(char) + 1 : 1);
      sMap.get(char) === tMap.get(char) && (match += 1);
    }

    // 满足条件，收缩窗口
    while (match === tMap.size) {
      if (res.length > right - left + 1 || res === "") {
        res = s.slice(left, right + 1);
      }
      const char = s[left];
      left++;
      if (sMap.has(char)) {
        sMap.set(char, sMap.get(char) - 1);
        sMap.get(char) < tMap.get(char) && (match -= 1);
      }
    }

    right++;
  }
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)

// console.log(minWindow("aa", "aa"));
