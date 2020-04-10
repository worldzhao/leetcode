const str = 'blog.toutiao.com.cn';

const reverse = (str) => {
    const stack = [];
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '.') {
            while (stack.length) {
                const top = stack.pop();
                res += top;
            }
            res += str[i];
        } else {
            stack.push(str[i]);
        }
    }

    while (stack.length) {
        res += stack.pop();
    }

    return res;
};

console.log(reverse(str)); // cn.com.toutiao.www
