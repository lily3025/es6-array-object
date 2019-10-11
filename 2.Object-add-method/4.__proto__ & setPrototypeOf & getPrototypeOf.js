// 1. __proto__ 属性（前后各两个下划线），用来读取或设置当前对象的 prototype 对象。目前，所有浏览器（包括 IE11）都部署了这个属性。
    const obj = {
        method: function() { ... }
    };
    obj.__proto__ = someOtherObj;
    // 该特性已被 Web 标准废弃掉，只是因为各大浏览器都实现了，所以 es6 中才加入了此属性 (https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
    // 建议使用 Object.create, Object.setPrototypeOf, Object.getPrototypeOf 读取或设置当前对象的 prototype 对象

// 2. Object.setPrototypeOf 方法的作用与 __proto__ 相同，用来设置一个对象的 prototype 对象，返回参数对象本身。它是 ES6 正式推荐的设置原型对象的方法。
    // 格式
    Object.setPrototypeOf(object, prototype)

    // 该方法等同于下面的函数。
    function setPrototypeOf(obj, proto) {
        obj.__proto__ = proto;
        return obj;
    }

    // 如果第一个参数不是对象，会自动转为对象。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。
    console.log(Object.setPrototypeOf(1, {}) === 1);
    console.log(Object.setPrototypeOf('foo', {}) === 'foo');
    console.log(Object.setPrototypeOf(true, {}) === true);

    // 由于 undefined 和 null 无法转为对象，所以如果第一个参数是 undefined 或 null ，就会报错。
    console.log(Object.setPrototypeOf(undefined, {}));
    console.log(Object.setPrototypeOf(null, {}));

// 3. Object.getPrototypeOf 该方法与 Object.setPrototypeOf 方法配套，用于读取一个对象的原型对象。
    function Rectangle() {
        // ...
    }
    const rec = new Rectangle();
    console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
    Object.setPrototypeOf(rec, Object.prototype);
    console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);

    // 如果参数不是对象，会被自动转为对象。

    // 等同于 Object.getPrototypeOf(Number(1))
    console.log(Object.getPrototypeOf(1));

    // 等同于 Object.getPrototypeOf(String('foo'))
    console.log(Object.getPrototypeOf('foo'));

    // 等同于 Object.getPrototypeOf(Boolean(true))
    console.log(Object.getPrototypeOf(true));
    
    console.log(Object.getPrototypeOf(1) === Number.prototype);
    console.log(Object.getPrototypeOf('foo') === String.prototype);
    console.log(Object.getPrototypeOf(true) === Boolean.prototype);

    // 如果参数是 undefined 和 null ，它们无法转为对象，所以会报错。
    Object.getPrototypeOf(null)
    Object.getPrototypeOf(undefined)
