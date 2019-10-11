// 1. Object.fromEntries() 方法是 Object.entries() 的逆操作，用于将一个键值对数组转为对象。
    console.log(Object.fromEntries([
        ['foo', 'bar'],
        ['baz', 42]
    ]));
// 2. 该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。
    // 例一
    const entries = new Map([
        ['foo', 'bar'],
        ['baz', 42]
    ]);
    console.log(Object.fromEntries(entries));
    // 例二
    const map = new Map().set('foo', true).set('bar', false);
    console.log(Object.fromEntries(map));

// 3. 该方法的一个用处是配合 URLSearchParams 对象，将查询字符串转为对象。
    console.log(new URLSearchParams('foo=bar&baz=qux'));
    console.log(Object.fromEntries(new URLSearchParams('foo=bar&baz=qux')));