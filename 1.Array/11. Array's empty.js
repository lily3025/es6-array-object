// 1. 数组的空位指，数组的某一个位置没有任何值。比如，Array 构造函数返回的数组都是空位。
  console.log(Array(3));

// 2. 注意，空位不是 undefined ，一个位置的值等于 undefined ，依然是有值的。空位是没有任何值， in 运算符（如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true ）可以说明这一点。
  console.log(0 in [undefined, undefined, undefined]);
  console.log(0 in [, , ,]);

// 3. ES5 对空位的处理很不一致，大多数情况下会忽略空位: forEach(), filter(), reduce(), every() 和some()都会跳过空位。
  // 3.1 forEach()
    [,'a'].forEach((x,i) => console.log(i));  // 1

  // 3.2 filter方法
    console.log(['a', ,'b'].filter(x => true)); // [ 'a', 'b' ]

  // 3.3 reduce方法
    [1, ,2].reduce((x, y) => {
      console.log(x, y);
      return x + y;
    });

  // 3.4 every 方法
    console.log([,'a'].every(x => x === 'a'));

  // 3.5 some 方法
    console.log([,'a'].some(x => x !== 'a') );

  // 3.6 特殊：map()会跳过空位，但会保留这个值
    console.log([,'a'].map(x => 1));

  // 3.7 特殊： join() 和 toString() 会将空位视为 undefined ，而 undefined 和 null 会被处理成空字符串。
    console.log([,'a',undefined,null].join('#'));
    console.log([,'a',undefined,null].toString());

// 4. ES6 则是明确将空位转为 undefined 。
    // 4.1 扩展运算符
    console.log([...['a',,'b']]);

    // 4.2 from
    console.log(Array.from(['a',,'b']));

    // 4.3 find & findIndex
    console.log([,'a'].find(x => true));
    console.log([,'a'].findIndex(x => true));

    // 4.4 fill()会将空位视为正常的数组位置。
    console.log(new Array(3).fill('a'));

    // 4.5 entries & keys & values
    console.log([...[,'a'].entries()]);
    console.log([...[,'a'].keys()]);
    console.log([...[,'a'].values()]);

    // 4.6 for...of循环
    let arr = [, ,];
    for (let i of arr) {
      console.log(1);
    } 

    // 4.7 特殊： copyWithin()会连空位一起拷贝。
    console.log([,'a','b',,].copyWithin(2, 0));

    // 4.8 特殊： flat 和 flatMap 如果原数组有空位，会跳过空位。
    console.log([1, 2, , 4, 5].flat());
    console.log([2, , 3, 4].flatMap((x) => [x, x * 2]));

// 5. ！！！由于空位的处理规则非常不统一，所以建议避免出现空位。