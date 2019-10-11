// 1. this 关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字 super ，指向当前对象的原型对象。
    const proto = {
        foo: 'hello'
    };
    const obj = {
        foo: 'world',
        find() {
            return super.foo;
        }
    };
    Object.setPrototypeOf(obj, proto);
    console.log(obj.find());


// 2. super 关键字表示原型对象时，只能用在对象的方法中，用在其他地方都会报错，目前只有对象的简写法可以让 js 引擎确认定义的是对象的方法
    // 报错
    const obj = {
        foo: super.foo
    }
    // 报错
    const obj = {
        foo: () => super.foo
    }
    // 报错
    const obj = {
        foo: function () {
            return super.foo
        }
    }

// 3. JavaScript 引擎内部， super.foo 等同于 Object.getPrototypeOf(this).foo （属性）或 Object.getPrototypeOf(this).foo.call(this) （方法）
    const proto = {
        x: 'hello',
        foo() {
            console.log(this.x);
        },
    };

    const obj = {
        x: 'world',
        foo() {
            super.foo();
        }
    }

    Object.setPrototypeOf(obj, proto);
    obj.foo();


    
    // 上面代码中，super.foo指向原型对象 proto 的 foo 方法，但是绑定的 this 却还是当前对象 obj ，因此输出的就是world。