// 1. ES5 的 Object.getOwnPropertyDescriptor() 方法会返回某个对象属性的描述对象（descriptor）。ES2017(es8) 引入了Object.getOwnPropertyDescriptors()方法，返回指定对象所有自身属性（非继承属性）的描述对象。
  const obj = {
      foo: 123,
      get bar() { return 'abc' }
  };
  console.log(Object.getOwnPropertyDescriptors(obj));

  // 该方法的实现
  function getOwnPropertyDescriptors(obj) {
      const result = {};
      for (let key of Reflect.ownKeys(obj)) {
        result[key] = Object.getOwnPropertyDescriptor(obj, key);
      }
      return result;
  }

// 2. 该方法的引入目的，主要是为了解决 Object.assign() 无法正确拷贝 get 属性和 set 属性的问题。
  const source = {
      set foo(value) {
        console.log(value);
      }
  };
  const target1 = {};
  Object.assign(target1, source);
  console.log(Object.getOwnPropertyDescriptor(target1, 'foo'));
  // 因为Object.assign方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法。

  const source = {
      set foo(value) {
        console.log(value);
      }
  };
  const target2 = {};
  Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
  console.log(Object.getOwnPropertyDescriptor(target2, 'foo'));

// 3. 该方法的另一个用处是配合 Object.create() 方法，将对象属性克隆到一个新对象。这属于浅拷贝。
  const clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

// 4. 该方法可以实现一个对象继承另一个对象。
  // 以前，继承另一个对象，常常写成下面这样。
  const obj = Object.create(prot);
  obj.foo = 123;
  // 或者
  const obj = Object.assign(
    Object.create(prot),
    {
      foo: 123,
    }
  );
  // 有了Object.getOwnPropertyDescriptors()，我们就有了另一种写法。
  const obj = Object.create(
      prot,
      Object.getOwnPropertyDescriptors({
        foo: 123,
      })
  );