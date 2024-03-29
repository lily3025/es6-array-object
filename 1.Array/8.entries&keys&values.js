// 1. ES6 提供三个新的方法: entries()， keys()和 values() 用于遍历数组。它们都返回一个遍历器对象（详见 《Iterator》 一章, 可以用 for...of 循环进行遍历，唯一的区别是 keys()是对键名的遍历、 values()是对键值的遍历， entries()是对键值对的遍历。
    for (let index of ['a', 'b'].keys()) {
        console.log(index);
    }

    for (let elem of ['a', 'b'].values()) {
        console.log(elem);
    }

    for (let [index, elem] of ['a', 'b'].entries()) {
        console.log(index, elem);
    }

// 2. 如果不使用 for...of 循环，可以手动调用遍历器对象的 next 方法，进行遍历。
    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    console.log(entries.next().value);
    console.log(entries.next().value); 
    console.log(entries.next().value); 