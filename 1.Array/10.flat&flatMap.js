// 1. Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
    console.log([1, 2, [3, 4]].flat());

// 2. 如果不管有多少层嵌套，都要转成一维数组，可以用 Infinity 关键字作为参数。
    console.log([1, [2, [3]]].flat(Infinity));

// 3. 如果原数组有空位， flat()方法会跳过空位。
    console.log([1, 2, , 4, 5].flat());

// 4. flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
    console.log([2, 3, 4].flatMap((x) => [x, x * 2]));
    // 相当于 [[2, 4], [3, 6], [4, 8]].flat()

// 5. flatMap()方法的参数是一个遍历函数，该函数可以接受三个参数，分别是当前数组成员、当前数组成员的位置（从零开始）、原数组。
    arr.flatMap(function callback(currentValue[, index[, array]]) {
        // ...
    }[, thisArg])

// 6. flatMap()方法还可以有第二个参数，用来绑定遍历函数里面的this。
    var person = {name: 'jeck', age: 10};
    [1, 4, 3, 10].flatMap(function(item){return item + this.age}, person);