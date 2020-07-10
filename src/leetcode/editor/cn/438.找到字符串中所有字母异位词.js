/**
 * [438].找到字符串中所有字母异位词-find-all-anagrams-in-a-string
 */

// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
//
// 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
//
// 说明：
//
//
// 字母异位词指字母相同，但排列不同的字符串。
// 不考虑答案输出的顺序。
//
//
// 示例 1:
//
//
// 输入:
// s: "cbaebabacd" p: "abc"
//
// 输出:
// [0, 6]
//
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
//
//
// 示例 2:
//
//
// 输入:
// s: "abab" p: "ab"
//
// 输出:
// [0, 1, 2]
//
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
//
// Related Topics 哈希表

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const map1 = new Map();
  for (let i = 0; i < p.length; i++) {
    if (map1.has(p[i])) {
      map1.set(p[i], map1.get(p[i]) + 1);
    } else {
      map1.set(p[i], 1);
    }
  }
  let res = [];
  let left = 0;
  let right = 0;

  let map2 = new Map();
  let match = 0;
  while (right < s.length) {
    const char = s[right];
    if (map1.has(char)) {
      map2.set(char, map2.has(char) ? map2.get(char) + 1 : 1);
      map2.get(char) === map1.get(char) && (match += 1);
    }

    right++;

    while (match === map1.size) {
      const char = s[left];
      const len = right - left;
      if (len === p.length) {
        res.push(left);
      }

      if (map1.has(char)) {
        map2.set(char, map2.get(char) - 1);
        map2.get(char) < map1.get(char) && (match -= 1);
      }

      left++;
    }
  }

  return res;
};

//leetcode submit region end(Prohibit modification and deletion)

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));

/**
 * 初始解法，定长窗口，map记录数量比较，子串首尾更新，map更新
 */
// var findAnagrams = function (s, p) {
//     const pMap = new Map();
//     for (let i = 0; i < p.length; i++) {
//         const char = p[i];
//         pMap.set(char, pMap.has(char) ? pMap.get(char) + 1 : 1);
//     }
//     const sMap = new Map();
//     for (let i = 0; i < p.length; i++) {
//         const char = s[i];
//         sMap.set(char, sMap.has(char) ? sMap.get(char) + 1 : 1);
//     }
//     const validate = () => {
//         for (let i = 0; i < p.length; i++) {
//             const char = p[i];
//             if (sMap.get(char) !== pMap.get(char)) return false;
//         }
//         return true;
//     };
//     let left = 0;
//     let right = p.length - 1;
//     const res = [];
//     while (right < s.length) {
//         if (validate()) {
//             res.push(left);
//         }
//
//         const lChar = s[left];
//         const rChar = s[right + 1];
//         sMap.set(lChar, sMap.get(lChar) - 1);
//         sMap.set(rChar, sMap.has(rChar) ? sMap.get(rChar) + 1 : 1);
//
//         left++;
//         right++;
//     }
//     return res;
// };

// 标准解法
// var findAnagrams = function (s, p) {
//   const res = [];
//   const pMap = new Map();
//   for (let i = 0; i < p.length; i++) {
//     const char = p[i];
//     pMap.set(char, pMap.has(char) ? pMap.get(char) + 1 : 1);
//   }
//   let left = 0;
//   let right = 0;
//   let match = 0;
//   const sMap = new Map();
//   while (right < s.length) {
//     const char = s[right];
//     if (pMap.has(char)) {
//       sMap.set(char, sMap.has(char) ? sMap.get(char) + 1 : 1);
//       sMap.get(char) === pMap.get(char) && (match += 1);
//     }
//
//     while (match === pMap.size) {
//       if (right - left + 1 === p.length) {
//         res.push(left);
//       }
//       const char = s[left];
//       if (pMap.has(char)) {
//         sMap.set(char, sMap.get(char) - 1);
//         sMap.get(char) < pMap.get(char) && (match -= 1);
//       }
//       left++;
//     }
//     right++;
//   }
//
//   return res;
// };

// 复习一
// var findAnagrams = function (s, p) {
//   const map1 = new Map();
//   for (let i = 0; i < p.length; i++) {
//     if (map1.has(p[i])) {
//       map1.set(p[i], map1.get(p[i]) + 1);
//     } else {
//       map1.set(p[i], 1);
//     }
//   }
//
//   const res = [];
//   let left = 0;
//   let right = p.length - 1;
//
//   const map2 = new Map();
//   for (let j = 0; j <= right; j++) {
//     if (map2.has(s[j])) {
//       map2.set(s[j], map2.get(s[j]) + 1);
//     } else {
//       map2.set(s[j], 1);
//     }
//   }
//   while (right <= s.length) {
//     if ((map1.size = map2.size)) {
//       let isMatch = true;
//       for (let i = 0; i < p.length; i++) {
//         if (map1.get(p[i]) !== map2.get(p[i])) {
//           isMatch = false;
//         }
//       }
//       if (isMatch) {
//         res.push(left);
//       }
//     }
//     map2.set(s[left], map2.get(s[left]) - 1);
//     left++;
//     right++;
//     map2.set(s[right], map2.has(s[right]) ? map2.get(s[right]) + 1 : 1);
//   }
//   return res;
// };
