// 1. Object.assign 方法用于对象的合并，将源对象 source 的所有可枚举属性，复制到目标对象 target
    const target = { a: 1 };

    const source1 = { b: 2 };
    const source2 = { c: 3 };

    Object.assign(target, source1, source2);
    console.log(target);
    // 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

// 2. 如果只有一个参数，Object.assign 会直接返回该参数。
    const obj = {a: 1};
    Object.assign(obj) === obj // true

// 3. 由于 undefined 和 null 无法转成对象，所以如果它们作为参数，就会报错。
    Object.assign(undefined) 
    Object.assign(null)

// 4. 非对象参数出现在源对象的位置，这些参数都会转成对象，如果无法转成对象，就会跳过
    let obj = {a: 1};
    console.log(Object.assign(obj, undefined) === obj);
    console.log(Object.assign(obj, null) === obj);
    const v1 = 'abc';
    const v2 = true;
    const v3 = 10;
    const obj = Object.assign({}, v1, v2, v3);
    console.log(obj);

// 5. Object.assign 拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性( enumerable: false )。
    let obj = Object.assign({b: 'c'}, Object.defineProperty({}, 'invisible', {
                                enumerable: false,
                                value: 'hello'
                             }));
    console.log(obj);

// 6. 属性名为 Symbol 值的属性，也会被 Object.assign 拷贝。
    console.log(Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' }));

// 7. 注意点：
    // 7.1 Object.assign方法实行的是浅拷贝，而不是深拷贝
        const obj1 = {a: {b: 1}};
        const obj2 = Object.assign({}, obj1);
        obj1.a.b = 2;
        console.log(obj2.a.b);
                            
    // 7.2 同名属性的替换
        const target = { a: { b: 'c', d: 'e' } }
        const source = { a: { b: 'hello' } }
        Object.assign(target, source)
        console.log(target);

    // 7.3 Object.assign 可以用来处理数组，但是会把数组视为对象。
        console.log(Object.assign([1, 2, 3], [4, 5]));

    // 7.4 Object.assign 只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
        const source = {
            get foo() { return 1 }
        };
        const target = {};
        console.log(Object.assign(target, source));


// 8. 常见用途：
    // 8.1 为对象添加属性
        class Point {
            constructor(x, y) {
                Object.assign(this, {x, y});
            }
        }
    // 8.2 为对象添加方法
        Object.assign(SomeClass.prototype, {
            someMethod(arg1, arg2) {
                ···
            },
            anotherMethod() {
                ···
            }
        });
        //  等同于下面的写法
        SomeClass.prototype.someMethod = function (arg1, arg2) {
            ···
        };
        SomeClass.prototype.anotherMethod = function () {
            ···
        };
    // 8.3 克隆对象
        function clone(origin) {
            return Object.assign({}, origin);
        }
        // 采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。
        function clone(origin) {
            let originProto = Object.getPrototypeOf(origin);
            return Object.assign(Object.create(originProto), origin);
        }
    // 8.4 合并多个对象
        const merge = (target, ...sources) => Object.assign(target, ...sources);
    // 8.5 为属性指定默认值
        const DEFAULTS = {
            logLevel: 0,
            outputFormat: 'html'
        };  
        function processContent(options) {
            options = Object.assign({}, DEFAULTS, options);
            console.log(options);
        }
        // 注意，由于存在浅拷贝的问题，DEFAULTS对象和options对象的所有属性的值，最好都是简单类型，不要指向另一个对象。否则，DEFAULTS对象的该属性很可能不起作用。
        const DEFAULTS = {
            url: {
                host: 'example.com',
                port: 7070
            },
        };
        processContent({ url: {port: 8000} })
        // 上面代码的原意是将 url.port 改成 8000，url.host 不变。实际结果却是 options.url 覆盖掉 DEFAULTS.url ，所以 url.host 就不存在了
