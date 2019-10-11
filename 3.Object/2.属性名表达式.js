// 1. JavaScript 定义对象的属性，有两种方法。
  // 1.1 方法一: 直接用标识符作为属性名
    obj.foo = true;
  // 1.2 方法二: 用表达式作为属性名
    obj['a' + 'bc'] = 123;

// 2. 但是，如果使用字面量方式定义对象（使用大括号），在 ES5 中只能使用方法一（标识符）定义属性。
  var obj = {
      foo: true,
      abc: 123
  };
// 3. ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。
  let propKey = 'foo';
  let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
  };

// 4. 表达式还可以用于定义方法名。
  let obj = {
      ['h' + 'ello']() {
        return 'hi';
      }
  };
  console.log(obj.hello());


// 5. 注意，属性名表达式与简洁表示法，不能同时使用，会报错。
  // 报错
  const foo = 'bar';
  const bar = 'abc';
  const baz = { [foo] };
  // 正确
  const foo = 'bar';
  const baz = { [foo]: 'abc'};

// 6. 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，
  const keyA = {a: 1};
  const keyB = {b: 2};
  const myObject = {
    [keyA]: 'valueA',
    [keyB]: 'valueB'
  };
  console.log(myObject);
