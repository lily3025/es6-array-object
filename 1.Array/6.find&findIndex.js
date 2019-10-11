// 1. 数组实例的 find 方法(没有符合条件的成员，则返回 undefined )
    let arr = [1, 5, 10, 15].find(function(value, index, arr) {
        return value > 9;
    });
    console.log(arr);

// 2. 数组实例的 findIndex 方法(所有成员都不符合条件，则返回-1)
    let arrIndex = [1, 5, 10, 15].findIndex(function(value, index, arr) {
        return value > 9;
    });
    console.log(arrIndex);

// 3. 这两个方法都可以接受第二个参数，用来绑定回调函数的 this 对象。
    function f(v){
        return v > this.age;
    }
    let person = {name: 'John', age: 20};
    console.log([10, 12, 26, 15].find(f, person));