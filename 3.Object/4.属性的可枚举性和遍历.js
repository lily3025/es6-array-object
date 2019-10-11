// 1. 对象的每个属性都有一个描述对象 Descriptor ，用来控制该属性的行为。 Object.getOwnPropertyDescriptor 方法可以获取该属性的描述对象。
    let obj = { foo: 123 };
    console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
    /*
        有四个操作会忽略 enumerable 为 false 的属性。
        for...in 循环 遍历对象自身的和继承的可枚举的属性。
        Object.keys(), JSON.stringify(), Object.assign() 只处理对象自身的可枚举的属性。
    */
    // 对象原型的 toString 方法，以及数组的 length 属性，就通过“可枚举性”，避免被 for...in 遍历到
    console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable);
    console.log(Object.getOwnPropertyDescriptor([], 'length').enumerable);

    // ES6 规定，所有 Class 的原型的方法都是不可枚举的
    console.log(Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable);

    // 总结：大多数时候，我们只关心对象自身的属性。所以，尽量不要用 for...in 循环，而用 Object.keys()代替

/* 2. ES6 一共有 5 种方法可以遍历对象的属性。
    for...in 循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
    Object.keys 只包括对象自身的所有可枚举属性（不含 Symbol 属性）的键名。
    Object.getOwnPropertyNames(obj)  返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
    Object.getOwnPropertySymbols 返回一个数组，包含对象自身的所有 Symbol 属性的键名。
    Reflect.ownKeys 返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
    以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

    首先遍历所有数值键，按照数值升序排列。
    其次遍历所有字符串键，按照加入时间升序排列。
    最后遍历所有 Symbol 键，按照加入时间升序排列。
*/
    console.log(Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 }));