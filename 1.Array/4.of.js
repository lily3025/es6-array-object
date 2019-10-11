// 1. Array.of方法用于将一组值，转换为数组
    Array.of(3, 11, 8) // [3,11,8]

// 2. 数组构造函数Array()的不足：参数个数的不同，会导致Array()的行为有差异
    console.log(Array()) 
    console.log(Array(3)) 
    console.log(Array(3, 11, 8))

// 3. Array.of基本上可以用来替代Array()或new Array()
    console.log(Array.of())
    console.log(Array.of(undefined))
    console.log(Array.of(1))
    console.log(Array.of(1, 2))

// 4. Array.of方法可以用下面的代码模拟实现。
    function ArrayOf(){
        return [].slice.call(arguments);
    }
