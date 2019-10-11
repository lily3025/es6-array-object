// ES2018(es9) 将扩展运算符引入了对象
// 1. 解构赋值
  // 1.1 对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历的但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    console.log(x, y, z);

  // 1.2 由于解构赋值要求等号右边是一个对象，所以如果等号右边是 undefined 或 null ，就会报错，因为它们无法转为对象。
    let { ...z } = null; // 运行时错误
    let { ...z } = undefined; // 运行时错误

  // 1.3 解构赋值必须是最后一个参数，否则会报错。
    let { ...x, y, z } = {x: 1, y: 2, z: 3};  
    let { x, ...y, ...z } = {x: 1, y: 2, z: 3};

  // 1.4 解构赋值的拷贝是浅拷贝
    let obj = { a: { b: 1 } };
    let { ...x } = obj;
    console.log(x);
    obj.a.b = 2;
    console.log(x.a.b);

  // 1.5 扩展运算符的解构赋值，不能复制继承自原型对象的属性。
    let o1 = { a: 1 };
    let o2 = { b: 2 };
    o2.__proto__ = o1;
    let { ...o3 } = o2;
    console.log(o3);

    const o = Object.create({ x: 1, y: 2 });
    o.z = 3;
    let { x, ...newObj } = o;
    let { y, z } = newObj;
    console.log(x, y, z);

  // 1.6 ES6 规定，变量声明语句之中，如果使用解构赋值，扩展运算符后面必须是一个变量名，而不能是一个解构赋值表达式，所以上面代码引入了中间变量newObj，如果写成下面这样会报错。
  let { x, ...{ y, z } } = o;

// 2. 扩展运算符
  // 2.1 对象的扩展运算符 ... 用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
    let z = { a: 3, b: 4 };
    let n = { ...z };
    console.log(n);

  // 2.2 由于数组是特殊的对象，所以对象的扩展运算符也可以用于数组。
    let foo = { ...['a', 'b', 'c'] };
    console.log(foo);

  // 2.3 如果扩展运算符后面是一个空对象，则没有任何效果。
    {...{}, a: 1}
    // { a: 1 }

  // 2.4. 如果扩展运算符后面不是对象，则会自动将其转为对象。
    // 2.4.1 等同于 {...Object(1)}, 扩展运算符后面是整数1，会自动转为数值的包装对象Number{1}。由于该对象没有自身属性，所以返回一个空对象。
      {...1} // {}

    // 2.4.2 等同于 {...Object(true)}
      {...true} // {}

    // 2.4.3 等同于 {...Object(undefined)}
      {...undefined} // {}

    // 2.4.4 等同于 {...Object(null)}
      {...null} // {}

    // 2.4.5 如果扩展运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象。
      {...'hello'} // {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}

  // 2.5 对象的扩展运算符等同于使用Object.assign()方法。
    let aClone = { ...a };
    // 等同于
    let aClone = Object.assign({}, a);
    // 上面的例子只是拷贝了对象实例的属性，如果想完整克隆一个对象，还拷贝对象原型的属性，可以采用下面的写法。
    // 写法一: __proto__属性在非浏览器的环境不一定部署，因此推荐使用写法二和写法三
      const clone1 = {
          __proto__: Object.getPrototypeOf(obj),
          ...obj
      };

    // 写法二
      const clone2 = Object.assign(
          Object.create(Object.getPrototypeOf(obj)),
          obj
      );

    // 写法三
      const clone3 = Object.create(
          Object.getPrototypeOf(obj),
          Object.getOwnPropertyDescriptors(obj)
      )

  // 2.6 扩展运算符可以用于合并两个对象。
  let ab = { ...a, ...b };
  // 等同于
  let ab = Object.assign({}, a, b);

  // 2.7. 与数组的扩展运算符一样，对象的扩展运算符后面可以跟表达式。
    const obj = {
        ...(x > 1 ? {a: 1} : {}),
        b: 2,
    };

  // 2.8. 扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的。
    // 2.8.1 
      let a = {b: 1};
      let aWithXGetter = {
          ...a,
          get x() {
            throw new Error('not throw yet');
          }
      };
        
    // 2.8.2 
      let a = {b: 1};
      let runtimeError = {
          ...a,
          ...{
            get x() {
              throw new Error('throw now');
            }
          }
      };      