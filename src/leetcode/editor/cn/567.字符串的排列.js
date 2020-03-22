/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 *
 * https://leetcode-cn.com/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (32.08%)
 * Likes:    64
 * Dislikes: 0
 * Total Accepted:    8.5K
 * Total Submissions: 26.4K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 *
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。
 *
 * 示例1:
 *
 *
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 *
 *
 *
 *
 * 示例2:
 *
 *
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 *
 *
 *
 *
 * 注意：
 *
 *
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 *
 *
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const len = s1.length;
  let left = 0;
  let right = len - 1;
  const map1 = getCharCount(s1, {});
  const map2 = getCharCount(s2.slice(0, len), {});
  if (isSame(map1, map2, s1)) {
    return true;
  }
  left++;
  right++;
  while (right < s2.length) {
    map2[s2[left - 1]] -= 1;
    if (typeof map2[s2[right]] === "undefined") {
      map2[s2[right]] = 1;
    } else {
      map2[s2[right]] += 1;
    }
    if (isSame(map1, map2, s1)) {
      return true;
    }
    left++;
    right++;
  }
  return false;
};

function getCharCount(s, map) {
  for (let i = 0; i < s.length; i++) {
    if (typeof map[s[i]] === "undefined") {
      map[s[i]] = 1;
    } else {
      map[s[i]] += 1;
    }
  }
  return map;
}

// 存在事实：如果两个字符串长度相同，并且字符出现次数一致，那么它们互为对方排列
function isSame(map1, map2, s) {
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] !== map2[s[i]]) {
      return false;
    }
  }
  return true;
}

// console.log(checkInclusion("ab", "eidbaooo"));
// console.log(checkInclusion("ab", "eidboaoo"));
