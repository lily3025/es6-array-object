// Array.from 方法用于将两类对象转为真正的数组：1.类似数组的对象（array-like object） 2.可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

// 1. 类似数组的对象，本质特征只有一点，即必须有 length 属性。因此，任何有length属性的对象，都可以通过 Array.from 方法转为数组，而此时扩展运算符就无法转换。
    console.log(Array.from({ length: 3 }));

    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };
    // ES5 的写法
    console.log([].slice.call(arrayLike));
    // ES6 的写法
    console.log(Array.from(arrayLike));

    // ！！！
    let arrayLike2 = {
        a: '1',
        b: '2',
        c: '3',
        length: 3
    }
    console.log(Array.from(arrayLike2));

// 2. 应用: NodeList 对象 => 数组
    let ps = document.querySelectorAll('p');
    Array.from(ps).filter(p => {
      return p.textContent.length > 100;
    });

// 3. 应用: arguments 对象 => 数组
    function foo() {
      var args = Array.from(arguments);
      console.log(args);
    }

// 4. 对于还没有部署该方法的浏览器，可以用 slice 方法替代:slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组
    const toArray = (() =>
      Array.from ? Array.from : obj => [].slice.call(obj)
    )();

// 5. Array.from 还可以接受第二个参数，作用类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
   console.log(Array.from([1, 2, 3], (x) => x * x));
// 如果 map 函数里面用到了 this 关键字，还可以传入 Array.from 的第三个参数，用来绑定 this

// 6. Array.from() 的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 Unicode 字符，可以避免 JavaScript 将大于\uFFFF的 Unicode 字符，算作两个字符的 bug。
    function countSymbols(string) {
      return Array.from(string).length;
    }
    console.log(countSymbols('x\uD83D\uDE80y'));