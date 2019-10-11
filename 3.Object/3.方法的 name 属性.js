// 1. 函数的 name 属性，返回函数名。对象方法也是函数，因此也有 name 属性。
  function test(){}
  console.log(test.name);

  const person = {
      sayName() {
          console.log('hello!');
      },
  };
  console.log(person.sayName.name);

// 2. 如果对象的方法使用了取值函数 getter 和存值函数 setter，则 name 属性不是在该方法上面，而是该方法的属性的描述对象的 get 和 set 属性上面，返回值是方法名前加上 get 和 set 。
  const obj = {
      get foo() {},
      set foo(x) {}
  };
  // obj.foo.name
  const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
  console.log(descriptor.get.name);
  console.log(descriptor.set.name);

// 3. 有两种特殊情况：bind 方法创造的函数，name 属性返回 bound 加上原函数的名字；Function 构造函数创造的函数，name 属性返回 anonymous
  var doSomething = function() {
    // ...
  };
  console.log(doSomething.bind().name);
  console.log((new Function()).name);


// 4. 如果对象的方法是一个 Symbol 值，那么 name 属性返回的是这个 Symbol 值的描述。
  const key1 = Symbol('description');
  const key2 = Symbol();
  let obj = {
    [key1]() {},
    [key2]() {}
  };
  console.log(obj[key1].name);
  console.log(obj[key2].name);