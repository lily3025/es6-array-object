// 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
/* Array.prototype.copyWithin(target, start = 0, end = this.length)
   target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
   start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
   end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
*/
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3));

    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));

    console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));

    console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));