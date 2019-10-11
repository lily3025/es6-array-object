// 1. fill 方法使用给定值，填充一个数组
    console.log(['a', 'b', 'c'].fill(7));
    console.log(new Array(3).fill(7));

// 2. fill 方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
    console.log(['a', 'b', 'c'].fill(7, 1, 2));

// 3. 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
    let arr = new Array(3).fill({name: "Mike"});
    arr[0].name = "Ben";
    console.log(arr); 

    let arr1 = new Array(3).fill([]);
    arr1[0].push(5);
    console.log(arr1);