// 1. 基本用法
    console.log(...[1, 2, 3]);  // 1 2 3
    console.log(1, ...[2, 3, 4], 5);  // 1 2 3 4 5

// 2. 将数组转为函数的参数
    function add(x, y){
        return x + y;
    }
    const numbers = [4, 38];
    console.log(add(...numbers));

// 3. 替代函数的 apply 方法
    // ES5 的写法
    Math.max.apply(null, [14, 3, 77]);
    // ES6 的写法
    Math.max(...[14, 3, 77]);

// 4. push 方法合并数组
    // ES5 的写法
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    Array.prototype.push.apply(arr1, arr2);
    console.log(arr1);  // [0, 1, 2, 3, 4, 5]
    // ES6 的写法
    let arr3 = [0, 1, 2];
    let arr4 = [3, 4, 5];
    arr3.push(...arr4);
    console.log(arr3); // [0, 1, 2, 3, 4, 5]

// 5. 知识点
    // 5.1 扩展运算符后面还可以放置表达式。
    const x = 2;
    const arr = [...(x > 0 ? ['a'] : []), 'b'];

    // 5.2 如果扩展运算符后面是一个空数组，则不产生任何效果。
    console.log([...[], 1]);
    
    // 5.3 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
    (...[1, 2])  
    console.log((...[1, 2]))


