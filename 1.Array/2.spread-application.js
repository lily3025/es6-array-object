// 1. 复制数组
    const a1 = [1, 2];
    const a2 = a1;
    a2[0] = 2;
    a1 // [2, 2]

    // ES5 只能用变通方法来复制数组。
    const a1 = [1, 2];
    const a2 = a1.concat();
    a2[0] = 2;
    a1 // [1, 2]

    // 扩展运算符提供了复制数组的简便写法
    const a1 = [1, 2];
    // 写法一
    const a2 = [...a1];
    // 写法二
    const [...a3] = a1;

// 2. 合并数组
    const arr1 = ['a', 'b'];
    const arr2 = ['c'];
    const arr3 = ['d', 'e'];
    // ES5 的合并数组
    arr1.concat(arr2, arr3);
    // ES6 的合并数组
    [...arr1, ...arr2, ...arr3]
    
    // 这两种方法都是浅拷贝
    const a1 = [{ foo: 1 }];
    const a2 = [{ bar: 2 }];

    const a3 = a1.concat(a2);
    const a4 = [...a1, ...a2];

    a3[0] === a1[0] // true
    a4[0] === a1[0] // true    

// 3. 与解构赋值结合: 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
    const [first, ...rest] = [1, 2, 3, 4, 5];
    const [...butLast, last] = [1, 2, 3, 4, 5]; 

// 4. 将字符串转为数组
    console.log([...'hello']);
    // 上面的写法，一个重要的好处，那就是能够正确识别四个字节的 Unicode 字符。
    console.log('x\uD83D\uDE80y'.length);
    console.log([...'x\uD83D\uDE80y'].length);
    // 凡是涉及到操作四个字节的 Unicode 字符的函数，都有这个问题。因此，最好都用扩展运算符改写。
    let str = 'x\uD83D\uDE80y';
    str.split('').reverse().join('')
    // 'y\uDE80\uD83Dx'
    [...str].reverse().join('')
    // 'y\uD83D\uDE80x'

// 5. 任何定义了遍历器（ Iterator ）接口的对象，都可以用扩展运算符转为真正的数组。比如 Map 结构, Set 结构 Generator 函数
    let nodeList = document.querySelectorAll('div');   // NodeList对象。它不是数组，而是一个类似数组的对象。
    let array = [...nodeList];
    // 对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };
    let arr = [...arrayLike]; 
    // 可以改为使用 Array.from 方法将 arrayLike 转为真正的数组。
    Array.from(arr);

    // 下面代码，先定义了 Number 对象的遍历器接口，扩展运算符将5自动转成 Number 实例以后，就会调用这个接口，就会返回自定义的结果。
    Number.prototype[Symbol.iterator] = function*() {
        let i = 0;
        let num = this.valueOf();
        while (i < num) {
          yield i++;
        }
    }
    console.log([...5]) // [0, 1, 2, 3, 4]

