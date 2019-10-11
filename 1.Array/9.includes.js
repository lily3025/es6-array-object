// 1. 方法返回一个布尔值，表示某个数组是否包含给定的值
    [1, 2, 3].includes(2);   // true
    [1, 2, 3].includes(4);  // false
    console.log([1, 2, NaN].includes(NaN));

// 2. 该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
    console.log([1, 2, 3].includes(3, 3));
    console.log([1, 2, 3].includes(3, -1));
    console.log([1, 2, 3].includes(3, -4));

// 3. indexOf 方法有两个缺点： 判断不存在要-1去比较；内部使用严格相等运算符（===）进行判断，会导致对 NaN 的误判。 所以 includes 更合适
    console.log([NaN].indexOf(NaN));
    console.log([NaN].includes(NaN));