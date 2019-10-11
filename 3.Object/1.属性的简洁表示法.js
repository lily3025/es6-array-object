// 1. 属性简写
  const foo = 'bar';
  const baz = {foo};
  // 等同于
  const baz = {foo: foo};

  function f(x, y) {
      return {x, y};
  }
  console.log(f(1, 2));
  // 等同于
  function f(x, y) {
      return {x: x, y: y};
  }

// 2. 方法简写
  const o = {
      method() {
        return "Hello!";
      }
  };
  // 等同于  
  const o = {
      method: function() {
          return "Hello!";
      }
  };

// 3. CommonJS 模块输出一组变量，就非常合适使用简洁写法。
  let ms = {};
  function getItem (key) {
    return key in ms ? ms[key] : null;
  }
  function setItem (key, value) {
    ms[key] = value;
  }
  function clear () {
    ms = {};
  }
  module.exports = { getItem, setItem, clear };
  // 等同于
  module.exports = {
    getItem: getItem,
    setItem: setItem,
    clear: clear
  };

// 4. 属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。
  const cart = {
      _wheels: 4,
      get wheels () {
          return this._wheels;
      },
      set wheels (value) {
          if (value < this._wheels) {
            throw new Error('数值太小了！');
          }
          this._wheels = value;
      }
  }