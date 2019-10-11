// 1. ES5 引入了 Object.keys 方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历 enumerable 属性的键名。
// ES2017 引入了跟 Object.keys 配套的 Object.values 和 Object.entries ，作为遍历一个对象的补充手段，供 for...of 循环使用。
  let {keys, values, entries} = Object;
  let obj = { a: 1, b: 2, c: 3 };
  for (let key of keys(obj)) {
    console.log(key); // 'a', 'b', 'c'
  }

  for (let value of values(obj)) {
    console.log(value); // 1, 2, 3
  }

  for (let [key, value] of entries(obj)) {
    console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
  }


// 2. Object.values 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历 enumerable 属性的键值。
  const obj = Object.create({}, {p: {value: 42}});
  console.log(Object.values(obj));

  // 返回数组的成员顺序，与本章的《属性的遍历》部分介绍的排列规则一致。
  const obj = { 100: 'a', 2: 'b', 7: 'c' };
  console.log(Object.values(obj));

  // Object.values 会过滤属性名为 Symbol 值的属性。
  console.log(Object.values({ [Symbol()]: 123, foo: 'abc' }));

  // 如果 Object.values 方法的参数是一个字符串，会返回各个字符组成的一个数组。
  console.log(Object.values('foo'));

  // 如果参数不是对象， Object.values 会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以， Object.values 会返回空数组。
  Object.values(42) // []
  Object.values(true) // []

// 3. Object.entries() 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历 enumerable 属性的键值对数组。
  const obj = { foo: 'bar', baz: 42 };
  console.log(Object.entries(obj));
  // 如果原对象的属性名是一个 Symbol 值，该属性会被忽略。
  console.log(Object.entries({ [Symbol()]: 123, foo: 'abc' }));
  // Object.entries 方法的另一个用处是，将对象转为真正的 Map 结构。
  const obj = { foo: 'bar', baz: 42 };
  const map = new Map(Object.entries(obj));
  console.log(map);